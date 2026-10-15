import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots/sasvale-updated');

const outFile = path.join(outputDir, 'sasvale-phase8-delivery.png');
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-phase8-${Date.now()}`);

// Window size 1440x11500 to capture all 8 sections
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--window-size=1440,11500',
  `--screenshot=${outFile}`,
  'http://localhost:3000/',
];

try {
  execFileSync(chromePath, args, { stdio: 'ignore' });
  console.log(`Captured: ${outFile}`);
} catch (e) {
  console.error('Error capturing screenshot:', e.message);
}
