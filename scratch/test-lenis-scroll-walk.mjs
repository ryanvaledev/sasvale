import { spawn } from 'node:child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9241',
  '--window-size=1440,900',
  'http://localhost:3000/'
]);

await new Promise(r => setTimeout(r, 2500));

try {
  const tabs = await (await fetch('http://127.0.0.1:9241/json/list')).json();
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

  // Check section offsets
  const offsets = await evalInBrowser(`
    (() => {
      const getTop = id => {
        const el = document.getElementById(id);
        return el ? { top: el.offsetTop, height: el.offsetHeight } : null;
      };
      return {
        builtAi: getTop('built-ai-first'),
        products: getTop('proprietary-products'),
        stories: getTop('client-stories'),
      };
    })()
  `);
  console.log('Section offsets:', offsets.result.value);

  // Scroll to builtAi start
  const builtAiTop = offsets.result.value.builtAi.top;
  console.log('\n--- Scrolling into builtAi (offsetTop = ' + builtAiTop + ') ---');

  for (let dy = 0; dy <= 1200; dy += 200) {
    const targetY = builtAiTop + dy;
    await evalInBrowser(`window.scrollTo(0, ${targetY}); window.dispatchEvent(new Event('scroll'));`);
    await new Promise(r => setTimeout(r, 100));
    const state = await evalInBrowser(`
      (() => {
        const s = document.getElementById('built-ai-first');
        const r = s.querySelector('.overflow-x-auto');
        const rect = s.getBoundingClientRect();
        return {
          scrollY: window.scrollY,
          rectTop: Math.round(rect.top),
          rectBottom: Math.round(rect.bottom),
          railScrollLeft: Math.round(r.scrollLeft),
          maxScroll: r.scrollWidth - r.clientWidth
        };
      })()
    `);
    console.log(`scrollY ${targetY}:`, state.result.value);
  }

  ws.close();
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
}
