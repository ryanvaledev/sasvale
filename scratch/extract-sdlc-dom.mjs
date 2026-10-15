import { execFile } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function extractSDLCDom() {
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-dom-${Date.now()}`);
  const port = 9850;
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

            // Evaluate DOM structure
            const result = await send('Runtime.evaluate', {
              expression: `
                (() => {
                  const sections = [];
                  // Get main sections or containers
                  const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, section, [class*="section"]'));
                  
                  const extracted = [];
                  const seen = new Set();
                  
                  document.querySelectorAll('h1, h2').forEach(h => {
                    const text = h.innerText.trim();
                    if (!text || seen.has(text)) return;
                    seen.add(text);
                    
                    // Find parent container
                    let container = h.closest('section') || h.parentElement;
                    const subText = container ? container.innerText.split('\\n').map(s => s.trim()).filter(Boolean).slice(0, 15) : [];
                    
                    extracted.push({
                      tag: h.tagName,
                      heading: text,
                      snippet: subText
                    });
                  });
                  
                  // Also get navigation links
                  const navLinks = Array.from(document.querySelectorAll('header nav a, header a')).map(a => a.innerText.trim()).filter(Boolean);
                  
                  return {
                    title: document.title,
                    navLinks: Array.from(new Set(navLinks)),
                    headings: extracted
                  };
                })()
              `,
              returnByValue: true
            });

            fs.writeFileSync(
              path.resolve('audit-screenshots', 'sdlc-reference', 'sdlc-extracted-dom.json'),
              JSON.stringify(result.result.value, null, 2)
            );
            console.log('Saved DOM analysis successfully');

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

extractSDLCDom().catch(console.error);
