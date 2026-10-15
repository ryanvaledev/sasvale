import { spawn } from 'node:child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-inspect-${Date.now()}`);
import path from 'node:path';

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9223',
  '--window-size=1440,900',
  'http://localhost:3000/#decade-experience',
]);

await new Promise((r) => setTimeout(r, 1500));

try {
  const versionRes = await fetch('http://127.0.0.1:9223/json/list');
  const tabs = await versionRes.json();
  const pageTab = tabs.find((t) => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  await new Promise((res) => ws.onopen = res);

  let id = 1;
  const send = (method, params = {}) => {
    return new Promise((resolve) => {
      const msgId = id++;
      const handler = (event) => {
        const data = JSON.parse(event.data);
        if (data.id === msgId) {
          ws.removeEventListener('message', handler);
          resolve(data.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  };

  await new Promise((r) => setTimeout(r, 1000));

  const result = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.getElementById('decade-experience');
        const cards = el ? Array.from(el.querySelectorAll('h3')).map(h => {
          const cardEl = h.closest('.select-none');
          const rect = cardEl ? cardEl.getBoundingClientRect() : null;
          const style = cardEl ? window.getComputedStyle(cardEl) : null;
          return {
            title: h.innerText,
            rect: rect ? { x: rect.x, y: rect.y, width: rect.width, height: rect.height } : null,
            opacity: style ? style.opacity : null,
            display: style ? style.display : null,
            visibility: style ? style.visibility : null
          };
        }) : [];
        return cards;
      })()
    `,
    returnByValue: true
  });

  console.log('Cards found:', JSON.stringify(result.result.value, null, 2));
  ws.close();
} finally {
  chrome.kill();
}
