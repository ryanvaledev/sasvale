import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = 'C:\\Temp\\chrome-debug-decade';

const args = [
  '--headless=new',
  '--remote-debugging-port=9229',
  '--disable-gpu',
  '--no-sandbox',
  '--user-data-dir=' + tempProfile,
  '--window-size=1366,768',
  'http://localhost:3000/',
];

const cp = execFile(chromePath, args);

setTimeout(() => {
  http.get('http://127.0.0.1:9229/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const list = JSON.parse(data);
      const page = list.find(p => p.type === 'page' && p.url.includes('3000'));
      if (!page) {
        console.error('Page not found');
        cp.kill();
        process.exit(1);
      }
      const ws = new WebSocket(page.webSocketDebuggerUrl);
      let id = 1;
      const send = (method, params = {}) => new Promise((resolve) => {
        const msgId = id++;
        const handler = (evt) => {
          const resp = JSON.parse(evt.data);
          if (resp.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(resp.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });

      ws.onopen = async () => {
        await send('Runtime.evaluate', {
          expression: `(() => {
            const el = document.querySelector('#decade-experience');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY;
              // Center the section in the 768px viewport
              window.scrollTo({ top: y + 80, behavior: 'instant' });
            }
          })()`
        });

        await new Promise(r => setTimeout(r, 1500));

        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync('audit-screenshots/1366/decade-viewport.png', Buffer.from(shot.data, 'base64'));
        console.log('Saved decade-viewport.png');
        ws.close();
        cp.kill();
        process.exit(0);
      };
    });
  });
}, 2500);
