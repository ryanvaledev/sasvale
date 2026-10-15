import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots/sasvale-updated');

const outFile = path.join(outputDir, 'sasvale-3d-spin-carousel.png');
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-3d-${Date.now()}`);

// Window size 1440x16000
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--window-size=1440,16000',
  `--screenshot=${outFile}`,
  'http://localhost:3000/',
];

try {
  execFileSync(chromePath, args, { stdio: 'ignore' });
  console.log(`Captured: ${outFile}`);
} catch (e) {
  console.error('Error capturing screenshot:', e.message);
}
