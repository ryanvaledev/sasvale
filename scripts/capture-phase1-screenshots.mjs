import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('audit-screenshots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const viewports = [
  { name: 'phase1-mobile-375px.png', width: 375, height: 812 },
  { name: 'phase1-mobile-430px.png', width: 430, height: 932 },
  { name: 'phase1-tablet-768px.png', width: 768, height: 1024 },
  { name: 'phase1-laptop-1024px.png', width: 1024, height: 768 },
  { name: 'phase1-desktop-1440px.png', width: 1440, height: 900 },
  { name: 'phase1-desktop-1920px.png', width: 1920, height: 1080 },
];

for (const vp of viewports) {
  const outFile = path.join(outputDir, vp.name);
  const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `chrome-phase1-${vp.width}`);
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${tempProfile}`,
    `--window-size=${vp.width},${vp.height}`,
    `--screenshot=${outFile}`,
    'http://localhost:3000/',
  ];

  try {
    execFileSync(chromePath, args, { stdio: 'ignore' });
    console.log(`Captured ${vp.name} (${vp.width}x${vp.height}) -> ${outFile}`);
  } catch (e) {
    console.error(`Failed to capture ${vp.name}:`, e.message);
  }
}
