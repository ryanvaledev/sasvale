import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-freeze-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9233',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9233/json/list');
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

  // Scroll down to where Built AI is visible
  const pos = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        window.scrollTo(0, s1.offsetTop + 100);
        return {
          offsetTop: s1.offsetTop,
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Scrolled to Built AI:', pos.result.value);

  // Get the bounding box of the cards rail
  const railBox = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail = s1.querySelector('.overflow-x-auto');
        const rect = rail.getBoundingClientRect();
        return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2, width: rect.width, height: rect.height };
      })()
    `,
    returnByValue: true
  });
  console.log('Rail center coords:', railBox.result.value);

  const beforeWheel = await send('Runtime.evaluate', {
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

  // Now dispatch a wheel event directly on the cards rail
  await send('Input.dispatchMouseEvent', {
    type: 'mouseWheel',
    x: railBox.result.value.x,
    y: railBox.result.value.y,
    deltaX: 0,
    deltaY: 300
  });

  await new Promise((r) => setTimeout(r, 600));

  const afterWheel = await send('Runtime.evaluate', {
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

  console.log('Before wheel:', beforeWheel.result.value);
  console.log('After wheel:', afterWheel.result.value);

  ws.close();
} catch (e) {
  console.error('Error during testing:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
