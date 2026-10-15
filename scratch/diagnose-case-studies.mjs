import path from 'node:path';

const port = 9222;

async function diagnose() {
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

  async function evalInPage(expression) {
    const res = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    return res.result.value;
  }

  await send("Page.enable");
  await send("Runtime.enable");

  // Scroll to case-studies
  await evalInPage("document.getElementById('case-studies')?.scrollIntoView({ block: 'start' })");
  
  const step0 = await evalInPage(`(() => {
    const sec = document.getElementById('case-studies');
    const sticky = sec.querySelector('.sticky');
    const activeCard = sec.querySelector('.z-30');
    return {
      scrollY: window.scrollY,
      secRect: sec.getBoundingClientRect(),
      stickyRect: sticky.getBoundingClientRect(),
      activeCardText: activeCard ? activeCard.innerText.slice(0, 100) : 'none'
    };
  })()`);
  console.log("Step 0 (At top of case-studies):", step0);

  // Scroll down 400px inside case-studies
  await evalInPage("window.scrollBy(0, 400)");
  const step1 = await evalInPage(`(() => {
    const sec = document.getElementById('case-studies');
    const sticky = sec.querySelector('.sticky');
    const activeCard = sec.querySelector('.z-30');
    return {
      scrollY: window.scrollY,
      secRect: sec.getBoundingClientRect(),
      stickyRect: sticky.getBoundingClientRect(),
      activeCardText: activeCard ? activeCard.innerText.slice(0, 100) : 'none'
    };
  })()`);
  console.log("Step 1 (+400px):", step1);

  // Scroll down 800px inside case-studies
  await evalInPage("window.scrollBy(0, 400)");
  const step2 = await evalInPage(`(() => {
    const sec = document.getElementById('case-studies');
    const sticky = sec.querySelector('.sticky');
    const activeCard = sec.querySelector('.z-30');
    return {
      scrollY: window.scrollY,
      secRect: sec.getBoundingClientRect(),
      stickyRect: sticky.getBoundingClientRect(),
      activeCardText: activeCard ? activeCard.innerText.slice(0, 100) : 'none'
    };
  })()`);
  console.log("Step 2 (+800px):", step2);

  ws.close();
}

diagnose().catch(console.error);
