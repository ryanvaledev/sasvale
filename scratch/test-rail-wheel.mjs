import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-rail-wheel-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9229',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9229/json/list');
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

  // Scroll window into Built AI section
  await send('Runtime.evaluate', {
    expression: `
      const s1 = document.getElementById('built-ai-first');
      window.scrollTo(0, s1.offsetTop + 400);
    `
  });

  await new Promise((r) => setTimeout(r, 800));

  const state1 = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail = s1.querySelector('.overflow-x-auto');
        return {
          windowScrollY: window.scrollY,
          railScrollLeft: rail.scrollLeft,
          railScrollWidth: rail.scrollWidth,
          railClientWidth: rail.clientWidth
        };
      })()
    `,
    returnByValue: true
  });
  console.log('State after window scroll into Built AI:', state1.result.value);

  // Now dispatch a wheel event directly over the rail (x: 720, y: 500)
  await send('Input.dispatchMouseEvent', {
    type: 'mouseWheel',
    x: 720,
    y: 500,
    deltaX: 0,
    deltaY: 400
  });

  await new Promise((r) => setTimeout(r, 800));

  const state2 = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail = s1.querySelector('.overflow-x-auto');
        return {
          windowScrollY: window.scrollY,
          railScrollLeft: rail.scrollLeft
        };
      })()
    `,
    returnByValue: true
  });
  console.log('State after wheel event over rail:', state2.result.value);

  ws.close();
} catch (e) {
  console.error('Error during testing:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
