import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\XC THE TECH STORE\\.gemini\\antigravity-ide\\brain\\7ad29e66-561d-4143-a659-6b479b64a6b0';

const targets = [
  { name: 'hero-reference-desktop-1440.png', width: 1440, height: 960, mobile: false },
  { name: 'hero-reference-tablet-768.png', width: 768, height: 1024, mobile: false },
  { name: 'hero-reference-mobile-375.png', width: 375, height: 812, mobile: true },
];

async function captureOne(target) {
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-cdp-${target.width}`);
  const port = 9300 + Math.floor(Math.random() * 500);
  const args = [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${tempProfile}`,
    '--window-size=1920,1080',
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
              width: target.width,
              height: target.height,
              deviceScaleFactor: 2,
              mobile: target.mobile,
            });
            setTimeout(() => {
              const params = {
                format: 'png',
                fromSurface: true,
              };
              if (target.clip) {
                params.clip = target.clip;
              }
              send('Page.captureScreenshot', params);
            }, 800);
          };

          ws.onmessage = (msg) => {
            const resp = JSON.parse(msg.data);
            if (resp.result && resp.result.data) {
              const buffer = Buffer.from(resp.result.data, 'base64');
              const outFile = path.join(artifactDir, target.name);
              fs.writeFileSync(outFile, buffer);
              console.log(`Successfully captured ${target.name} (${target.width}x${target.height})`);
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
  for (const t of targets) {
    try {
      await captureOne(t);
    } catch (e) {
      console.error(`Error capturing ${t.name}:`, e.message);
    }
  }
}

run();
