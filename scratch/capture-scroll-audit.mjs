import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.resolve('audit-screenshots/standardized-ux');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-audit-${Date.now()}`);
const port = 9225;

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

async function run() {
  await sleep(2500);

  const listRes = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const pageTarget = listRes.find(t => t.type === 'page');
  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) {
    console.error("No page target found");
    chromeProc.kill();
    return;
  }

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

  await send("Runtime.evaluate", {
    expression: "document.documentElement.style.scrollBehavior = 'auto'",
    awaitPromise: true
  });

  await sleep(1000);

  async function takeShot(name) {
    const { data } = await send("Page.captureScreenshot", { format: "png" });
    const buffer = Buffer.from(data, 'base64');
    const dest = path.join(outDir, `${name}.png`);
    fs.writeFileSync(dest, buffer);
    console.log(`Saved screenshot: ${dest}`);
  }

  async function scrollToId(id, offset = 0) {
    await send("Runtime.evaluate", {
      expression: `(() => {
        const el = document.getElementById('${id}');
        if (!el) {
          console.warn('Element not found:', '${id}');
          return null;
        }
        window.scrollTo(0, el.offsetTop + ${offset});
        return {
          id: '${id}',
          scrollY: window.scrollY,
          offsetTop: el.offsetTop,
          rectTop: el.getBoundingClientRect().top
        };
      })()`,
      awaitPromise: true,
      returnByValue: true
    });
    await sleep(400);
  }

  // 1. Hero Header
  await send("Runtime.evaluate", { expression: "window.scrollTo(0, 0)" });
  await sleep(400);
  await takeShot("01-hero-header");

  // 2. Enterprise Credibility Matrix
  await scrollToId("enterprise-credibility", 0);
  await takeShot("02-enterprise-credibility");

  // 3. Built AI-First (Start and Mid-scroll)
  await scrollToId("built-ai-first", 0);
  await takeShot("03-built-ai-first-start");
  await scrollToId("built-ai-first", 600);
  await takeShot("04-built-ai-first-scrolled");

  // 4. Proprietary Products Rail (Start and Mid-scroll)
  await scrollToId("proprietary-products", 0);
  await takeShot("05-proprietary-products-start");
  await scrollToId("proprietary-products", 600);
  await takeShot("06-proprietary-products-scrolled");

  // 5. Industries Horizon Experience (Start, Sector 2)
  await scrollToId("industries", 0);
  await takeShot("07-industries-start");
  await scrollToId("industries", 700);
  await takeShot("08-industries-sector2");

  // 6. Services Tabbed Matrix
  await scrollToId("services-matrix", 0);
  await takeShot("09-services-matrix");

  // 7. Client Stories (Video Testimonials)
  await scrollToId("client-stories", 0);
  await takeShot("10-client-stories-start");
  await scrollToId("client-stories", 500);
  await takeShot("11-client-stories-scrolled");

  // 8. Case Studies (Card 1, Card 2)
  await scrollToId("case-studies", 0);
  await takeShot("12-case-studies-card1");
  await scrollToId("case-studies", 600);
  await takeShot("13-case-studies-card2");

  // 9. Decade of Delivery Experience (id="decade-experience")
  await scrollToId("decade-experience", 0);
  await takeShot("14-decade-delivery");

  // 10. AI Research Lab & Stack (id="research-and-stack")
  await scrollToId("research-and-stack", 0);
  await takeShot("15-research-and-stack");

  // 11. FAQ & Insights (id="faq")
  await scrollToId("faq", 0);
  await takeShot("16-faq-insights");

  // 12. Contact Intake (id="contact")
  await scrollToId("contact", 0);
  await takeShot("17-contact-intake");

  console.log("All 17 audit screenshots captured successfully!");
  ws.close();
  chromeProc.kill();
}

run().catch(err => {
  console.error("Audit error:", err);
  chromeProc.kill();
});
