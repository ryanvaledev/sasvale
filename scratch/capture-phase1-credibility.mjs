import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots/sasvale-updated');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Capture full page
const fullPageOut = path.join(outputDir, 'sasvale-fullpage-phase1.png');
const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-credibility-${Date.now()}`);

const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${tempProfile}`,
  '--window-size=1440,2500',
  `--screenshot=${fullPageOut}`,
  'http://localhost:3000/',
];

try {
  execFileSync(chromePath, args, { stdio: 'ignore' });
  console.log(`Captured: ${fullPageOut}`);
} catch (e) {
  console.error('Error capturing screenshot:', e.message);
}
