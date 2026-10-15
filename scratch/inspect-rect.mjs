import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-inspect-rect-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9230',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9230/json/list');
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

  await send('Runtime.evaluate', {
    expression: 'window.scrollTo(0, 3200);'
  });

  await new Promise((r) => setTimeout(r, 800));

  const rectInfo = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sectionEl = document.getElementById('built-ai-first');
        const scrollEl = sectionEl.querySelector('.overflow-x-auto');
        const rect = sectionEl.getBoundingClientRect();
        const totalScrollable = rect.height - window.innerHeight;
        const condition = (rect.top <= 0 && rect.bottom >= window.innerHeight);
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
        const maxScrollLeft = scrollEl.scrollWidth - scrollEl.clientWidth;
        const calculatedTarget = progress * maxScrollLeft;

        return {
          windowScrollY: window.scrollY,
          rect: { top: rect.top, bottom: rect.bottom, height: rect.height },
          windowInnerHeight: window.innerHeight,
          totalScrollable,
          condition,
          scrolled,
          progress,
          maxScrollLeft,
          calculatedTarget,
          actualScrollLeft: scrollEl.scrollLeft
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Rect calculation info:', rectInfo.result.value);

  ws.close();
} catch (e) {
  console.error('Error during testing:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
