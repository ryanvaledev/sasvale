import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-snap-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9246',
  '--window-size=1440,900',
  'http://localhost:3000/'
]);

await new Promise((r) => setTimeout(r, 2500));

try {
  const tabs = await (await fetch('http://127.0.0.1:9246/json/list')).json();
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

  const captureSection = async (selector, filename) => {
    // Scroll element into view
    await send('Runtime.evaluate', {
      expression: `document.querySelector('${selector}').scrollIntoView({ behavior: 'instant', block: 'center' })`
    });
    await new Promise((r) => setTimeout(r, 800));

    const snap = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(snap.data, 'base64');
    const outDir = 'C:\\Users\\XC THE TECH STORE\\.gemini\\antigravity-ide\\brain\\d43b4dc9-d451-49e5-85bb-b4d45887dc79';
    const filePath = path.join(outDir, filename);
    fs.writeFileSync(filePath, buffer);
    console.log(`Saved screenshot to ${filename}`);
  };

  await captureSection('#built-ai-first', '01-built-ai-carousel-verified.png');
  await captureSection('#proprietary-products', '02-proprietary-products-verified.png');
  await captureSection('#client-stories', '03-client-stories-verified.png');

  ws.close();
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
  process.exit(0);
}
