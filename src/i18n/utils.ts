// Utility i18n — ricetta ufficiale Astro adattata.
import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

/** Estrae la lingua dall'URL (/en/... → 'en', altrimenti default 'it'). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/** Restituisce una funzione t(key) per la lingua data, con fallback all'italiano. */
export function useTranslations(lang: Lang) {
  return function t<K extends keyof (typeof ui)['it']>(key: K) {
    return (ui[lang] as (typeof ui)['it'])[key] ?? ui[defaultLang][key];
  };
}

/** Costruisce un percorso assoluto rispettando la lingua corrente. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}
