import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots', 'sdlc-reference');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureWithScroll(targetUrl, filename, width = 1440, height = 900) {
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-sdlc-scroll-${Date.now()}`);
  const port = 9550 + Math.floor(Math.random() * 300);
  const args = [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${tempProfile}`,
    `--window-size=${width},${height}`,
    targetUrl,
  ];

  const cp = execFile(chromePath, args);
  await new Promise((r) => setTimeout(r, 3500));

  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/json`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
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
            await send('DOM.enable');
            await send('Runtime.enable');
            await send('Emulation.setDeviceMetricsOverride', {
              width,
              height: 1080,
              deviceScaleFactor: 1.5,
              mobile: false,
            });

            // Evaluate scroll to bottom in chunks to trigger all lazy-loaded components
            console.log('Scrolling down page...');
            await send('Runtime.evaluate', {
              expression: `
                (async () => {
                  const scrollHeight = () => document.body.scrollHeight;
                  let totalHeight = 0;
                  const distance = 400;
                  while (totalHeight < scrollHeight()) {
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    await new Promise(r => setTimeout(r, 120));
                  }
                  window.scrollTo(0, 0);
                  await new Promise(r => setTimeout(r, 1000));
                })()
              `,
              awaitPromise: true,
            });

            console.log('Finished scrolling. Capturing screenshot...');
            const captureResp = await send('Page.captureScreenshot', {
              format: 'png',
              fromSurface: true,
              captureBeyondViewport: true,
            });

            if (captureResp && captureResp.data) {
              const buffer = Buffer.from(captureResp.data, 'base64');
              const outFile = path.join(outputDir, filename);
              fs.writeFileSync(outFile, buffer);
              console.log(`Saved screenshot to ${outFile} (${buffer.length} bytes)`);
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

async function run() {
  await captureWithScroll('https://sdlccorp.com/', 'sdlccorp-scrolled-full.png');
}

run();
