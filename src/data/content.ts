// Contenuti strutturati e bilingui (Fase 3).
// Modificare qui per aggiornare progetti, collaborazioni, mostre e competenze.
import type { Lang } from '../i18n/utils';

type Bi = Record<Lang, string>;
type BiList = Record<Lang, string[]>;

export interface TechProject {
  index: string;
  title: string; // mono, invariato tra lingue
  tags: string[];
  intro: Bi;
  role: Bi;
  link?: { label: string; href: string };
}

export interface Collaboration {
  name: string;
  slug: string; // cartella galleria in src/galleries/<slug>
  desc: Bi;
}

export interface Exhibition {
  slug: string;
  title: Bi;
  desc: Bi;
}

export const techProjects: TechProject[] = [
  {
    index: '01',
    title: 'LAN Party',
    tags: ['C# · Unity', 'Networking', 'Team · 2024–26', 'Project management'],
    intro: {
      it: 'Lo sviluppo completo di un videogioco, dall’idea alla build finale, dentro un team interamente composto da studenti e autogestito. Tre edizioni, tre cicli di produzione: progettazione, codice in C# su Unity, divisione dei ruoli, integrazione e rilascio. Il valore non è solo tecnico — è aver fatto funzionare un gruppo di pari senza un capo imposto dall’alto, edizione dopo edizione.',
      en: 'The full development of a video game, from idea to final build, inside a fully student-run, self-organized team. Three editions, three production cycles: design, C# code on Unity, role splitting, integration and release. The value isn’t only technical — it’s making a group of peers work together with no boss imposed from above, edition after edition.',
    },
    role: { it: 'Sviluppo & coordinamento di team', en: 'Development & team coordination' },
    link: { label: 'marconirovereto.it · LAN Party 2026', href: 'https://www.marconirovereto.it/2026/06/05/lan-party-2026/' },
  },
  {
    index: '02',
    title: 'Progetto MADE',
    tags: ['Web', 'Orientamento', 'Commissione pubblica'],
    intro: {
      it: 'Un portale web per l’orientamento scolastico, commissionato dalla Provincia Autonoma di Trento e pensato per gli studenti di terza media che devono scegliere la scuola superiore. Un progetto con un committente reale, requisiti veri e utenti veri: dall’analisi alla messa online. Tradurre un bisogno istituzionale in un’interfaccia che un tredicenne usa senza istruzioni è stata la parte più difficile — e più formativa.',
      en: 'A web portal for school guidance, commissioned by the Autonomous Province of Trento and built for middle-school students choosing their high school. A project with a real client, real requirements and real users: from analysis to going live. Translating an institutional need into an interface a thirteen-year-old uses without instructions was the hardest — and most formative — part.',
    },
    role: { it: 'Sviluppo web', en: 'Web development' },
    link: { label: 'md10-g6.retescuolevallagarina.it', href: 'https://md10-g6.retescuolevallagarina.it/' },
  },
];

export const techSkills = [
  'Java', 'Python', 'C# (Unity)', 'HTML / CSS / JS', 'Web frameworks',
  'Cisco networking & systems', 'Advanced prompting (20h)',
];

export const collaborations: Collaboration[] = [
  {
    name: 'Pro Loco di Villa Lagarina',
    slug: 'proloco-villa-lagarina',
    desc: {
      it: 'Fotografo ufficiale. Eventi, comunità, tradizione: documentare il territorio nel momento in cui accade.',
      en: 'Official photographer. Events, community, tradition: documenting the territory as it happens.',
    },
  },
  {
    name: 'Moonlight Events',
    slug: 'moonlight-events',
    desc: {
      it: 'Divulgatore, grafico e fotografo ufficiale. Dall’immagine singola all’identità visiva di un evento: scatto, comunicazione e grafica in un unico ruolo.',
      en: 'Communicator, designer and official photographer. From the single image to an event’s visual identity: shooting, communication and design in one role.',
    },
  },
  {
    name: 'Backstage cortometraggi — “Come un temporale”',
    slug: 'backstage-orizzonti',
    desc: {
      it: 'Fotografo di backstage per cortometraggi (2024) e direttore di camera per il progetto “Orizzonti” (2026). Stare dietro la camera mentre nasce un film: luce, movimento, attesa del momento giusto.',
      en: 'Backstage photographer for short films (2024) and camera operator for the “Orizzonti” project (2026). Standing behind the camera as a film takes shape: light, movement, waiting for the right moment.',
    },
  },
];

export const exhibitions: Exhibition[] = [
  {
    slug: 'mostra-percezione',
    title: { it: 'La ricerca della percezione visiva', en: 'In search of visual perception' },
    desc: {
      it: 'Una mostra sul modo in cui guardiamo: cosa l’occhio cerca prima ancora che la mente capisca.',
      en: 'An exhibition on the way we look: what the eye seeks before the mind understands.',
    },
  },
  {
    slug: 'mostra-costrutto',
    title: { it: 'La semplicità del costrutto', en: 'The simplicity of structure' },
    desc: {
      it: 'Sottrarre fino all’essenziale. La forma che resta quando togli tutto ciò che non serve.',
      en: 'Subtracting down to the essential. The form that remains once you remove all that isn’t needed.',
    },
  },
  {
    slug: 'mostra-disordine',
    title: { it: 'Il declino del disordine', en: 'The decline of disorder' },
    desc: {
      it: 'Il momento in cui il caos trova un ordine — o lo perde. Dieci scatti, una sequenza.',
      en: 'The moment chaos finds an order — or loses it. Ten shots, one sequence.',
    },
  },
];

export const creativeSkills = [
  'Adobe Photoshop', 'Lightroom', 'Premiere', 'Relab Video', 'Canva',
];

export const certifications = [
  'ITT G. Marconi — Informatica, IoT & Sistemi',
  'Cisco CCNA (in corso)',
  'Google G-Suite (3 anni)',
  'Primo Soccorso — Zambaldi Medical & Rescue',
  'Patentino allenatore (in corso)',
  'Italiano madrelingua · Inglese B1',
];

/** Mappa slug → titolo leggibile (per la pagina galleria). */
export function galleryTitle(slug: string, lang: Lang): string {
  const collab = collaborations.find((c) => c.slug === slug);
  if (collab) return collab.name;
  const exh = exhibitions.find((e) => e.slug === slug);
  if (exh) return exh.title[lang];
  return slug;
}

export type { Bi, BiList };
