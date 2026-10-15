import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-fixed-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9238',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9238/json/list');
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

  // TEST 1: Click Next button on Built AI
  console.log('--- TEST 1: Click Next on Built AI ---');
  const initialScrollLeft = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail = s1.querySelector('.overflow-x-auto');
        const nextBtn = s1.querySelector('button[aria-label="Next slide"]');
        if (nextBtn) nextBtn.click();
        return rail.scrollLeft;
      })()
    `,
    returnByValue: true
  });

  await new Promise((r) => setTimeout(r, 600));

  const afterNext = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail = s1.querySelector('.overflow-x-auto');
        return rail.scrollLeft;
      })()
    `,
    returnByValue: true
  });
  console.log('Initial scrollLeft:', initialScrollLeft.result.value, '-> After Next click:', afterNext.result.value);

  // TEST 2: Wheel over cards in Built AI
  console.log('--- TEST 2: Wheel event over cards in Built AI ---');
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail = s1.querySelector('.overflow-x-auto');
        rail.dispatchEvent(new WheelEvent('wheel', { deltaY: 300, bubbles: true }));
      })()
    `
  });

  await new Promise((r) => setTimeout(r, 600));

  const afterWheel = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail = s1.querySelector('.overflow-x-auto');
        return rail.scrollLeft;
      })()
    `,
    returnByValue: true
  });
  console.log('After wheel on Built AI rail:', afterWheel.result.value);

  // TEST 3: Click Next on Proprietary Products Rail
  console.log('--- TEST 3: Click Next on Proprietary Products ---');
  const prodInitial = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s2 = document.getElementById('proprietary-products');
        const rail = s2.querySelector('.overflow-x-auto');
        const nextBtn = s2.querySelector('button[aria-label="Next product"]');
        if (nextBtn) nextBtn.click();
        return rail.scrollLeft;
      })()
    `,
    returnByValue: true
  });

  await new Promise((r) => setTimeout(r, 600));

  const prodAfterNext = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s2 = document.getElementById('proprietary-products');
        const rail = s2.querySelector('.overflow-x-auto');
        return rail.scrollLeft;
      })()
    `,
    returnByValue: true
  });
  console.log('Products initial:', prodInitial.result.value, '-> After Next click:', prodAfterNext.result.value);

  // TEST 4: Wheel over Proprietary Products
  console.log('--- TEST 4: Wheel over Proprietary Products ---');
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s2 = document.getElementById('proprietary-products');
        const rail = s2.querySelector('.overflow-x-auto');
        rail.dispatchEvent(new WheelEvent('wheel', { deltaY: 300, bubbles: true }));
      })()
    `
  });

  await new Promise((r) => setTimeout(r, 600));

  const prodAfterWheel = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s2 = document.getElementById('proprietary-products');
        const rail = s2.querySelector('.overflow-x-auto');
        return rail.scrollLeft;
      })()
    `,
    returnByValue: true
  });
  console.log('Products after wheel:', prodAfterWheel.result.value);

  // TEST 5: Executive Video Testimonials Next button & wheel
  console.log('--- TEST 5: Executive Video Testimonials ---');
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s3 = document.getElementById('client-stories');
        const nextBtn = s3.querySelector('button[aria-label="Next story"]');
        if (nextBtn) nextBtn.click();
      })()
    `
  });

  await new Promise((r) => setTimeout(r, 600));

  const testAfterNext = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s3 = document.getElementById('client-stories');
        const rail = s3.querySelector('.overflow-x-auto');
        return rail.scrollLeft;
      })()
    `,
    returnByValue: true
  });
  console.log('Testimonials after Next click:', testAfterNext.result.value);

  ws.close();
} catch (e) {
  console.error('Error during testing:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
