// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Configurazione Astro.
// - i18n nativo IT/EN: l'italiano è la lingua di default e NON viene prefissata
//   nell'URL (/), l'inglese vive sotto /en/. Ottimo per SEO (URL distinti).
// - Tailwind v4 è agganciato come plugin Vite (nessun file tailwind.config necessario:
//   il tema vive in src/styles/global.css con la direttiva @theme).
export default defineConfig({
  site: 'https://www.pittuigabriele.it',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: { it: 'it-IT', en: 'en-US' },
      },
    }),
  ],
  image: {
    // Limita la dimensione massima generata: le foto sorgente sono ad alta risoluzione,
    // qui produciamo varianti responsive ragionevoli.
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
