// ---------------------------------------------------------------------------
// Prune post-build: rimuove da dist/_astro le immagini NON referenziate.
//
// Astro/Vite emettono anche i file immagine originali importati (per via di
// import.meta.glob), ma il sito usa solo le varianti ottimizzate (webp/avif).
// Gli originali restano peso morto: questo script li elimina in sicurezza
// (rimuove solo immagini che non compaiono in nessun HTML o CSS della build).
//
// Agganciato a `postbuild` in package.json → gira anche su Netlify.
// ---------------------------------------------------------------------------
import { promises as fs } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const ASTRO = path.join(DIST, '_astro');

async function walk(dir) {
  const out = [];
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const all = await walk(DIST);
const used = new Set();

// Raccoglie i nomi di asset referenziati in HTML e CSS.
for (const f of all) {
  if (!/\.(html|css)$/i.test(f)) continue;
  const c = await fs.readFile(f, 'utf8');
  for (const m of c.matchAll(/[\w.\-]+\.(?:webp|avif|jpe?g|png|woff2?)/gi)) used.add(m[0]);
}

let removed = 0, freed = 0;
for (const f of await fs.readdir(ASTRO)) {
  if (!/\.(jpe?g|png|webp|avif)$/i.test(f)) continue; // tocca solo immagini
  if (used.has(f)) continue;
  const st = await fs.stat(path.join(ASTRO, f));
  await fs.rm(path.join(ASTRO, f));
  removed++; freed += st.size;
}

console.log(`prune: rimosse ${removed} immagini non referenziate (${(freed / 1e6).toFixed(0)} MB liberati)`);
