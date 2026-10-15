import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const routes = [
  { path: '', prefix: 'home' },
  { path: 'services', prefix: 'services' },
  { path: 'work', prefix: 'work' },
];

const viewports = [
  { name: '1440px', width: 1440, height: 900, mobile: false },
  { name: '768px', width: 768, height: 1024, mobile: false },
  { name: '375px', width: 375, height: 812, mobile: true },
];

async function captureRouteViewport(route, vp, fullPage = false) {
  const filename = `${route.prefix}-${vp.name}${fullPage ? '-full' : ''}.png`;
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-cdp-${route.prefix}-${vp.width}`);
  const port = 9400 + Math.floor(Math.random() * 500);
  const targetUrl = `http://localhost:3000/${route.path}`;
  const args = [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${tempProfile}`,
    '--window-size=1920,1080',
    targetUrl,
  ];

  const cp = execFile(chromePath, args);

  await new Promise((resolve) => setTimeout(resolve, 1800));

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
              width: vp.width,
              height: vp.height,
              deviceScaleFactor: 2,
              mobile: vp.mobile,
            });
            setTimeout(() => {
              send('Page.captureScreenshot', {
                format: 'png',
                fromSurface: true,
                captureBeyondViewport: fullPage,
              });
            }, 800);
          };

          ws.onmessage = (msg) => {
            const resp = JSON.parse(msg.data);
            if (resp.result && resp.result.data) {
              const buffer = Buffer.from(resp.result.data, 'base64');
              const outFile = path.join(outputDir, filename);
              fs.writeFileSync(outFile, buffer);
              console.log(`Captured ${filename}`);
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
  for (const r of routes) {
    for (const vp of viewports) {
      try {
        await captureRouteViewport(r, vp, false);
      } catch (e) {
        console.error(`Error capturing ${r.prefix}-${vp.name}:`, e.message);
      }
    }
    // Also capture fullpage at 1440px for complete review
    try {
      await captureRouteViewport(r, { name: '1440px', width: 1440, height: 900, mobile: false }, true);
    } catch (e) {
      console.error(`Error capturing fullpage for ${r.prefix}:`, e.message);
    }
  }
}

run();
