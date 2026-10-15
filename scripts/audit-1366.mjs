import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = 'C:\\Temp\\chrome-debug-1366';
const outDir = path.resolve('audit-screenshots', '1366');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const args = [
  '--headless=new',
  '--remote-debugging-port=9226',
  '--disable-gpu',
  '--no-sandbox',
  '--user-data-dir=' + tempProfile,
  '--window-size=1366,768',
  'http://localhost:3000/',
];

const cp = execFile(chromePath, args);

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  await sleep(2500);

  http.get('http://127.0.0.1:9226/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const list = JSON.parse(data);
      const page = list.find(p => p.type === 'page' && p.url.includes('3000'));
      if (!page) {
        console.error('Page not found on port 3000');
        cp.kill();
        return;
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
        console.log('Connected to Chrome DevTools WebSocket');

        // Check overflow
        const evalRes = await send('Runtime.evaluate', {
          expression: `
            (() => {
              const docWidth = document.documentElement.offsetWidth;
              const scrollWidth = document.documentElement.scrollWidth;
              const innerWidth = window.innerWidth;
              const overflows = [];
              document.querySelectorAll('*').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.right > innerWidth + 1) {
                  overflows.push({
                    tag: el.tagName,
                    id: el.id,
                    className: String(el.className).slice(0, 80),
                    right: Math.round(rect.right),
                    width: Math.round(rect.width)
                  });
                }
              });

              // Check sections
              const sections = Array.from(document.querySelectorAll('section, main > div, footer')).map(s => {
                const rect = s.getBoundingClientRect();
                return {
                  id: s.id || s.tagName,
                  ariaLabel: s.getAttribute('aria-label'),
                  top: Math.round(rect.top + window.scrollY),
                  height: Math.round(rect.height),
                  width: Math.round(rect.width)
                };
              });

              return {
                docWidth,
                scrollWidth,
                innerWidth,
                overflowCount: overflows.length,
                overflows: overflows.slice(0, 10),
                sections
              };
            })()
          `,
          returnByValue: true
        });

        console.log('DOM metrics at 1366x768:', JSON.stringify(evalRes.result.value, null, 2));

        // Let's capture screenshots at several scroll heights
        const scrollPositions = [
          { name: '01-hero', y: 0 },
          { name: '02-credibility', y: 800 },
          { name: '03-built-ai-first-start', y: 1600 },
          { name: '04-built-ai-first-mid', y: 2200 },
          { name: '05-proprietary-start', y: 3200 },
          { name: '06-proprietary-mid', y: 4000 },
          { name: '07-industries-start', y: 5500 },
          { name: '08-industries-mid', y: 6400 },
          { name: '09-services-tabbed', y: 8000 },
          { name: '10-video-testimonials', y: 9200 },
          { name: '11-decade-delivery', selector: '#decade-experience' },
          { name: '12-ai-research-lab', selector: '#research-and-stack' },
          { name: '13-faq-insights', selector: '#faq' },
        ];

        for (const pos of scrollPositions) {
          if (pos.selector) {
            await send('Runtime.evaluate', {
              expression: `(() => {
                const el = document.querySelector('${pos.selector}');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: Math.max(0, y - 75), behavior: 'instant' });
                }
              })()`
            });
          } else {
            await send('Runtime.evaluate', {
              expression: `window.scrollTo({ top: ${pos.y}, behavior: 'instant' });`
            });
          }
          await sleep(500);

          const shot = await send('Page.captureScreenshot', { format: 'png' });
          const buffer = Buffer.from(shot.data, 'base64');
          const filePath = path.join(outDir, `${pos.name}.png`);
          fs.writeFileSync(filePath, buffer);
          console.log(`Captured ${pos.name} (${buffer.length} bytes)`);
        }

        ws.close();
        cp.kill();
      };
    });
  }).on('error', (e) => {
    console.error('Error connecting to Chrome:', e.message);
    cp.kill();
  });
}

run();
