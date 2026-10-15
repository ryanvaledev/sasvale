import { spawn } from 'node:child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9243',
  '--window-size=1440,900',
  'http://localhost:3000/'
]);

await new Promise(r => setTimeout(r, 2500));

try {
  const tabs = await (await fetch('http://127.0.0.1:9243/json/list')).json();
  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const evalInBrowser = (expr) => new Promise(res => {
    const msgId = id++;
    const handler = (e) => {
      const data = JSON.parse(e.data);
      if (data.id === msgId) {
        ws.removeEventListener('message', handler);
        res(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method: 'Runtime.evaluate', params: { expression: expr, returnByValue: true } }));
  });

  // Check what happens when we scroll window through the section
  const sectionTop = await evalInBrowser(`document.getElementById('built-ai-first').offsetTop`);
  console.log('Section top:', sectionTop.result.value);

  // Set window.scrollY directly and see what onWindowScroll does
  const res = await evalInBrowser(`
    (() => {
      const s = document.getElementById('built-ai-first');
      const r = s.querySelector('.overflow-x-auto');
      const totalScrollable = s.offsetHeight - window.innerHeight;
      const results = [];

      for (let i = 0; i <= 5; i++) {
        const progress = i / 5;
        const scrollY = s.offsetTop + progress * totalScrollable;
        window.scrollTo(0, scrollY);
        // Force evaluation of rect
        const rect = s.getBoundingClientRect();
        const maxScrollLeft = r.scrollWidth - r.clientWidth;
        const calculatedScrollLeft = progress * maxScrollLeft;
        results.push({
          step: i,
          progress,
          scrollY,
          rectTop: Math.round(rect.top),
          rectBottom: Math.round(rect.bottom),
          maxScrollLeft,
          calculatedScrollLeft: Math.round(calculatedScrollLeft)
        });
      }
      return results;
    })()
  `);

  console.log('Step calculation results:');
  console.table(res.result.value);

  ws.close();
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
}
