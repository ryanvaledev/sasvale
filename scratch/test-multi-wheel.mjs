import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-scroll-flow-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9234',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9234/json/list');
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

  // Perform multiple wheel events down the page into BuiltAi section
  for (let i = 0; i < 15; i++) {
    await send('Input.dispatchMouseEvent', {
      type: 'mouseWheel',
      x: 700,
      y: 300,
      deltaX: 0,
      deltaY: 300
    });
    await new Promise((r) => setTimeout(r, 100));
  }

  await new Promise((r) => setTimeout(r, 1000));

  const status = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail1 = s1 ? s1.querySelector('.overflow-x-auto') : null;
        const rect1 = s1 ? s1.getBoundingClientRect() : null;
        return {
          windowScrollY: window.scrollY,
          sectionTop: rect1 ? rect1.top : null,
          sectionBottom: rect1 ? rect1.bottom : null,
          railScrollLeft: rail1 ? rail1.scrollLeft : null,
          railScrollWidth: rail1 ? rail1.scrollWidth : null,
          railClientWidth: rail1 ? rail1.clientWidth : null
        };
      })()
    `,
    returnByValue: true
  });
  console.log('After 15 wheel events down the page:', status.result.value);

  ws.close();
} catch (e) {
  console.error('Error:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
