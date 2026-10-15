import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots', 'sdlc-reference');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function inspectSections() {
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-inspect-${Date.now()}`);
  const port = 9600 + Math.floor(Math.random() * 300);
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
  await new Promise((r) => setTimeout(r, 4000));

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

            // Force reveal all hidden/lazyloaded elements
            console.log('Inspecting DOM sections...');
            const result = await send('Runtime.evaluate', {
              expression: `
                (() => {
                  // Make everything visible
                  document.querySelectorAll('.reveal, [data-elementor-type], .elementor-section, .e-con, section').forEach(el => {
                    el.classList.add('visible');
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.style.transform = 'none';
                  });

                  // Gather top level sections
                  const sections = [];
                  const mainElements = document.querySelectorAll('main section, #page > div, #content section, .elementor-element.e-con-parent, header, footer');
                  
                  const textSections = [];
                  document.querySelectorAll('h1, h2, h3').forEach(h => {
                    let parentSec = h.closest('section') || h.closest('.e-con-parent') || h.closest('.elementor-section') || h.parentElement;
                    textSections.push({
                      tag: h.tagName,
                      heading: h.innerText.trim(),
                      parentClass: parentSec ? parentSec.className : '',
                      parentTextPreview: parentSec ? parentSec.innerText.slice(0, 300).replace(/\\s+/g, ' ') : ''
                    });
                  });

                  // Capture key section metadata
                  const structure = Array.from(document.body.children).map(c => ({
                    tag: c.tagName,
                    id: c.id,
                    className: c.className,
                    text: c.innerText.slice(0, 200).replace(/\\s+/g, ' ')
                  }));

                  return {
                    title: document.title,
                    textSections,
                    structure
                  };
                })()
              `,
              returnByValue: true,
            });

            const parsedValue = result?.result?.value || result?.value || result;
            fs.writeFileSync(
              path.join(outputDir, 'sdlc-sections-analysis.json'),
              JSON.stringify(parsedValue, null, 2)
            );
            console.log('Saved section analysis to sdlc-sections-analysis.json');

            // Now capture section by section screenshots by scrolling through!
            const count = 8;
            for (let i = 0; i < count; i++) {
              await send('Runtime.evaluate', {
                expression: `window.scrollTo(0, ${i * 900});`
              });
              await new Promise(r => setTimeout(r, 600));
              const snap = await send('Page.captureScreenshot', { format: 'png' });
              if (snap && snap.data) {
                fs.writeFileSync(
                  path.join(outputDir, `sdlc-section-${i + 1}.png`),
                  Buffer.from(snap.data, 'base64')
                );
                console.log(`Captured sdlc-section-${i + 1}.png`);
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

inspectSections();
