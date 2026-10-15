import { execFile } from 'node:child_process';
import http from 'node:http';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = 'C:\\Temp\\chrome-debug-profile';
const args = [
  '--headless=new',
  '--remote-debugging-port=9225',
  '--disable-gpu',
  '--no-sandbox',
  '--user-data-dir=' + tempProfile,
  '--window-size=375,812',
  'http://localhost:3000/',
];

const cp = execFile(chromePath, args);

setTimeout(() => {
  http
    .get('http://127.0.0.1:9225/json', (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        const list = JSON.parse(data);
        const page = list.find((p) => p.type === 'page' && p.url.includes('3000'));
        if (!page) {
          console.log('No page found on port 3000. Found:', list);
          cp.kill();
          return;
        }
        const ws = new WebSocket(page.webSocketDebuggerUrl);
        ws.onopen = () => {
          ws.send(
            JSON.stringify({
              id: 1,
              method: 'Runtime.evaluate',
              params: {
                expression: `
                (() => {
                  const results = [];
                  const docWidth = document.documentElement.offsetWidth;
                  const scrollWidth = document.documentElement.scrollWidth;
                  document.querySelectorAll('*').forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.right > 375.5) {
                      results.push({
                        tag: el.tagName,
                        id: el.id,
                        className: String(el.className).slice(0, 50),
                        right: Math.round(rect.right),
                        width: Math.round(rect.width)
                      });
                    }
                  });
                  return {
                    docWidth,
                    scrollWidth,
                    innerWidth: window.innerWidth,
                    overflowingCount: results.length,
                    topOverflows: results.slice(0, 15)
                  };
                })()
              `,
                returnByValue: true,
              },
            })
          );
        };
        ws.onmessage = (msg) => {
          const resp = JSON.parse(msg.data);
          console.log('Result:', JSON.stringify(resp.result.result.value, null, 2));
          ws.close();
          cp.kill();
        };
      });
    })
    .on('error', (e) => {
      console.error('Err:', e.message);
      cp.kill();
    });
}, 2000);
