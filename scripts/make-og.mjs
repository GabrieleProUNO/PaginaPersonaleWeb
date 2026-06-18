// Genera public/og-image.jpg (1200×630) col dualismo Luce/Logica.
// Eseguito una tantum: node scripts/make-og.mjs
import sharp from 'sharp';
import { promises as fs } from 'node:fs';

const W = 1200, H = 630;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#EDE7D9"/>
  <polygon points="0,0 560,0 440,${H} 0,${H}" fill="#16181C"/>
  <text x="64" y="120" font-family="monospace" font-size="40" font-weight="700" fill="#E9E3D6" letter-spacing="6">GP</text>
  <text x="64" y="${H - 120}" font-family="monospace" font-size="34" font-weight="700" fill="#E9E3D6" letter-spacing="4">TECNICA</text>
  <text x="${W - 64}" y="${H - 120}" font-family="Georgia, serif" font-size="44" fill="#1F2024" text-anchor="end" font-style="italic">Creatività</text>
  <text x="${W / 2}" y="${H / 2 - 20}" font-family="Georgia, serif" font-size="64" fill="#C68A3E" text-anchor="middle">Creatività e Tecnica</text>
  <text x="${W / 2}" y="${H / 2 + 40}" font-family="sans-serif" font-size="30" fill="#5A574E" text-anchor="middle">Gabriele Pittui — Sviluppatore · Fotografo · Videomaker</text>
</svg>`;

await fs.mkdir('public', { recursive: true });
await sharp(Buffer.from(svg)).jpeg({ quality: 86 }).toFile('public/og-image.jpg');
console.log('✓ public/og-image.jpg generata (1200×630)');
