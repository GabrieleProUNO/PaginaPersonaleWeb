// Prepara i loghi per il sito → public/brand/
//  - prugna-studio.png : sfondo grigio reso trasparente + ritaglio margini
//  - gabriele-pittui.png: ritaglio dei margini (lo sfondo acquerello fa parte
//    del design, quindi resta)
// Esecuzione una tantum: node scripts/make-logos.mjs
import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const HOME = os.homedir();
const SRC = path.join(HOME, 'Downloads', 'drive-download-20260618T142901Z-3-001');
const OUT = path.resolve('public/brand');
await fs.mkdir(OUT, { recursive: true });

// 1) PRUGNA STUDIO — rimuove lo sfondo a tinta unita (chroma key sul colore d'angolo)
{
  const base = sharp(path.join(SRC, 'Inc. (1).png')).ensureAlpha();
  const { data, info } = await base.raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  // colore di sfondo campionato in alto a sinistra
  const br = data[0], bg = data[1], bb = data[2];
  const TOL = 38;
  for (let i = 0; i < data.length; i += ch) {
    const dr = Math.abs(data[i] - br);
    const dg = Math.abs(data[i + 1] - bg);
    const db = Math.abs(data[i + 2] - bb);
    if (dr < TOL && dg < TOL && db < TOL) data[i + 3] = 0; // rende trasparente
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: ch } })
    .png()
    .trim({ threshold: 10 }) // ritaglia i bordi trasparenti
    .toFile(path.join(OUT, 'prugna-studio.png'));
  console.log('✓ prugna-studio.png (sfondo trasparente)');
}

// 2) GABRIELE PITTUI — ritaglia solo i margini uniformi (acquerello preservato)
{
  await sharp(path.join(SRC, 'Inc. (2).png'))
    .trim({ threshold: 20 })
    .png()
    .toFile(path.join(OUT, 'gabriele-pittui.png'));
  console.log('✓ gabriele-pittui.png (margini ritagliati)');
}

console.log('Loghi pronti in public/brand/');
