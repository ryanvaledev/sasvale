import { execFileSync } from 'node:child_process';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outFile = path.resolve('audit-screenshots', 'sasvale-com-live.png');
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', 'chrome-sasvale-live');
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--window-size=1440,900',
  `--screenshot=${outFile}`,
  'https://www.sasvale.com/',
];

try {
  execFileSync(chromePath, args, { stdio: 'ignore' });
  console.log('Saved screenshot to:', outFile);
} catch (e) {
  console.error('Failed to capture:', e.message);
}
