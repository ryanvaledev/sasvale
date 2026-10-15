import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const htmlPath = "file:///" + path.resolve("scratch/homepage-prototype.html").replace(/\\/g, "/");
const artifactDir = "C:\\Users\\XC THE TECH STORE\\.gemini\\antigravity-ide\\brain\\7ad29e66-561d-4143-a659-6b479b64a6b0";

const captures = [
  { width: 1440, height: 960, name: "final_prototype_hero_1440.png" },
  { width: 1440, height: 4900, name: "final_prototype_full_1440.png" },
];

for (const cap of captures) {
  const outFile = path.join(artifactDir, cap.name);
  const tempProfile = path.join(process.env.TEMP || "C:\\Temp", `chrome-proto-${cap.width}-${cap.height}`);
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    `--user-data-dir=${tempProfile}`,
    `--window-size=${cap.width},${cap.height}`,
    `--screenshot=${outFile}`,
    htmlPath,
  ];

  try {
    execFileSync(chromePath, args, { stdio: "pipe" });
    const stat = fs.statSync(outFile);
    console.log(`[OK] Captured ${cap.name} (${stat.size} bytes)`);
  } catch (err) {
    console.error(`[FAIL] ${cap.name}:`, err.message);
  }
}
