// Sistema gallerie dinamico.
// Legge TUTTE le immagini in src/galleries/<slug>/ a build time tramite
// import.meta.glob. Ogni immagine viene passata al componente <Image> di Astro,
// che genera automaticamente varianti AVIF/WebP ottimizzate e responsive.
//
// Per aggiungere una galleria basta creare una cartella in src/galleries/<slug>/
// e metterci dentro i file .jpg/.jpeg/.png — nessun codice da toccare.
import type { ImageMetadata } from 'astro';

// eager: true → le immagini sono incluse nel grafo a build time.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/galleries/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,JPe,JPEG}',
  { eager: true }
);

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
  name: string;
}

// Raggruppa le immagini per slug (nome cartella) e le ordina per nome file.
const grouped: Record<string, GalleryImage[]> = {};

for (const path in modules) {
  // path es: /src/galleries/proloco-villa-lagarina/IMG_001.jpg
  const match = path.match(/\/src\/galleries\/([^/]+)\/(.+)$/);
  if (!match) continue;
  const [, slug, file] = match;
  (grouped[slug] ??= []).push({
    src: modules[path].default,
    alt: `${slug.replace(/-/g, ' ')} — ${file.replace(/\.[^.]+$/, '')}`,
    name: file,
  });
}

for (const slug in grouped) {
  grouped[slug].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
}

/** Tutte le immagini di una galleria (array vuoto se la cartella non esiste). */
export function getGallery(slug: string): GalleryImage[] {
  return grouped[slug] ?? [];
}

/** Numero di immagini in una galleria. */
export function countGallery(slug: string): number {
  return grouped[slug]?.length ?? 0;
}

// Copertine scelte a mano (nome file dentro src/galleries/<slug>/).
// Se non specificata, viene usata la prima immagine.
const COVERS: Record<string, string> = {
  'backstage-orizzonti': '0009__21A6572.jpg',
  'moonlight-events': '0023_TZ01062025_5192.jpg',
  'proloco-villa-lagarina': '0066__SNY0523.jpg',
};

/** Immagine di copertina di una galleria (scelta a mano se definita, altrimenti la prima). */
export function coverOf(slug: string): ImageMetadata | undefined {
  const imgs = grouped[slug];
  if (!imgs || imgs.length === 0) return undefined;
  const preferred = COVERS[slug];
  if (preferred) {
    const found = imgs.find((i) => i.name === preferred);
    if (found) return found.src;
  }
  return imgs[0].src;
}

/** Elenco degli slug effettivamente popolati. */
export function populatedSlugs(): string[] {
  return Object.keys(grouped);
}
