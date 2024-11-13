import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sizes = [16, 48, 128];
const inputSvg = './public/icon.svg';
const distDir = './dist';

async function generateIcons() {
  try {
    // Ensure dist directory exists
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir);
    }

    // Generate icons for each size
    for (const size of sizes) {
      await sharp(inputSvg)
        .resize(size, size)
        .png()
        .toFile(path.join(distDir, `icon${size}.png`));
    }

    // Copy manifest.json to dist
    const manifest = JSON.parse(fs.readFileSync('./public/manifest.json', 'utf8'));
    fs.writeFileSync(
      path.join(distDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );

    console.log('✅ Post-build processing completed successfully');
  } catch (error) {
    console.error('❌ Error during post-build processing:', error);
    process.exit(1);
  }
}

generateIcons();