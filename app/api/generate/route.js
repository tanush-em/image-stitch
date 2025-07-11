// app/api/generate/route.js
import { NextResponse } from 'next/server';
import sharp from 'sharp';
import path from 'path';
import { items } from '@/data/items';

const panoramaWidth = 1536;
const panoramaHeight = 768;

// Sizes are now defined per item in items.js

function getXY(pitch, yaw, width, height) {
  const x = ((yaw + 180) / 360) * width;
  const y = ((90 - pitch) / 180) * height;
  return { x: Math.round(x), y: Math.round(y) };
}

export async function POST(request) {
  try {
    const data = await request.json();
    const selectedItems = data.selectedItems;

    // Start with the panorama background
    const panoramaPath = path.join(process.cwd(), 'public', 'panorama.jpg');
    let compositeImage = sharp(panoramaPath).resize(panoramaWidth, panoramaHeight);
    const overlays = [];

    // Process only selected items
    for (const [category, itemId] of Object.entries(selectedItems)) {
      const categoryData = items[category];
      const selectedItem = categoryData.options.find(opt => opt.id === itemId);
      
      if (selectedItem) {
        const { pitch, yaw } = selectedItem.position;
        const { x, y } = getXY(pitch, yaw, panoramaWidth, panoramaHeight);
        const overlaySize = selectedItem.size || 200; // Use item-specific size
        const itemPath = path.join(process.cwd(), 'public', selectedItem.imageUrl);
        
        overlays.push({
          input: await sharp(itemPath).resize(overlaySize).toBuffer(),
          left: x - Math.round(overlaySize / 2),
          top: y - Math.round(overlaySize / 2)
        });
      }
    }

    // Composite all overlays and get buffer
    const outputBuffer = await compositeImage
      .composite(overlays)
      .jpeg()
      .toBuffer();

    // Convert buffer to base64
    const base64Image = outputBuffer.toString('base64');

    return NextResponse.json({ 
      success: true, 
      imageData: `data:image/jpeg;base64,${base64Image}`
    });
  } catch (error) {
    console.error('Error generating panorama:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to generate panorama' 
    }, { status: 500 });
  }
}
