import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-lenis-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9228',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9228/json/list');
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

  // Dispatch wheel event on the page
  const res = await send('Input.dispatchMouseEvent', {
    type: 'mouseWheel',
    x: 700,
    y: 500,
    deltaX: 0,
    deltaY: 500
  });

  await new Promise((r) => setTimeout(r, 1000));

  const scrollYAfterWheel = await send('Runtime.evaluate', {
    expression: 'window.scrollY',
    returnByValue: true
  });
  console.log('ScrollY after mouseWheel:', scrollYAfterWheel.result.value);

  // Now dispatch mouseWheel while cursor is at BuiltAiFirstCarousel
  const s1Pos = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        return s1 ? s1.getBoundingClientRect().top : null;
      })()
    `,
    returnByValue: true
  });
  console.log('Built AI top relative to viewport:', s1Pos.result.value);

  ws.close();
} catch (e) {
  console.error('Error during testing:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
