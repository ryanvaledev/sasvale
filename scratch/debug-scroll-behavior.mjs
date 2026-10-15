import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-inspect-debug-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9227',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9227/json/list');
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

  const debugInfo = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail1 = s1 ? s1.querySelector('.overflow-x-auto') : null;
        
        // Try directly setting scrollLeft
        const beforeSet = rail1 ? rail1.scrollLeft : null;
        if (rail1) rail1.scrollLeft = 300;
        const immediatelyAfterSet = rail1 ? rail1.scrollLeft : null;
        
        return {
          beforeSet,
          immediatelyAfterSet,
          railClass: rail1 ? rail1.className : null,
          railComputedStyle: rail1 ? {
            overflowX: window.getComputedStyle(rail1).overflowX,
            scrollBehavior: window.getComputedStyle(rail1).scrollBehavior,
            scrollSnapType: window.getComputedStyle(rail1).scrollSnapType
          } : null
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Direct scrollLeft test:', debugInfo.result.value);

  // Wait 200ms to see if RAF loop resets it
  await new Promise((r) => setTimeout(r, 200));

  const after200ms = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail1 = s1 ? s1.querySelector('.overflow-x-auto') : null;
        return {
          scrollLeft: rail1 ? rail1.scrollLeft : null
        };
      })()
    `,
    returnByValue: true
  });
  console.log('After 200ms:', after200ms.result.value);

  ws.close();
} catch (e) {
  console.error('Error during testing:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
