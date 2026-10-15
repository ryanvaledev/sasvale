import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots', 'sasvale-updated');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureSasvale() {
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-sasvale-${Date.now()}`);
  const port = 9890;
  const args = [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${tempProfile}`,
    '--window-size=1440,1080',
    'http://localhost:3000/',
  ];

  const cp = execFile(chromePath, args);
  await new Promise((r) => setTimeout(r, 3000));

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

            // Wait 2s for canvas and animations
            await new Promise(r => setTimeout(r, 2000));

            // Capture Hero Viewport
            const heroSnap = await send('Page.captureScreenshot', { format: 'png' });
            if (heroSnap && heroSnap.data) {
              fs.writeFileSync(
                path.join(outputDir, 'sasvale-hero-banner.png'),
                Buffer.from(heroSnap.data, 'base64')
              );
              console.log('Saved sasvale-hero-banner.png');
            }

            // Scroll down to Credibility Strip
            await send('Runtime.evaluate', {
              expression: `window.scrollTo(0, 850);`
            });
            await new Promise(r => setTimeout(r, 1000));
            const credSnap = await send('Page.captureScreenshot', { format: 'png' });
            if (credSnap && credSnap.data) {
              fs.writeFileSync(
                path.join(outputDir, 'sasvale-credibility-matrix.png'),
                Buffer.from(credSnap.data, 'base64')
              );
              console.log('Saved sasvale-credibility-matrix.png');
            }

            // Scroll down to Services & Outcomes
            await send('Runtime.evaluate', {
              expression: `window.scrollTo(0, 1850);`
            });
            await new Promise(r => setTimeout(r, 1000));
            const servSnap = await send('Page.captureScreenshot', { format: 'png' });
            if (servSnap && servSnap.data) {
              fs.writeFileSync(
                path.join(outputDir, 'sasvale-services-outcomes.png'),
                Buffer.from(servSnap.data, 'base64')
              );
              console.log('Saved sasvale-services-outcomes.png');
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

captureSasvale().catch(console.error);
