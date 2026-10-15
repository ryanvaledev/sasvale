import nextConfig from "../next.config.ts";

async function runRedirectVerification() {
  console.log("=== Sasvale V2: Legacy URL & HTTP 308 Redirect Verification ===\n");

  const redirects = await nextConfig.redirects();
  console.log(`Total redirect rules registered: ${redirects.length}`);

  let errors = 0;
  const sourceSet = new Set();
  const sources = [];
  const destinations = new Set();

  for (const rule of redirects) {
    // 1. Verify permanent is strictly true (HTTP 308)
    if (rule.permanent !== true) {
      console.error(`❌ Non-permanent redirect detected for source: ${rule.source}`);
      errors++;
    }

    // 2. Check for duplicate sources
    if (sourceSet.has(rule.source)) {
      console.error(`❌ Duplicate redirect source detected: ${rule.source}`);
      errors++;
    }
    sourceSet.add(rule.source);
    sources.push(rule.source);
    destinations.add(rule.destination);

    // 3. Check for immediate self-loops
    if (rule.source === rule.destination) {
      console.error(`❌ Self-redirect loop detected: ${rule.source} -> ${rule.destination}`);
      errors++;
    }

    // 4. Ensure destination is clean (no .html extension in target)
    if (rule.destination.endsWith(".html")) {
      console.error(`❌ Target destination retains legacy .html extension: ${rule.destination}`);
      errors++;
    }
  }

  // 5. Check for redirect chains (destination exists as a source)
  for (const rule of redirects) {
    if (sourceSet.has(rule.destination)) {
      console.error(`❌ Redirect chain detected: ${rule.source} -> ${rule.destination} which also redirects!`);
      errors++;
    }
  }

  if (errors === 0) {
    console.log(`\n✅ All ${redirects.length} legacy redirect rules verified successfully!`);
    console.log("  - Zero redirect chains");
    console.log("  - Zero redirect loops");
    console.log("  - 100% emit HTTP 308 Permanent Redirect via Next.js (permanent: true)");
    console.log("  - All targets are extension-free modern canonical routes.\n");
    process.exit(0);
  } else {
    console.error(`\n❌ Found ${errors} redirect configuration errors.`);
    process.exit(1);
  }
}

runRedirectVerification().catch((err) => {
  console.error("Verification script execution failed:", err);
  process.exit(1);
});
