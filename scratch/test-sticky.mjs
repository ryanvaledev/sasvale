import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-test-${Date.now()}`);
const port = 9223;

const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${tempProfile}`,
  '--window-size=1440,900',
  'http://localhost:3000/'
]);

async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function test() {
  await sleep(2500);

  const listRes = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const pageTarget = listRes.find(t => t.type === 'page');
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await send("Page.enable");
  await send("Runtime.enable");

  async function evalInPage(expression) {
    const res = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    return res.result.value;
  }

  await evalInPage("document.documentElement.style.scrollBehavior = 'auto'");
  await evalInPage("window.scrollTo(0, document.getElementById('case-studies').offsetTop)");
  await sleep(100);
  const beforeScroll = await evalInPage(`(() => {
    const sec = document.getElementById('case-studies');
    const sticky = sec.querySelector('.sticky');
    return {
      scrollY: window.scrollY,
      secTop: sec.getBoundingClientRect().top,
      stickyTop: sticky.getBoundingClientRect().top
    };
  })()`);
  console.log("Before fix, at case-studies start:", beforeScroll);

  await evalInPage("window.scrollBy(0, 400)");
  await sleep(100);
  const beforeScrollAfter400 = await evalInPage(`(() => {
    const sec = document.getElementById('case-studies');
    const sticky = sec.querySelector('.sticky');
    return {
      scrollY: window.scrollY,
      secTop: sec.getBoundingClientRect().top,
      stickyTop: sticky.getBoundingClientRect().top
    };
  })()`);
  console.log("Before fix, after +400px scroll:", beforeScrollAfter400);

  // Now change html and body overflow to clip
  await evalInPage(`(() => {
    document.documentElement.style.overflowX = 'clip';
    document.body.style.overflowX = 'clip';
  })()`);

  await evalInPage("window.scrollTo(0, document.getElementById('case-studies').offsetTop)");
  await sleep(100);
  await evalInPage("window.scrollBy(0, 400)");
  await sleep(100);
  const afterFixAfter400 = await evalInPage(`(() => {
    const sec = document.getElementById('case-studies');
    const sticky = sec.querySelector('.sticky');
    return {
      scrollY: window.scrollY,
      secTop: sec.getBoundingClientRect().top,
      stickyTop: sticky.getBoundingClientRect().top
    };
  })()`);
  console.log("After fix (overflowX='clip'), after +400px scroll:", afterFixAfter400);

  ws.close();
  chromeProc.kill();
}

test().catch(e => {
  console.error(e);
  chromeProc.kill();
});
