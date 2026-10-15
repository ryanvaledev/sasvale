import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const viewports = [
  { width: 375, height: 812, label: "375" },
  { width: 430, height: 932, label: "430" },
  { width: 768, height: 1024, label: "768" },
  { width: 1024, height: 1366, label: "1024" },
  { width: 1440, height: 900, label: "1440" },
  { width: 1920, height: 1080, label: "1920" },
];

const target = process.argv[2] || "live";
const url = target === "live" ? "https://sasvale.vercel.app/" : "http://localhost:3000/";
const outDir = path.resolve("audit-screenshots", target);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Capturing ${target} screenshots from ${url}...`);

for (const vp of viewports) {
  const outFile = path.join(outDir, `${target}-${vp.label}.png`);
  const tempProfile = path.join(process.env.TEMP || "C:\\Temp", `chrome-audit-${target}-${vp.label}`);
  
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    `--user-data-dir=${tempProfile}`,
    `--window-size=${vp.width},${vp.height}`,
    `--screenshot=${outFile}`,
    url,
  ];

  try {
    execFileSync(chromePath, args, { stdio: "ignore" });
    const stat = fs.statSync(outFile);
    console.log(`[OK] ${vp.label}px (${vp.width}x${vp.height}) -> ${outFile} (${stat.size} bytes)`);
  } catch (err) {
    console.error(`[FAIL] ${vp.label}px:`, err.message);
  }
}
