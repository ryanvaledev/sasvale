import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots/sasvale-updated');
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-spin-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9224',
  '--window-size=1440,900',
  'http://localhost:3000/#decade-experience',
]);

await new Promise((r) => setTimeout(r, 1500));

try {
  const versionRes = await fetch('http://127.0.0.1:9224/json/list');
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

  // Scroll to decade-experience
  await send('Runtime.evaluate', {
    expression: `document.getElementById('decade-experience')?.scrollIntoView({ block: 'start' });`,
  });

  // Capture Frame 1
  await new Promise((r) => setTimeout(r, 1000));
  const f1 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outputDir, 'spin-frame-1.png'), Buffer.from(f1.data, 'base64'));
  console.log('Frame 1 captured');

  // Wait 2.5 seconds
  await new Promise((r) => setTimeout(r, 2500));
  const f2 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outputDir, 'spin-frame-2.png'), Buffer.from(f2.data, 'base64'));
  console.log('Frame 2 captured');

  ws.close();
} finally {
  chrome.kill();
}
