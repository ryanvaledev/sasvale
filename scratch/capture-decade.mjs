import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots/sasvale-updated');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outFile = path.join(outputDir, 'sasvale-decade-spin.png');
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-decade-${Date.now()}`);

// Window size 1440x900 viewport
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--window-size=1440,1100',
  `--screenshot=${outFile}`,
  'http://localhost:3000/#decade-experience',
];

try {
  execFileSync(chromePath, args, { stdio: 'ignore' });
  console.log(`Captured: ${outFile}`);
} catch (e) {
  console.error('Error capturing screenshot:', e.message);
}
