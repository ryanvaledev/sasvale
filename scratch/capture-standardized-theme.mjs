import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('C:\\Users\\XC THE TECH STORE\\.gemini\\antigravity-ide\\brain\\d43b4dc9-d451-49e5-85bb-b4d45887dc79');
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-cdp-${Date.now()}`);

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--remote-debugging-port=9222',
  '--window-size=1440,1000',
  'about:blank',
]);

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

  await sendSession('Page.enable');
  await sendSession('Runtime.enable');
  await sendSession('Runtime.evaluate', {
    expression: "document.documentElement.style.scrollBehavior = 'auto'"
  });
  await new Promise((r) => setTimeout(r, 1000));

  async function scrollToId(id, offset = 0) {
    await sendSession('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById('${id}');
        if (!el) {
          console.warn('Element not found:', '${id}');
          return null;
        }
        window.scrollTo(0, el.offsetTop + ${offset});
      })()`,
      returnByValue: true
    });
    await new Promise((r) => setTimeout(r, 600));
  }

  // Check computed font-family on headings and body
  const fontCheck = await sendSession('Runtime.evaluate', {
    expression: `(() => {
      const h1 = document.querySelector('h1');
      const body = document.body;
      const h2 = document.querySelector('h2');
      return {
        h1Font: h1 ? window.getComputedStyle(h1).fontFamily : 'null',
        h2Font: h2 ? window.getComputedStyle(h2).fontFamily : 'null',
        bodyFont: window.getComputedStyle(body).fontFamily
      };
    })()`,
    returnByValue: true
  });
  console.log('Computed font families:', fontCheck.result.value);

  // 1. Capture Header & Hero with Manrope font
  await sendSession('Runtime.evaluate', { expression: "window.scrollTo(0, 0)" });
  await new Promise((r) => setTimeout(r, 600));
  const heroShot = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outputDir, '01-manrope-hero.png'), Buffer.from(heroShot.data, 'base64'));
  console.log('Captured 01-manrope-hero.png');

  // 2. Scroll to FAQ and Footer Transition to verify single form
  await scrollToId("faq", 0);
  const faqShot = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outputDir, '02-faq-insights.png'), Buffer.from(faqShot.data, 'base64'));
  console.log('Captured 02-faq-insights.png');

  // 3. Scroll to Footer - verifying exactly ONE form on the page
  await sendSession('Runtime.evaluate', {
    expression: `
      const footer = document.getElementById('contact');
      if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'start' });
    `
  });
  await new Promise((r) => setTimeout(r, 800));
  const footerShot = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outputDir, '03-single-footer-form.png'), Buffer.from(footerShot.data, 'base64'));
  console.log('Captured 03-single-footer-form.png');

  // Count total form elements on the page
  const formCount = await sendSession('Runtime.evaluate', {
    expression: `document.querySelectorAll('form').length`
  });
  console.log('Total <form> elements on page:', formCount.result.value);

  // Confirm case studies DOM removal
  const caseStudiesEl = await sendSession('Runtime.evaluate', {
    expression: `Boolean(document.getElementById('case-studies'))`
  });
  console.log('Does #case-studies element exist in DOM?', caseStudiesEl.result.value);

  // Also check if any text containing "Outcomes, Not Slide Decks" exists on the page
  const textCheck = await sendSession('Runtime.evaluate', {
    expression: `
      document.body.innerText.includes('Outcomes, Not Slide Decks') ||
      document.body.innerText.includes('DEAL TO REVEAL')
    `
  });
  console.log('Is Case Studies text present anywhere on page?', textCheck.result.value);

  ws.close();
  chrome.kill();
} catch (e) {
  console.error('CDP error:', e);
  chrome.kill();
}
