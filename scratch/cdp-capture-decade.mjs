import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots/sasvale-updated');
const outFile = path.join(outputDir, 'sasvale-decade-cropped.png');
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-cdp-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9222',
  '--window-size=1440,900',
  'about:blank',
]);

// Wait 1 second for Chrome to start
await new Promise((r) => setTimeout(r, 1200));

try {
  const versionRes = await fetch('http://127.0.0.1:9222/json/version');
  const versionData = await versionRes.json();
  const wsUrl = versionData.webSocketDebuggerUrl;
  console.log('Connected to CDP:', wsUrl);

  const ws = new WebSocket(wsUrl);
  await new Promise((resolve) => ws.onopen = resolve);

  let id = 1;
  const send = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      const handler = (event) => {
        const data = JSON.parse(event.data);
        if (data.id === msgId) {
          ws.removeEventListener('message', handler);
          if (data.error) reject(data.error);
          else resolve(data.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  };

  // Create a target page
  const { targetId } = await send('Target.createTarget', { url: 'http://localhost:3000/' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });

  const sendSession = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      const handler = (event) => {
        const data = JSON.parse(event.data);
        if (data.id === msgId) {
          ws.removeEventListener('message', handler);
          if (data.error) reject(data.error);
          else resolve(data.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, sessionId, method, params }));
    });
  };

  // Wait 2.5s for page and fonts to render
  await new Promise((r) => setTimeout(r, 2500));

  // Get element rect of decade-experience
  const evalResult = await sendSession('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.getElementById('decade-experience');
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          x: rect.x + window.scrollX,
          y: rect.y + window.scrollY,
          width: rect.width,
          height: rect.height
        };
      })()
    `,
    returnByValue: true,
  });

  const rect = evalResult.result.value;
  console.log('Decade element rect:', rect);

  // Scroll into view
  await sendSession('Runtime.evaluate', {
    expression: `
      document.getElementById('decade-experience')?.scrollIntoView({ block: 'start' });
    `,
  });

  // Wait 1.5s for render/animation
  await new Promise((r) => setTimeout(r, 1500));

  const screenshot = await sendSession('Page.captureScreenshot', {
    format: 'png',
  });

  fs.writeFileSync(outFile, Buffer.from(screenshot.data, 'base64'));
  console.log('Successfully saved to:', outFile);


  ws.close();
} catch (err) {
  console.error('Error during CDP capture:', err);
} finally {
  chrome.kill();
}
