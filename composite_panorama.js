// composite_panorama.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Load item data
const itemsData = require('./data/items.js').items;

// Panorama and output paths
const panoramaPath = path.join(__dirname, 'public', 'panorama.jpg');
const outputPath = path.join(__dirname, 'public', 'final_panorama.jpg');

// Image size (should match your panorama image)
const panoramaWidth = 1536; // update if your panorama.jpg is a different size
const panoramaHeight = 768;

// Default overlay sizes (in pixels)
const overlaySizes = {
  furniture: 400,
  lighting: 150,
  wallDecor: 300
};

// Convert pitch/yaw to x/y pixel coordinates
function getXY(pitch, yaw, width, height) {
  // yaw: -180 to 180, pitch: -90 to 90
  // x: 0 (left) to width (right), y: 0 (top) to height (bottom)
  const x = ((yaw + 180) / 360) * width;
  const y = ((90 - pitch) / 180) * height;
  return { x: Math.round(x), y: Math.round(y) };
}

async function composite() {
  // Start with the panorama background
  let compositeImage = sharp(panoramaPath).resize(panoramaWidth, panoramaHeight);
  const overlays = [];

  for (const [category, catData] of Object.entries(itemsData)) {
    for (const item of catData.options) {
      const { pitch, yaw } = item.position;
      const { x, y } = getXY(pitch, yaw, panoramaWidth, panoramaHeight);
      const overlaySize = overlaySizes[category] || 200;
      const itemPath = path.join(__dirname, 'public', item.imageUrl);
      if (!fs.existsSync(itemPath)) {
        console.warn(`Image not found: ${itemPath}`);
        continue;
      }
      overlays.push({
        input: await sharp(itemPath).resize(overlaySize).toBuffer(),
        left: x - Math.round(overlaySize / 2),
        top: y - Math.round(overlaySize / 2)
      });
    }
  }

  // Composite all overlays
  await compositeImage
    .composite(overlays)
    .toFile(outputPath);

  console.log('Composite panorama created at:', outputPath);
}

composite().catch(err => {
  console.error('Error compositing panorama:', err);
}); 