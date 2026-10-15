import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = "http://localhost:3000/";
const artifactDir = "C:\\Users\\XC THE TECH STORE\\.gemini\\antigravity-ide\\brain\\7ad29e66-561d-4143-a659-6b479b64a6b0";

const captures = [
  { width: 1440, height: 900, name: "desktop_1440_hero.png" },
  { width: 1440, height: 5600, name: "desktop_1440_full.png" },
  { width: 768, height: 1024, name: "tablet_768_hero.png" },
  { width: 768, height: 6800, name: "tablet_768_full.png" },
  { width: 375, height: 812, name: "mobile_375_hero.png" },
  { width: 375, height: 7400, name: "mobile_375_full.png" },
];

for (const cap of captures) {
  const outFile = path.join(artifactDir, cap.name);
  const tempProfile = path.join(process.env.TEMP || "C:\\Temp", `chrome-live-${cap.width}-${cap.height}`);
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    `--user-data-dir=${tempProfile}`,
    `--window-size=${cap.width},${cap.height}`,
    `--screenshot=${outFile}`,
    url,
  ];

  try {
    execFileSync(chromePath, args, { stdio: "pipe" });
    const stat = fs.statSync(outFile);
    console.log(`[OK] Captured ${cap.name} (${stat.size} bytes)`);
  } catch (err) {
    console.error(`[FAIL] ${cap.name}:`, err.message);
  }
}
