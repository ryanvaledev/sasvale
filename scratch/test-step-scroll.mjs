import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-step-scroll-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9235',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9235/json/list');
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

  // Listen to console
  await send('Console.enable');
  ws.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.method === 'Console.messageAdded') {
      console.log('Browser log:', data.params.message.text);
    }
  });

  // Track scroll on window and rail
  await send('Runtime.evaluate', {
    expression: `
      window.__scrollLogs = [];
      const s1 = document.getElementById('built-ai-first');
      const rail = s1.querySelector('.overflow-x-auto');
      
      window.addEventListener('scroll', () => {
        const r = s1.getBoundingClientRect();
        window.__scrollLogs.push({
          scrollY: window.scrollY,
          top: r.top,
          bottom: r.bottom,
          railScrollLeft: rail.scrollLeft
        });
      });
    `
  });

  // Scroll 5 times slowly
  for (let i = 0; i < 8; i++) {
    await send('Input.dispatchMouseEvent', {
      type: 'mouseWheel',
      x: 700,
      y: 300,
      deltaX: 0,
      deltaY: 400
    });
    await new Promise((r) => setTimeout(r, 250));
  }

  await new Promise((r) => setTimeout(r, 1000));

  const logs = await send('Runtime.evaluate', {
    expression: 'window.__scrollLogs',
    returnByValue: true
  });
  console.log('Recorded scroll logs sample (first 5, middle 5, last 5):');
  const allLogs = logs.result.value || [];
  console.log('Total scroll events captured:', allLogs.length);
  if (allLogs.length > 0) {
    console.log('First 3:', allLogs.slice(0, 3));
    console.log('Middle 3:', allLogs.slice(Math.floor(allLogs.length / 2) - 1, Math.floor(allLogs.length / 2) + 2));
    console.log('Last 3:', allLogs.slice(-3));
  }

  ws.close();
} catch (e) {
  console.error('Error:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
