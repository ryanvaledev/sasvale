import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-scroll-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9226',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9226/json/list');
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

  // Test 1: Check section positions
  const sectionPositions = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const s2 = document.getElementById('proprietary-products');
        const s3 = document.getElementById('client-stories');
        return {
          builtAi: s1 ? { top: s1.offsetTop, height: s1.offsetHeight } : null,
          proprietary: s2 ? { top: s2.offsetTop, height: s2.offsetHeight } : null,
          testimonials: s3 ? { top: s3.offsetTop, height: s3.offsetHeight } : null,
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Section positions:', sectionPositions.result.value);

  // Test 2: Scroll to middle of built-ai-first
  const targetY = sectionPositions.result.value.builtAi.top + 600;
  console.log('Scrolling window to Y =', targetY);
  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, ${targetY});`
  });

  await new Promise((r) => setTimeout(r, 1000));

  const scrollState = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail1 = s1 ? s1.querySelector('.overflow-x-auto') : null;
        return {
          scrollY: window.scrollY,
          scrollLeft: rail1 ? rail1.scrollLeft : null,
          scrollWidth: rail1 ? rail1.scrollWidth : null,
          clientWidth: rail1 ? rail1.clientWidth : null,
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Built AI scroll state after window scroll:', scrollState.result.value);

  // Test 3: Try wheel event on rail
  console.log('Dispatching wheel event on rail...');
  const wheelResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail1 = s1 ? s1.querySelector('.overflow-x-auto') : null;
        const initial = rail1.scrollLeft;
        rail1.dispatchEvent(new WheelEvent('wheel', { deltaY: 200, bubbles: true }));
        return { initial, after: rail1.scrollLeft };
      })()
    `,
    returnByValue: true
  });
  console.log('Wheel result:', wheelResult.result.value);

  // Test 4: Check if clicking Next button works
  console.log('Clicking Next button...');
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const nextBtn = s1 ? s1.querySelector('button[aria-label="Next slide"]') : null;
        if (nextBtn) nextBtn.click();
      })()
    `
  });
  await new Promise((r) => setTimeout(r, 800));

  const afterClick = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.getElementById('built-ai-first');
        const rail1 = s1 ? s1.querySelector('.overflow-x-auto') : null;
        return {
          scrollLeft: rail1 ? rail1.scrollLeft : null,
        };
      })()
    `,
    returnByValue: true
  });
  console.log('After clicking Next button:', afterClick.result.value);

  ws.close();
} catch (e) {
  console.error('Error during testing:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
