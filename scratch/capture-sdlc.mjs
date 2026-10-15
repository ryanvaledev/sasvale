import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots', 'sdlc-reference');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureUrl(targetUrl, filename, width = 1440, height = 900) {
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-sdlc-${Date.now()}`);
  const port = 9500 + Math.floor(Math.random() * 400);
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
  await new Promise((r) => setTimeout(r, 4000));

  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/json`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
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
            const curId = id++;
            ws.send(JSON.stringify({ id: curId, method, params }));
            return curId;
          };

          ws.onopen = () => {
            send('Page.enable');
            send('DOM.enable');
            send('CSS.enable');
            send('Emulation.setDeviceMetricsOverride', {
              width,
              height: 1080,
              deviceScaleFactor: 1.5,
              mobile: false,
            });
            setTimeout(() => {
              send('Page.captureScreenshot', {
                format: 'png',
                fromSurface: true,
                captureBeyondViewport: true,
              });
            }, 3000);
          };

          ws.onmessage = (msg) => {
            const resp = JSON.parse(msg.data);
            if (resp.result && resp.result.data) {
              const buffer = Buffer.from(resp.result.data, 'base64');
              const outFile = path.join(outputDir, filename);
              fs.writeFileSync(outFile, buffer);
              console.log(`Saved screenshot to ${outFile} (${buffer.length} bytes)`);
              ws.close();
              cp.kill();
              resolve(outFile);
            }
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
  try {
    console.log('Capturing sdlccorp.com full page screenshot...');
    await captureUrl('https://sdlccorp.com/', 'sdlccorp-fullpage.png', 1440, 1080);
    console.log('Capture complete!');
  } catch (e) {
    console.error('Error:', e);
  }
}

run();
