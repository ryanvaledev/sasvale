import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = 'C:\\Temp\\chrome-debug-inspect';

const args = [
  '--headless=new',
  '--remote-debugging-port=9230',
  '--disable-gpu',
  '--no-sandbox',
  '--user-data-dir=' + tempProfile,
  '--window-size=1366,768',
  'http://localhost:3000/',
];

const cp = execFile(chromePath, args);

setTimeout(() => {
  http.get('http://127.0.0.1:9230/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const list = JSON.parse(data);
      const page = list.find(p => p.type === 'page' && p.url.includes('3000'));
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
        // Scroll to decade experience
        await send('Runtime.evaluate', {
          expression: `(() => {
            const el = document.querySelector('#decade-experience');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top: y + 80, behavior: 'instant' });
            }
          })()`
        });

        await new Promise(r => setTimeout(r, 1000));

        const info = await send('Runtime.evaluate', {
          expression: `(() => {
            const spans = Array.from(document.querySelectorAll('#decade-experience span'));
            const metricSpans = spans.filter(s => s.textContent.trim().includes('+')).map(s => {
              const rect = s.getBoundingClientRect();
              return {
                text: s.textContent.trim(),
                x: Math.round(rect.x),
                y: Math.round(rect.y),
                width: Math.round(rect.width),
                height: Math.round(rect.height)
              };
            });
            return metricSpans;
          })()`,
          returnByValue: true
        });

        console.log('Metrics found:', info.result.value);

        // Find the center-most metric
        const centerMetric = info.result.value.find(m => m.x > 500 && m.x < 800) || info.result.value[0];
        if (centerMetric) {
          const shot = await send('Page.captureScreenshot', {
            format: 'png',
            clip: {
              x: Math.max(0, centerMetric.x - 30),
              y: Math.max(0, centerMetric.y - 20),
              width: centerMetric.width + 60,
              height: centerMetric.height + 40,
              scale: 1
            }
          });
          fs.writeFileSync('audit-screenshots/1366/metric-crop.png', Buffer.from(shot.data, 'base64'));
          console.log('Saved metric-crop.png');
        }
        ws.close();
        cp.kill();
        process.exit(0);
      };
    });
  });
}, 2500);
