import { spawn } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-smooth-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9225',
  '--window-size=1440,900',
  'http://localhost:3000/',
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9225/json/list');
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

  const checkResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const hasLenisClass = document.documentElement.classList.contains('lenis');
        
        // Built AI First
        const builtAiSection = document.getElementById('built-ai-first');
        const builtAiRail = builtAiSection ? builtAiSection.querySelector('.overflow-x-auto') : null;
        const builtAiHasSnap = builtAiRail ? builtAiRail.className.includes('snap-mandatory') : false;
        
        // Products Rail
        const prodSection = document.getElementById('proprietary-products');
        const prodRail = prodSection ? prodSection.querySelector('.overflow-x-auto') : null;
        const prodHasSnap = prodRail ? prodRail.className.includes('snap-mandatory') : false;
        
        // Testimonials
        const testSection = document.getElementById('client-stories');
        const testRail = testSection ? testSection.querySelector('.overflow-x-auto') : null;
        
        // Services Matrix
        const servicesSection = document.getElementById('services-matrix');
        const servicesCards = servicesSection ? servicesSection.querySelectorAll('.animate-card-enter').length : 0;
        
        // Industries
        const indSection = document.getElementById('industries');
        const indCard = indSection ? indSection.querySelector('.animate-card-enter') !== null : false;
        
        // Fonts check
        const h1Font = window.getComputedStyle(document.querySelector('h1') || document.body).fontFamily;
        const h2Font = window.getComputedStyle(document.querySelector('h2') || document.body).fontFamily;
        const bodyFont = window.getComputedStyle(document.body).fontFamily;

        // Forms check
        const formsCount = document.querySelectorAll('form').length;

        return {
          hasLenisClass,
          builtAiHasSnap,
          prodHasSnap,
          servicesCards,
          indCard,
          formsCount,
          h1Font,
          h2Font,
          bodyFont
        };
      })()
    `,
    returnByValue: true,
  });

  console.log('Verification Result:', JSON.stringify(checkResult.result.value, null, 2));

  ws.close();
} catch (e) {
  console.error('Error during verification:', e);
} finally {
  chrome.kill();
  process.exit(0);
}
