import { spawn } from 'node:child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9242',
  '--window-size=1440,900',
  'http://localhost:3000/'
]);

await new Promise(r => setTimeout(r, 2500));

try {
  const tabs = await (await fetch('http://127.0.0.1:9242/json/list')).json();
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

  // Let's test what Lenis does when we dispatch wheel events on the cards!
  const wheelResult = await evalInBrowser(`
    (() => {
      const s = document.getElementById('built-ai-first');
      const r = s.querySelector('.overflow-x-auto');
      
      // Scroll window to s top
      window.scrollTo(0, s.offsetTop);
      
      const beforeScrollLeft = r.scrollLeft;
      const beforeScrollY = window.scrollY;

      // Dispatch wheel over cards
      r.dispatchEvent(new WheelEvent('wheel', {
        bubbles: true,
        cancelable: true,
        clientX: 500,
        clientY: 500,
        deltaX: 0,
        deltaY: 100
      }));

      return { beforeScrollLeft, beforeScrollY };
    })()
  `);
  console.log('Wheel test dispatched:', wheelResult.result.value);

  await new Promise(r => setTimeout(r, 500));

  const afterWheel = await evalInBrowser(`
    (() => {
      const s = document.getElementById('built-ai-first');
      const r = s.querySelector('.overflow-x-auto');
      return {
        scrollY: window.scrollY,
        railScrollLeft: r.scrollLeft,
      };
    })()
  `);
  console.log('After wheel on cards:', afterWheel.result.value);

  // Now test trackpad swipe (deltaX)
  await evalInBrowser(`
    (() => {
      const s = document.getElementById('built-ai-first');
      const r = s.querySelector('.overflow-x-auto');
      r.dispatchEvent(new WheelEvent('wheel', {
        bubbles: true,
        cancelable: true,
        clientX: 500,
        clientY: 500,
        deltaX: 300,
        deltaY: 0
      }));
    })()
  `);

  await new Promise(r => setTimeout(r, 500));

  const afterTrackpad = await evalInBrowser(`
    (() => {
      const s = document.getElementById('built-ai-first');
      const r = s.querySelector('.overflow-x-auto');
      return {
        scrollY: window.scrollY,
        railScrollLeft: r.scrollLeft,
      };
    })()
  `);
  console.log('After trackpad deltaX swipe on cards:', afterTrackpad.result.value);

  ws.close();
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
}
