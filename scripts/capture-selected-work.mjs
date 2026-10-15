import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots');

async function captureFullPage(name, width, height) {
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-scroll-${width}`);
  const port = 9500 + Math.floor(Math.random() * 400);
  const args = [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${tempProfile}`,
    `--window-size=${width},${height}`,
    'http://localhost:3000/',
  ];

  const cp = execFile(chromePath, args);
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return new Promise((resolve, reject) => {
    http
      .get(`http://127.0.0.1:${port}/json`, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
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
            send('Emulation.setDeviceMetricsOverride', {
              width,
              height,
              deviceScaleFactor: 2,
              mobile: width < 768,
            });
            setTimeout(() => {
              send('Page.captureScreenshot', {
                format: 'png',
                captureBeyondViewport: true,
              });
            }, 600);
          };

          ws.onmessage = (msg) => {
            const resp = JSON.parse(msg.data);
            if (resp.result && resp.result.data) {
              const buffer = Buffer.from(resp.result.data, 'base64');
              const outFile = path.join(outputDir, name);
              fs.writeFileSync(outFile, buffer);
              console.log(`Successfully captured full page ${name}`);
              ws.close();
              cp.kill();
              resolve();
            }
          };
        });
      })
      .on('error', (err) => {
        cp.kill();
        reject(err);
      });
  });
}

async function run() {
  await captureFullPage('phase1-fullpage-1440px.png', 1440, 900);
  await captureFullPage('phase1-fullpage-375px.png', 375, 812);
}

run();
