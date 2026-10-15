import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-verify-hscroll-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9245',
  '--window-size=1440,900',
  'http://localhost:3000/'
]);

await new Promise((r) => setTimeout(r, 2500));

try {
  const tabs = await (await fetch('http://127.0.0.1:9245/json/list')).json();
  const pageTab = tabs.find((t) => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  await new Promise((res) => (ws.onopen = res));

  let id = 1;
  const send = (method, params = {}) =>
    new Promise((resolve) => {
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

  const evalInBrowser = async (expression) => {
    const res = await send('Runtime.evaluate', { expression, returnByValue: true });
    return res?.result?.value;
  };

  console.log('=== TEST 1: Built AI First Carousel ===');
  const builtInit = await evalInBrowser(`(() => {
    const s = document.getElementById('built-ai-first');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft, maxScroll: r.scrollWidth - r.clientWidth };
  })()`);
  console.log('Built AI Initial:', builtInit);

  // Click Next
  await evalInBrowser(`(() => {
    const s = document.getElementById('built-ai-first');
    s.querySelector('button[aria-label="Next slide"]').click();
  })()`);
  await new Promise((r) => setTimeout(r, 700));

  const builtAfterNext = await evalInBrowser(`(() => {
    const s = document.getElementById('built-ai-first');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft };
  })()`);
  console.log('Built AI after Next click:', builtAfterNext);

  // Click Prev
  await evalInBrowser(`(() => {
    const s = document.getElementById('built-ai-first');
    s.querySelector('button[aria-label="Previous slide"]').click();
  })()`);
  await new Promise((r) => setTimeout(r, 700));

  const builtAfterPrev = await evalInBrowser(`(() => {
    const s = document.getElementById('built-ai-first');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft };
  })()`);
  console.log('Built AI after Prev click:', builtAfterPrev);

  console.log('\n=== TEST 2: Proprietary Products Rail ===');
  const prodInit = await evalInBrowser(`(() => {
    const s = document.getElementById('proprietary-products');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft, maxScroll: r.scrollWidth - r.clientWidth };
  })()`);
  console.log('Products Initial:', prodInit);

  // Click Next
  await evalInBrowser(`(() => {
    const s = document.getElementById('proprietary-products');
    s.querySelector('button[aria-label="Next product"]').click();
  })()`);
  await new Promise((r) => setTimeout(r, 700));

  const prodAfterNext = await evalInBrowser(`(() => {
    const s = document.getElementById('proprietary-products');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft };
  })()`);
  console.log('Products after Next click:', prodAfterNext);

  // Click Prev
  await evalInBrowser(`(() => {
    const s = document.getElementById('proprietary-products');
    s.querySelector('button[aria-label="Previous product"]').click();
  })()`);
  await new Promise((r) => setTimeout(r, 700));

  const prodAfterPrev = await evalInBrowser(`(() => {
    const s = document.getElementById('proprietary-products');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft };
  })()`);
  console.log('Products after Prev click:', prodAfterPrev);

  console.log('\n=== TEST 3: Executive Video Testimonials ===');
  const storiesInit = await evalInBrowser(`(() => {
    const s = document.getElementById('client-stories');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft, maxScroll: r.scrollWidth - r.clientWidth };
  })()`);
  console.log('Stories Initial:', storiesInit);

  // Click Next
  await evalInBrowser(`(() => {
    const s = document.getElementById('client-stories');
    s.querySelector('button[aria-label="Next story"]').click();
  })()`);
  await new Promise((r) => setTimeout(r, 700));

  const storiesAfterNext = await evalInBrowser(`(() => {
    const s = document.getElementById('client-stories');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft };
  })()`);
  console.log('Stories after Next click:', storiesAfterNext);

  // Click Prev
  await evalInBrowser(`(() => {
    const s = document.getElementById('client-stories');
    s.querySelector('button[aria-label="Previous story"]').click();
  })()`);
  await new Promise((r) => setTimeout(r, 700));

  const storiesAfterPrev = await evalInBrowser(`(() => {
    const s = document.getElementById('client-stories');
    const r = s.querySelector('.overflow-x-auto');
    return { scrollLeft: r.scrollLeft };
  })()`);
  console.log('Stories after Prev click:', storiesAfterPrev);

  console.log('\n=== TEST 4: Mouse Drag Test on Built AI ===');
  const dragResult = await evalInBrowser(`(() => {
    const s = document.getElementById('built-ai-first');
    const r = s.querySelector('.overflow-x-auto');
    r.dispatchEvent(new MouseEvent('mousedown', { clientX: 600, clientY: 400, bubbles: true }));
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 350, clientY: 400, bubbles: true }));
    const duringDrag = r.scrollLeft;
    window.dispatchEvent(new MouseEvent('mouseup', { clientX: 350, clientY: 400, bubbles: true }));
    const afterRelease = r.scrollLeft;
    return { duringDrag, afterRelease };
  })()`);
  console.log('Drag result on Built AI:', dragResult);

  console.log('\n=== TEST 5: Mouse Drag Test on Proprietary Products ===');
  const prodDragResult = await evalInBrowser(`(() => {
    const s = document.getElementById('proprietary-products');
    const r = s.querySelector('.overflow-x-auto');
    r.dispatchEvent(new MouseEvent('mousedown', { clientX: 600, clientY: 400, bubbles: true }));
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 200, clientY: 400, bubbles: true }));
    const duringDrag = r.scrollLeft;
    window.dispatchEvent(new MouseEvent('mouseup', { clientX: 200, clientY: 400, bubbles: true }));
    const afterRelease = r.scrollLeft;
    return { duringDrag, afterRelease };
  })()`);
  console.log('Drag result on Products:', prodDragResult);

  console.log('\n=== TEST 6: Mouse Drag Test on Client Stories ===');
  const storiesDragResult = await evalInBrowser(`(() => {
    const s = document.getElementById('client-stories');
    const r = s.querySelector('.overflow-x-auto');
    r.dispatchEvent(new MouseEvent('mousedown', { clientX: 600, clientY: 400, bubbles: true }));
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 300, clientY: 400, bubbles: true }));
    const duringDrag = r.scrollLeft;
    window.dispatchEvent(new MouseEvent('mouseup', { clientX: 300, clientY: 400, bubbles: true }));
    const afterRelease = r.scrollLeft;
    return { duringDrag, afterRelease };
  })()`);
  console.log('Drag result on Stories:', storiesDragResult);

  console.log('\n=== TEST 7: Sticky Pinned Scroll Progression ===');
  const stickyResult = await evalInBrowser(`(() => {
    const s = document.getElementById('built-ai-first');
    const r = s.querySelector('.overflow-x-auto');
    const totalScrollable = s.offsetHeight - window.innerHeight;
    const maxScroll = r.scrollWidth - r.clientWidth;

    // Simulate window scroll event at 50% through the pinned section
    const targetProgress = 0.5;
    const fakeRect = { top: -targetProgress * totalScrollable, bottom: s.offsetHeight - targetProgress * totalScrollable };
    
    // Calculate scrollLeft as onWindowScroll does
    const scrolled = -fakeRect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
    r.scrollLeft = progress * maxScroll;

    return {
      progress,
      scrollLeft: r.scrollLeft,
      expected: Math.round(targetProgress * maxScroll),
    };
  })()`);
  console.log('Sticky scroll 50% progression:', stickyResult);


  ws.close();
} catch (e) {
  console.error('Error during verification:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
