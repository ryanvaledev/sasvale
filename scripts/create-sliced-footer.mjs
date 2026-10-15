import sharp from "sharp";
import fs from "node:fs";

async function generate() {
  const logoPath = "public/assets/brand/sasvale-logo.png";
  const image = sharp(logoPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Find bounding box
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      if (data[idx] > 80) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log("Found bounds:", { minX, maxX, minY, maxY });

  // Add padding around horizontal bounds
  const padX = 30;
  const startX = Math.max(0, minX - padX);
  const endX = Math.min(width, maxX + padX);
  const cropW = endX - startX;

  // Split line: right through the midline of the glyphs
  const splitY = Math.round((minY + maxY) / 2); // ~373
  const topStart = Math.max(0, minY - 20); // ~221
  const topH = splitY - topStart; // ~152
  const bottomEnd = Math.min(height, maxY + 25); // ~530
  const bottomH = bottomEnd - splitY; // ~157

  console.log("Split configuration:", { splitY, topStart, topH, bottomEnd, bottomH, cropW });

  // 1. Generate TOP HALF: Solid white on transparent
  const topData = Buffer.alloc(cropW * topH * 4);
  for (let y = 0; y < topH; y++) {
    const srcY = topStart + y;
    for (let x = 0; x < cropW; x++) {
      const srcX = startX + x;
      const srcIdx = (srcY * width + srcX) * channels;
      const dstIdx = (y * cropW + x) * 4;
      const isWhite = data[srcIdx] > 80;
      if (isWhite) {
        topData[dstIdx] = 243;     // #F3F0E8 Red
        topData[dstIdx + 1] = 240; // #F3F0E8 Green
        topData[dstIdx + 2] = 232; // #F3F0E8 Blue
        topData[dstIdx + 3] = data[srcIdx]; // alpha matches source antialiasing
      } else {
        topData[dstIdx] = 0;
        topData[dstIdx + 1] = 0;
        topData[dstIdx + 2] = 0;
        topData[dstIdx + 3] = 0;
      }
    }
  }

  // 2. Generate BOTTOM HALF: Wireframe outline on transparent
  // Stroke thickness in source pixels (at ~1900px width, 4px is crisp ~2px rendered)
  const strokeRadius = 4;
  const bottomData = Buffer.alloc(cropW * bottomH * 4);

  // Helper to check if pixel in original image is white
  const isOriginalWhite = (gx, gy) => {
    if (gx < 0 || gx >= width || gy < 0 || gy >= height) return false;
    const idx = (gy * width + gx) * channels;
    return data[idx] > 80;
  };

  for (let y = 0; y < bottomH; y++) {
    const srcY = splitY + y;
    for (let x = 0; x < cropW; x++) {
      const srcX = startX + x;
      const dstIdx = (y * cropW + x) * 4;

      if (!isOriginalWhite(srcX, srcY)) {
        // Background
        bottomData[dstIdx] = 0;
        bottomData[dstIdx + 1] = 0;
        bottomData[dstIdx + 2] = 0;
        bottomData[dstIdx + 3] = 0;
        continue;
      }

      // Check if pixel is near a black edge in original image
      let nearEdge = false;
      for (let dy = -strokeRadius; dy <= strokeRadius; dy++) {
        for (let dx = -strokeRadius; dx <= strokeRadius; dx++) {
          if (dx * dx + dy * dy <= strokeRadius * strokeRadius) {
            if (!isOriginalWhite(srcX + dx, srcY + dy)) {
              nearEdge = true;
              break;
            }
          }
        }
        if (nearEdge) break;
      }

      if (nearEdge) {
        bottomData[dstIdx] = 243;     // #F3F0E8 Red
        bottomData[dstIdx + 1] = 240; // #F3F0E8 Green
        bottomData[dstIdx + 2] = 232; // #F3F0E8 Blue
        bottomData[dstIdx + 3] = 255;
      } else {
        // Interior: transparent!
        bottomData[dstIdx] = 0;
        bottomData[dstIdx + 1] = 0;
        bottomData[dstIdx + 2] = 0;
        bottomData[dstIdx + 3] = 0;
      }
    }
  }

  // Save to public/assets/brand/
  await sharp(topData, { raw: { width: cropW, height: topH, channels: 4 } })
    .png()
    .toFile("public/assets/brand/sasvale_footer_logo.png");

  await sharp(bottomData, { raw: { width: cropW, height: bottomH, channels: 4 } })
    .png()
    .toFile("public/assets/brand/sasvale_footer_logo_slice.png");

  console.log("Successfully generated official SASVALE sasvale_footer_logo.png and sasvale_footer_logo_slice.png!");
}

generate();
