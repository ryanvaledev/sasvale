import { spawn } from 'node:child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9240',
  '--window-size=1440,900',
  'http://localhost:3000/'
]);

await new Promise(r => setTimeout(r, 2500));

try {
  const tabs = await (await fetch('http://127.0.0.1:9240/json/list')).json();
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

  const res = await evalInBrowser(`
    (() => {
      const getInfo = (id) => {
        const s = document.getElementById(id);
        if (!s) return { id, error: 'section not found' };
        const r = s.querySelector('.overflow-x-auto');
        if (!r) return { id, error: 'rail not found' };
        return {
          id,
          scrollWidth: r.scrollWidth,
          clientWidth: r.clientWidth,
          scrollLeft: r.scrollLeft,
          childrenCount: r.children.length,
          firstChildWidth: r.firstElementChild ? r.firstElementChild.offsetWidth : 0,
        };
      };

      return {
        builtAi: getInfo('built-ai-first'),
        proprietaryProducts: getInfo('proprietary-products'),
        clientStories: getInfo('client-stories'),
      };
    })()
  `);

  console.log('Result:', JSON.stringify(res.result.value, null, 2));

  // Test proprietary products
  const prodBefore = await evalInBrowser(`(() => document.getElementById('proprietary-products').querySelector('.overflow-x-auto').scrollLeft)()`);
  await evalInBrowser(`(() => document.getElementById('proprietary-products').querySelector('button[aria-label="Next product"]').click())()`);
  await new Promise(r => setTimeout(r, 700));
  const prodAfter = await evalInBrowser(`(() => document.getElementById('proprietary-products').querySelector('.overflow-x-auto').scrollLeft)()`);
  console.log('Proprietary Products - Before:', prodBefore.result.value, 'After Next:', prodAfter.result.value);

  // Test wheel on Built AI
  const builtWheelBefore = await evalInBrowser(`(() => document.getElementById('built-ai-first').querySelector('.overflow-x-auto').scrollLeft)()`);
  await evalInBrowser(`(() => {
    const r = document.getElementById('built-ai-first').querySelector('.overflow-x-auto');
    r.dispatchEvent(new WheelEvent('wheel', { deltaY: 250, bubbles: true }));
  })()`);
  await new Promise(r => setTimeout(r, 700));
  const builtWheelAfter = await evalInBrowser(`(() => document.getElementById('built-ai-first').querySelector('.overflow-x-auto').scrollLeft)()`);
  console.log('Built AI - Before wheel:', builtWheelBefore.result.value, 'After wheel:', builtWheelAfter.result.value);

  // Test wheel on Proprietary Products
  const prodWheelBefore = await evalInBrowser(`(() => document.getElementById('proprietary-products').querySelector('.overflow-x-auto').scrollLeft)()`);
  await evalInBrowser(`(() => {
    const r = document.getElementById('proprietary-products').querySelector('.overflow-x-auto');
    r.dispatchEvent(new WheelEvent('wheel', { deltaY: 250, bubbles: true }));
  })()`);
  await new Promise(r => setTimeout(r, 700));
  const prodWheelAfter = await evalInBrowser(`(() => document.getElementById('proprietary-products').querySelector('.overflow-x-auto').scrollLeft)()`);
  console.log('Proprietary Products - Before wheel:', prodWheelBefore.result.value, 'After wheel:', prodWheelAfter.result.value);

  // Test client stories
  const clientBefore = await evalInBrowser(`(() => document.getElementById('client-stories').querySelector('.overflow-x-auto').scrollLeft)()`);
  await evalInBrowser(`(() => document.getElementById('client-stories').querySelector('button[aria-label="Next story"]').click())()`);
  await new Promise(r => setTimeout(r, 700));
  const clientAfter = await evalInBrowser(`(() => document.getElementById('client-stories').querySelector('.overflow-x-auto').scrollLeft)()`);
  console.log('Client Stories - Before:', clientBefore.result.value, 'After Next:', clientAfter.result.value);

  // Test window scroll pinning through sticky section
  console.log('--- Testing Sticky Scroll Pinning ---');
  await evalInBrowser(`(() => {
    window.scrollTo(0, 1000);
    window.dispatchEvent(new Event('scroll'));
  })()`);
  await new Promise(r => setTimeout(r, 700));
  const builtStickyScroll = await evalInBrowser(`(() => {
    const s = document.getElementById('built-ai-first');
    const r = s.querySelector('.overflow-x-auto');
    const rect = s.getBoundingClientRect();
    return { scrollY: window.scrollY, rectTop: rect.top, railScrollLeft: r.scrollLeft };
  })()`);
  console.log('Built AI under window scroll:', builtStickyScroll.result.value);



  ws.close();
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
}
