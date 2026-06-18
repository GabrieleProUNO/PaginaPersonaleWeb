# Gabriele Pittui — Portfolio · "Luce e Logica"

Portfolio personale bilingue (IT/EN) costruito con **Astro 5 + Tailwind 4**.
Concept "Luce e Logica": fotografia/video (Luce) e informatica/reti (Logica)
fuse da una home a split asimmetrico e da un interruttore di modalità globale.

## Avvio rapido

```bash
npm install            # installa le dipendenze
npm run import:images  # copia le foto dalle cartelle sorgente in src/galleries/
npm run dev            # server di sviluppo → http://localhost:4321
```

Per la build di produzione:

```bash
npm run build          # genera il sito statico in dist/ (immagini AVIF/WebP)
npm run preview        # anteprima della build
```

## Come aggiungere/aggiornare le gallerie

Ogni galleria è una cartella in `src/galleries/<slug>/`. Per popolarla:

1. **Automatico** — modifica la mappa `SOURCES` in
   [`scripts/import-images.mjs`](scripts/import-images.mjs) facendo puntare ogni
   slug alla cartella sorgente, poi `npm run import:images`.
2. **Manuale** — trascina i file `.jpg/.jpeg/.png` dentro `src/galleries/<slug>/`.

Astro genera in automatico varianti AVIF/WebP responsive con lazy-loading.
Non serve toccare il codice: le immagini vengono lette dinamicamente
(`src/lib/galleries.ts`).

Per **creare una nuova galleria**: aggiungi una voce in `collaborations` o
`exhibitions` dentro [`src/data/content.ts`](src/data/content.ts) con il suo
`slug`, crea la cartella omonima in `src/galleries/` e mettici le foto.

## Struttura

```
src/
├── components/   Hero (split + cursore-diaframma), Header, Footer,
│                 ModeToggle, LangToggle, CaseStudyCard, GalleryCard,
│                 GalleryGrid (+lightbox), PageHome, PageGallery, Head
├── data/         content.ts  — progetti, collaborazioni, mostre, skill (IT/EN)
├── galleries/    <slug>/     — immagini sorgente (ottimizzate al build)
├── i18n/         ui.ts (dizionario)  ·  utils.ts (helper lingua)
├── layouts/      Base.astro
├── lib/          galleries.ts — lettura dinamica delle cartelle
├── pages/        index.astro, galleria/[slug].astro  (+ en/…)
└── styles/       global.css   — design system (token, 2 temi, componenti)
```

## Modifiche frequenti

| Cosa | Dove |
|---|---|
| Testi (tutte le stringhe UI) | `src/i18n/ui.ts` |
| Progetti / collaborazioni / mostre | `src/data/content.ts` |
| Colori, font, spaziature | `src/styles/global.css` |
| Email / contatti | `src/i18n/ui.ts` + `Footer.astro` |

## Note tecniche

- **Performance**: immagini ottimizzate AVIF/WebP + `loading="lazy"`,
  masonry CSS (`columns`) senza JS di layout, animazioni solo `transform`/`opacity`.
- **Accessibilità**: focus visibile, `prefers-reduced-motion` rispettato,
  navigazione lightbox da tastiera, skip-link, `alt` su tutte le immagini.
- **SEO**: URL distinti per lingua (`/` e `/en/`), canonical, Open Graph,
  meta description bilingui.
