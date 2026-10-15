import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.waitForSelector('#decade-experience');
  const el = await page.$('#decade-experience');
  if (el) {
    await el.screenshot({ path: 'scratch/decade-test.png' });
    console.log('Saved to scratch/decade-test.png');
  }
  await browser.close();
})();
