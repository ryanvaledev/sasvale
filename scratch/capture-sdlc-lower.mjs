import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots', 'sdlc-reference');

async function captureLower() {
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-lower-${Date.now()}`);
  const port = 9700 + Math.floor(Math.random() * 200);
  const args = [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${tempProfile}`,
    '--window-size=1440,1080',
    'https://sdlccorp.com/',
  ];

  const cp = execFile(chromePath, args);
  await new Promise((r) => setTimeout(r, 3500));

  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/json`, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', async () => {
        try {
          const list = JSON.parse(data);
          const page = list.find((p) => p.type === 'page');
          if (!page) {
            cp.kill();
            return reject(new Error('No page found'));
          }
          const ws = new WebSocket(page.webSocketDebuggerUrl);
          let id = 1;
          const send = (method, params = {}) => {
            return new Promise((resCall) => {
              const curId = id++;
              const handler = (msg) => {
                const resp = JSON.parse(msg.data);
                if (resp.id === curId) {
                  ws.removeEventListener('message', handler);
                  resCall(resp.result);
                }
              };
              ws.addEventListener('message', handler);
              ws.send(JSON.stringify({ id: curId, method, params }));
            });
          };

          ws.onopen = async () => {
            await send('Page.enable');
            await send('Runtime.enable');

            // Remove cookie banner
            await send('Runtime.evaluate', {
              expression: `
                const banner = document.querySelector('#cookie-law-info-bar, .cky-consent-container, [aria-label*="cookie"], [class*="cookie"]');
                if (banner) banner.remove();
                document.querySelectorAll('div').forEach(d => {
                  if (d.innerText && d.innerText.includes('This website uses cookies')) d.remove();
                });
              `
            });

            // Capture sections from 5000px onwards down to bottom
            const scrollPositions = [4500, 5600, 6800, 8000, 9200, 10500, 12000, 13500, 15000];
            for (let i = 0; i < scrollPositions.length; i++) {
              const y = scrollPositions[i];
              await send('Runtime.evaluate', {
                expression: `
                  window.scrollTo(0, ${y});
                  document.querySelectorAll('.reveal, [data-elementor-type], .elementor-section, .e-con, section').forEach(el => {
                    el.classList.add('visible');
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.style.transform = 'none';
                  });
                `
              });
              await new Promise(r => setTimeout(r, 600));
              const snap = await send('Page.captureScreenshot', { format: 'png' });
              if (snap && snap.data) {
                fs.writeFileSync(
                  path.join(outputDir, `sdlc-lower-${i + 9}.png`),
                  Buffer.from(snap.data, 'base64')
                );
                console.log(`Captured sdlc-lower-${i + 9}.png at y=${y}`);
              }
            }

            ws.close();
            cp.kill();
            resolve();
          };
        } catch (e) {
          cp.kill();
          reject(e);
        }
      });
    }).on('error', (err) => {
      cp.kill();
      reject(err);
    });
  });
}

captureLower();
