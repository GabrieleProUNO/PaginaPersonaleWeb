// ---------------------------------------------------------------------------
// Import + normalizzazione immagini → src/galleries/<slug>/
//
// Copia le foto dalle cartelle sorgente (es. Downloads) RIDIMENSIONANDOLE:
//  - lato lungo max 2400px (più che sufficiente per il web, anche a schermo intero)
//  - orientamento EXIF applicato (le foto da telefono non risultano ruotate)
//  - output JPEG qualità 82
// Questo evita immagini troppo grandi per il WebP e tiene leggero il progetto.
// Astro genererà poi le varianti AVIF/WebP responsive al build.
//
// USO:   npm run import:images
// ---------------------------------------------------------------------------
import { promises as fs } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import sharp from 'sharp';

const HOME = os.homedir();
const DEST_ROOT = path.resolve('src/galleries');
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const MAX_SIDE = 2400; // px, lato lungo
const QUALITY = 82;

// slug → cartella sorgente assoluta
const SOURCES = {
  'backstage-orizzonti': path.join(HOME, 'Downloads', 'BackStage_Fem_Un_Film-20260618T115347Z-3-001', 'BackStage_Fem_Un_Film'),
  'moonlight-events': path.join(HOME, 'Downloads', 'moonlight x prugna x melons'),
  'proloco-villa-lagarina': path.join(HOME, 'Downloads', 'Proloco Villa lagarina NATALE'),
  'mostra-percezione': path.join(HOME, 'Downloads', 'Foto di iCloud (2)', 'Mostra sulla ricerca alla percezione visiva'),
  'mostra-costrutto': path.join(HOME, 'Downloads', 'Foto di iCloud (3)', 'Mostra sulla semplicità del costrutto'),
  'mostra-disordine': path.join(HOME, 'Downloads', 'Foto di iCloud (4)', 'Mostra  il desclino del disordine'),
};

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (EXT.has(path.extname(e.name).toLowerCase())) out.push(full);
  }
  return out;
}

// Svuota la cartella di destinazione (tranne .gitkeep) per evitare doppioni.
async function clearDest(dir) {
  let files = [];
  try { files = await fs.readdir(dir); } catch { return; }
  await Promise.all(
    files.filter((f) => f !== '.gitkeep').map((f) => fs.rm(path.join(dir, f), { force: true }))
  );
}

let totalCopied = 0;
let totalErrors = 0;

for (const [slug, src] of Object.entries(SOURCES)) {
  const dest = path.join(DEST_ROOT, slug);
  await fs.mkdir(dest, { recursive: true });
  await clearDest(dest);

  const files = (await walk(src)).sort((a, b) =>
    path.basename(a).localeCompare(path.basename(b), undefined, { numeric: true })
  );
  if (files.length === 0) {
    console.warn(`⚠  ${slug}: nessun file trovato in\n   ${src}`);
    continue;
  }

  let n = 0;
  for (const file of files) {
    const num = String(n + 1).padStart(4, '0');
    const out = path.join(dest, `${num}_${path.basename(file).replace(/\.[^.]+$/, '').replace(/[^\w\-]/g, '_')}.jpg`);
    try {
      await sharp(file)
        .rotate() // applica l'orientamento EXIF
        .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(out);
      n++;
    } catch (err) {
      totalErrors++;
      console.warn(`   ⚠ saltata ${path.basename(file)}: ${err.message}`);
    }
  }
  totalCopied += n;
  console.log(`✓ ${slug}: ${n} immagini`);
}

console.log(`\nFatto. ${totalCopied} immagini importate${totalErrors ? `, ${totalErrors} saltate` : ''}.`);
console.log('Avvia `npm run build` per generare le varianti ottimizzate.');
