export type Lang = "fr" | "en";

const fr = {
  nav: {
    home: "Accueil",
    services: "Nos services",
    sectors: "Secteurs d'application",
    projects: "Nos réalisations",
    trusted: "Ils nous ont fait confiance",
    contact: "Contact",
  },
  header: { menu: "menu", close: "fermer", langLabel: "Changer de langue" },
  menu: {
    description:
      "Prestataire de services par drone, de services satellitaires et de solutions de monitoring pour les infrastructures, les territoires et les réseaux.",
  },
  hero: {
    line1: "Drones, satellites et monitoring autonomes.",
    line2: "La précision qui protège la planète et vos infrastructures.",
    satellite: "Observation satellitaire",
    drone: "Inspection par drone",
  },
  services: {
    title: "Nos services",
    subtitle: "Nous opérons les missions, traitons les données et livrons des résultats prêts à l'emploi.",
    items: [
      {
        title: "Services par drone",
        text: "Inspections aériennes, relevés LiDAR et photogrammétrie réalisés par nos pilotes certifiés, sur vos sites et infrastructures.",
      },
      {
        title: "Services satellitaires",
        text: "Imagerie et analyses satellitaires pour suivre vos territoires, cultures et actifs à grande échelle, en continu.",
      },
      {
        title: "Solutions de monitoring",
        text: "Plateformes de supervision temps réel : capteurs, alertes intelligentes et tableaux de bord opérés pour vous.",
      },
      {
        title: "Données exploitables",
        text: "De la mission au rapport : nos équipes livrent des données fiables, des analyses claires et des recommandations.",
      },
    ],
    slides: ["Drone d'inspection en vol au-dessus d'une forêt", "Satellite d'observation en orbite au-dessus de la Terre"],
    image: "Image",
  },
  sectors: {
    title: "Secteurs d'application",
    subtitle: "Des données fiables pour les opérateurs qui gèrent des sites étendus, des réseaux et des territoires.",
    items: [
      {
        title: "Énergie et réseaux",
        text: "Inspection de lignes haute tension, de postes et de parcs solaires par drone, thermographie et suivi satellitaire des emprises.",
      },
      {
        title: "Mines et carrières",
        text: "Volumétrie des stocks, suivi de l'exploitation et surveillance des talus par photogrammétrie et LiDAR.",
      },
      {
        title: "Agriculture",
        text: "Cartographie multispectrale, suivi de la santé des cultures et pilotage des rendements par satellite et drone.",
      },
      {
        title: "Infrastructures et BTP",
        text: "Suivi de chantier, relevés topographiques et inspection d'ouvrages d'art, de routes et de ponts.",
      },
      {
        title: "Environnement et forêts",
        text: "Surveillance de la déforestation, des zones humides et des risques naturels par imagerie satellitaire.",
      },
      {
        title: "Télécoms",
        text: "Inspection de pylônes et d'antennes sans nacelle, audits d'installation et monitoring des sites.",
      },
    ],
  },
  projects: {
    title: "Nos réalisations",
    subtitle: "Des réseaux critiques déployés et opérés pour des gouvernements, des armées et des opérateurs.",
    cta: "Voir le projet",
    item: "Réalisation",
    view: "Voir le projet",
    back: "Toutes les réalisations",
    solution: "La solution déployée",
    delivered: "Services fournis par Green Planet Technology",
    prev: "Réalisation précédente",
    next: "Réalisation suivante",
  },
  stats: { clients: "Clients", projects: "Projets", satisfaction: "Satisfaction" },
  trusted: { title: "Ils nous ont fait confiance" },
  contact: {
    title1: "Parlons de",
    title2: "votre projet",
    text: "Inspection par drone, imagerie satellitaire ou supervision de vos sites : décrivez-nous votre besoin, nous revenons vers vous sous 48 heures avec une première approche.",
    name: "Nom",
    namePh: "Votre nom",
    company: "Entreprise",
    companyPh: "Votre organisation",
    email: "Email",
    emailPh: "vous@entreprise.com",
    need: "Besoin",
    choose: "Choisissez un service",
    needs: ["Services par drone", "Services satellitaires", "Solutions de monitoring", "Données et analyses", "Autre demande"],
    message: "Message",
    messagePh: "Décrivez votre site, votre périmètre et vos délais.",
    submit: "Envoyer la demande",
    sending: "Envoi…",
    sent: "Merci, votre demande a bien été envoyée.",
    hint: "Réponse sous 48 h ouvrées.",
    errors: {
      required: "Nom, email et message sont obligatoires.",
      email: "Adresse email invalide.",
      long: "Un champ est trop long.",
      invalid: "Requête invalide.",
      generic: "Envoi impossible. Réessayez dans un instant.",
    },
  },
  footer: {
    tagline:
      "Prestataire de services par drone, de services satellitaires et de solutions de monitoring pour les infrastructures, les territoires et les réseaux.",
    servicesCol: "Services",
    companyCol: "Entreprise",
    links: {
      drone: "Services par drone",
      satellite: "Services satellitaires",
      monitoring: "Solutions de monitoring",
      sectors: "Secteurs d'application",
      projects: "Nos réalisations",
      contact: "Contact",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
    },
    hq: "Siège social",
    hqCity: "Abidjan, Côte d'Ivoire",
    montreal: "Bureau de Montréal",
    montrealCity: "Brossard, Québec, Canada",
    fax: "Fax",
    rights: "Tous droits réservés.",
    credits:
      "Image satellite : NASA/JPL-Caltech. Photos secteurs : Unsplash, NARA (domaine public) et Wikimedia Commons (CC0). Vidéos : NASA Scientific Visualization Studio (Landsat 9) et Pixabay (orlandoalan). Modèle 3D du drone : DJI FPV by SDC par SDC PERFORMANCE, licence CC BY 4.0.",
  },
  legal: {
    title: "Mentions légales",
    publisher: "Éditeur du site",
    publisherTodo: "À compléter : forme juridique, capital, numéro d'immatriculation, directeur de la publication.",
    hosting: "Hébergement",
    hostingTodo: "À compléter : nom et adresse de l'hébergeur.",
    ip: "Propriété intellectuelle",
    ipText:
      "L'ensemble des contenus de ce site (textes, images, logos) est la propriété de Green Planet Technology ou de leurs auteurs respectifs et ne peut être reproduit sans autorisation. Les crédits des images tierces figurent en pied de page.",
    emailLabel: "Email",
  },
  privacy: {
    title: "Politique de confidentialité",
    collected: "Données collectées",
    collectedText:
      "Le formulaire de contact recueille votre nom, votre entreprise, votre adresse email, le service qui vous intéresse et votre message. Ces informations servent uniquement à traiter votre demande et à y répondre.",
    retention: "Conservation et partage",
    retentionText:
      "Vos données ne sont ni vendues ni cédées à des tiers. Elles sont conservées le temps nécessaire au traitement de votre demande et aux échanges commerciaux qui peuvent en découler.",
    rights: "Vos droits",
    rightsText: "Vous pouvez demander l'accès, la rectification ou la suppression de vos données à tout moment en écrivant à",
    cookies: "Cookies",
    cookiesText: "Ce site n'utilise pas de cookies de suivi publicitaire.",
  },
};

export type Dict = typeof fr;

const en: Dict = {
  nav: {
    home: "Home",
    services: "Our services",
    sectors: "Industries",
    projects: "Our projects",
    trusted: "They trust us",
    contact: "Contact",
  },
  header: { menu: "menu", close: "close", langLabel: "Switch language" },
  menu: {
    description:
      "Provider of drone services, satellite services and monitoring solutions for infrastructure, territories and networks.",
  },
  hero: {
    line1: "Autonomous drones, satellites and monitoring.",
    line2: "The precision that protects the planet and your infrastructure.",
    satellite: "Satellite observation",
    drone: "Drone inspection",
  },
  services: {
    title: "Our services",
    subtitle: "We operate the missions, process the data and deliver results ready to use.",
    items: [
      {
        title: "Drone services",
        text: "Aerial inspections, LiDAR surveys and photogrammetry carried out by our certified pilots on your sites and infrastructure.",
      },
      {
        title: "Satellite services",
        text: "Satellite imagery and analytics to monitor your territories, crops and assets at scale, continuously.",
      },
      {
        title: "Monitoring solutions",
        text: "Real-time supervision platforms: sensors, smart alerts and dashboards operated for you.",
      },
      {
        title: "Actionable data",
        text: "From mission to report: our teams deliver reliable data, clear analyses and recommendations.",
      },
    ],
    slides: ["Inspection drone flying over a forest", "Earth observation satellite in orbit"],
    image: "Image",
  },
  sectors: {
    title: "Industries",
    subtitle: "Reliable data for operators managing large sites, networks and territories.",
    items: [
      {
        title: "Energy and grids",
        text: "Drone inspection of high-voltage lines, substations and solar farms, thermography and satellite monitoring of rights-of-way.",
      },
      {
        title: "Mining and quarries",
        text: "Stockpile volumetrics, operations tracking and slope monitoring using photogrammetry and LiDAR.",
      },
      {
        title: "Agriculture",
        text: "Multispectral mapping, crop health monitoring and yield management from satellite and drone.",
      },
      {
        title: "Infrastructure and construction",
        text: "Site progress tracking, topographic surveys and inspection of bridges, roads and structures.",
      },
      {
        title: "Environment and forests",
        text: "Monitoring of deforestation, wetlands and natural hazards through satellite imagery.",
      },
      {
        title: "Telecoms",
        text: "Tower and antenna inspection without a lift, installation audits and site monitoring.",
      },
    ],
  },
  projects: {
    title: "Our projects",
    subtitle: "Critical networks deployed and operated for governments, armed forces and operators.",
    cta: "View project",
    item: "Project",
    view: "View project",
    back: "All projects",
    solution: "The deployed solution",
    delivered: "Services provided by Green Planet Technology",
    prev: "Previous project",
    next: "Next project",
  },
  stats: { clients: "Clients", projects: "Projects", satisfaction: "Satisfaction" },
  trusted: { title: "They trust us" },
  contact: {
    title1: "Let's talk about",
    title2: "your project",
    text: "Drone inspection, satellite imagery or site supervision: tell us what you need and we will get back to you within 48 hours with a first approach.",
    name: "Name",
    namePh: "Your name",
    company: "Company",
    companyPh: "Your organisation",
    email: "Email",
    emailPh: "you@company.com",
    need: "Need",
    choose: "Choose a service",
    needs: ["Drone services", "Satellite services", "Monitoring solutions", "Data and analytics", "Other request"],
    message: "Message",
    messagePh: "Describe your site, your scope and your timeline.",
    submit: "Send request",
    sending: "Sending…",
    sent: "Thank you, your request has been sent.",
    hint: "Reply within 48 business hours.",
    errors: {
      required: "Name, email and message are required.",
      email: "Invalid email address.",
      long: "A field is too long.",
      invalid: "Invalid request.",
      generic: "Could not send. Please try again in a moment.",
    },
  },
  footer: {
    tagline:
      "Provider of drone services, satellite services and monitoring solutions for infrastructure, territories and networks.",
    servicesCol: "Services",
    companyCol: "Company",
    links: {
      drone: "Drone services",
      satellite: "Satellite services",
      monitoring: "Monitoring solutions",
      sectors: "Industries",
      projects: "Our projects",
      contact: "Contact",
      legal: "Legal notice",
      privacy: "Privacy policy",
    },
    hq: "Head office",
    hqCity: "Abidjan, Côte d'Ivoire",
    montreal: "Montreal office",
    montrealCity: "Brossard, Quebec, Canada",
    fax: "Fax",
    rights: "All rights reserved.",
    credits:
      "Satellite image: NASA/JPL-Caltech. Industry photos: Unsplash, NARA (public domain) and Wikimedia Commons (CC0). Videos: NASA Scientific Visualization Studio (Landsat 9) and Pixabay (orlandoalan). Drone 3D model: DJI FPV by SDC by SDC PERFORMANCE, CC BY 4.0 licence.",
  },
  legal: {
    title: "Legal notice",
    publisher: "Site publisher",
    publisherTodo: "To be completed: legal form, share capital, registration number, publishing director.",
    hosting: "Hosting",
    hostingTodo: "To be completed: name and address of the hosting provider.",
    ip: "Intellectual property",
    ipText:
      "All content on this site (texts, images, logos) is the property of Green Planet Technology or their respective authors and may not be reproduced without permission. Third-party image credits are listed in the footer.",
    emailLabel: "Email",
  },
  privacy: {
    title: "Privacy policy",
    collected: "Data collected",
    collectedText:
      "The contact form collects your name, company, email address, the service you are interested in and your message. This information is used solely to process and answer your request.",
    retention: "Retention and sharing",
    retentionText:
      "Your data is neither sold nor passed on to third parties. It is kept for as long as needed to process your request and any business exchanges that follow.",
    rights: "Your rights",
    rightsText: "You may request access to, correction or deletion of your data at any time by writing to",
    cookies: "Cookies",
    cookiesText: "This site does not use advertising tracking cookies.",
  },
};

export const dict: Record<Lang, Dict> = { fr, en };
export const LANGS: Lang[] = ["fr", "en"];
export const DEFAULT_LANG: Lang = "fr";
