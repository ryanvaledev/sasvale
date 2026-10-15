import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-why-zero-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9237',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9237/json/list');
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

  await new Promise((r) => setTimeout(r, 1500));

  const result = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail = s1.querySelector('.overflow-x-auto');
        
        // Remove scroll-smooth class and test
        rail.classList.remove('scroll-smooth');
        rail.style.scrollBehavior = 'auto';
        rail.scrollLeft = 500;
        const withAuto = rail.scrollLeft;

        // Try scrollTo
        rail.scrollTo({ left: 400, behavior: 'instant' });
        const withInstant = rail.scrollLeft;

        // Check computed styles
        const cs = window.getComputedStyle(rail);
        
        return {
          withAuto,
          withInstant,
          overflowX: cs.overflowX,
          overflowY: cs.overflowY,
          display: cs.display,
          position: cs.position,
          scrollBehavior: cs.scrollBehavior,
          scrollSnapType: cs.scrollSnapType
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Result after removing scroll-smooth:', result.result.value);

  ws.close();
} catch (e) {
  console.error('Error:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
