// Dizionario di traduzione (Fase 3). Una chiave per stringa, due lingue.
// I testi lunghi multi-paragrafo sono array di stringhe (un elemento = un <p>).

export const languages = { it: 'Italiano', en: 'English' } as const;
export const defaultLang = 'it';

export const ui = {
  it: {
    'nav.luce': 'Creatività',
    'nav.logica': 'Tecnica',
    'nav.about': 'Chi sono',
    'nav.contact': 'Contatti',
    'toggle.mode': 'Cambia modalità Creatività/Tecnica',
    'toggle.lang': 'Switch to English',

    'hero.name': 'Gabriele Pittui',
    'hero.kicker': 'Informatica & Fotografia · Rovereto',
    'hero.title.light': 'Creatività',
    'hero.title.and': 'e',
    'hero.title.logic': 'Tecnica',
    'hero.subtitle':
      'Coding e frame. Due linguaggi, una sola attenzione al dettaglio.',
    'hero.lead':
      "Pittui Gabriele, 18 anni. Studio Informatica, IoT e sistemi all'ITT Marconi di Rovereto e lavoro come fotografo e videomaker. Questo spazio è il punto in cui la struttura progettuale e l'emozione di uno scatto si incontrano.",
    'hero.cta.logica': 'Entra nella Tecnica',
    'hero.cta.luce': 'Entra nella Creatività',
    'hero.hint': 'Muovi il cursore per scegliere il tuo lato',

    'mode.logica.intro':
      'La struttura. Programmi, codice, sistemi che reggono il peso. Qui il valore sta nel rigore: niente di superfluo, tutto al suo posto.',
    'mode.luce.intro':
      "L'emozione. Il tempo fermato in uno scatto, la luce che decide cosa conta. Qui il valore sta nella percezione.",

    'logica.title': 'Progetti · Tecnica',
    'logica.lead':
      'Progetti reali, team reali, scadenze reali. Selezione dei lavori a cui tengo di più.',
    'skills.tech.title': 'Competenze tecniche',

    'luce.title': 'Progetti · Creatività',
    'luce.lead':
      'Collaborazioni con realtà del territorio e mostre personali. Ogni progetto ha una sua luce e un suo tempo.',
    'luce.collab.title': 'Collaborazioni',
    'luce.exh.title': 'Mostre personali',
    'skills.creative.title': 'Competenze creative',

    'about.title': 'Chi sono',
    'about.body': [
      'Mi chiamo Pittui Gabriele ho diciotto anni e due passioni che la maggior parte delle persone tiene separate. Da una parte la tecnica: scrivo software, studio informatica, progetto siti web — è il modo in cui metto ordine nel mio mondo. Dall’altra l’immagine: fotografo eventi, giro video, monto — è il modo in cui provo a raccontarverlo.',
      'Non le vivo come due cose distinte. Lo stesso rigore che mi serve per far funzionare un programma è quello con cui scelgo un’inquadratura; la stessa sensibilità che mi guida in uno scatto mi aiuta a capire le persone con cui costruisco un progetto.',
    ],
    'about.coach.title': 'Allenatore, prima che tecnico',
    'about.coach.body': [
      'Alleno ed educo bambini del minibasket alla JBR Basket Rovereto. Davanti a una squadra di minori impari cose che nessun corso insegna: prendere decisioni sotto pressione, tenere insieme un gruppo, assumerti la responsabilità di chi conta su di te, comunicare in modo chiaro quando il tempo è poco.',
      'È la competenza che porto in ogni progetto tecnico o creativo: so coordinare un mini team, gestire una scadenza con lucidità e mettere le persone nelle condizioni di dare il meglio e fidarsi. La leadership, per me, non è un titolo — è un’abitudine quotidiana.',
    ],
    'about.certs.title': 'Certificazioni e formazione',

    'gallery.open': 'Apri la galleria',
    'gallery.back': 'Torna ai progetti',
    'gallery.empty': 'Le immagini di questa raccolta arriveranno presto.',
    'gallery.count': 'immagini',
    'lightbox.hint': '← → per navigare · Esc per chiudere',
    'lightbox.close': 'Chiudi',
    'lightbox.prev': 'Precedente',
    'lightbox.next': 'Successiva',

    'contact.title': 'Lavoriamo insieme',
    'contact.body':
      'Per un progetto tecnico, uno shooting o una collaborazione: scrivimi.',
    'contact.form.name': 'Nome',
    'contact.form.email': 'La tua email',
    'contact.form.message': 'Messaggio',
    'contact.form.send': 'Invia messaggio',
    'contact.form.sending': 'Invio…',
    'contact.form.ok': 'Grazie! Ho ricevuto il tuo messaggio, ti risponderò presto.',
    'contact.form.error': 'Qualcosa è andato storto. Riprova o scrivimi direttamente via email.',
    'contact.or': 'oppure raggiungimi qui',
    'footer.claim': 'Costruito da zero. Come tutto il resto.',
    'footer.role': 'Sviluppatore · Fotografo · Videomaker',
  },
  en: {
    'nav.luce': 'Creativity',
    'nav.logica': 'Technique',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'toggle.mode': 'Switch Creativity/Technique mode',
    'toggle.lang': 'Passa all’italiano',

    'hero.name': 'Gabriele Pittui',
    'hero.kicker': 'Software & Photography · Rovereto, Italy',
    'hero.title.light': 'Creativity',
    'hero.title.and': 'and',
    'hero.title.logic': 'Technique',
    'hero.subtitle':
      'I build systems and I capture moments. Two languages, one attention to detail.',
    'hero.lead':
      'Gabriele Pittui, 18. I study Computer Science, IoT and networks at ITT Marconi in Rovereto, and I work as a photographer and videomaker. This is where the rigor of code meets the emotion of a frame.',
    'hero.cta.logica': 'Enter Technique',
    'hero.cta.luce': 'Enter Creativity',
    'hero.hint': 'Move your cursor to choose a side',

    'mode.logica.intro':
      'The structure. Networks, code, systems that hold the weight. Here value lives in rigor: nothing superfluous, everything in place.',
    'mode.luce.intro':
      'The emotion. Time held in a single frame, light deciding what matters. Here value lives in the gaze.',

    'logica.title': 'Work · Technique',
    'logica.lead':
      "Real projects, real teams, real deadlines. A selection of the work I care about most.",
    'skills.tech.title': 'Technical skills',

    'luce.title': 'Work · Creativity',
    'luce.lead':
      'Collaborations with local realities and personal exhibitions. Each project has its own light and its own time.',
    'luce.collab.title': 'Collaborations',
    'luce.exh.title': 'Personal exhibitions',
    'skills.creative.title': 'Creative skills',

    'about.title': 'About',
    'about.body': [
      "I'm eighteen, with two passions most people keep apart. On one side the technical: I write software, configure networks, design systems — it's how I bring order to the world. On the other, the image: I shoot events, film, edit — it's how I tell its story.",
      "I don't treat them as separate. The same rigor that keeps a network running is what I use to choose a frame; the same sensitivity that guides a shot helps me understand the people I build a project with.",
    ],
    'about.coach.title': 'A coach before a technician',
    'about.coach.body': [
      'I coach and mentor kids in youth basketball at JBR Basket Rovereto. In front of a team of children you learn things no course teaches: making decisions under pressure, keeping a group together, taking responsibility for those who rely on you, communicating clearly when there’s little time.',
      "It's the skill I bring to every technical or creative project: I can coordinate a team, handle a deadline with composure and set people up to do their best. To me, leadership isn't a title — it's a daily habit.",
    ],
    'about.certs.title': 'Certifications & training',

    'gallery.open': 'Open gallery',
    'gallery.back': 'Back to work',
    'gallery.empty': 'Images for this collection are coming soon.',
    'gallery.count': 'images',
    'lightbox.hint': '← → to navigate · Esc to close',
    'lightbox.close': 'Close',
    'lightbox.prev': 'Previous',
    'lightbox.next': 'Next',

    'contact.title': "Let's work together",
    'contact.body':
      'For a technical project, a shoot or a collaboration: get in touch.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending…',
    'contact.form.ok': 'Thanks! I got your message and will get back to you soon.',
    'contact.form.error': 'Something went wrong. Try again or email me directly.',
    'contact.or': 'or reach me here',
    'footer.claim': 'Built from scratch. Like everything else.',
    'footer.role': 'Developer · Photographer · Videomaker',
  },
} as const;
