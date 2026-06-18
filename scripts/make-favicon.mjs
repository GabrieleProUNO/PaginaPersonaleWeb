// Genera le favicon dal logo Prugna su placca crema (quadrata).
// Esecuzione una tantum: node scripts/make-favicon.mjs
import sharp from 'sharp';

const S = 512;
const BG = { r: 244, g: 239, b: 228, alpha: 1 }; // #F4EFE4

const logo = await sharp('public/brand/prugna-studio.png')
  .resize({ width: Math.round(S * 0.84), height: Math.round(S * 0.84), fit: 'inside' })
  .toBuffer();

const master = await sharp({
  create: { width: S, height: S, channels: 4, background: BG },
})
  .composite([{ input: logo, gravity: 'center' }])
  .png()
  .toBuffer();

for (const size of [512, 180, 32]) {
  await sharp(master).resize(size).png().toFile(`public/favicon-${size}.png`);
}
console.log('✓ favicon-32 / favicon-180 / favicon-512 generate in public/');
