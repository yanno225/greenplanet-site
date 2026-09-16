import type { Lang } from "./i18n";

export type ProjectText = {
  client: string;
  place: string;
  title: string;
  /** Short teaser used on the home page. */
  text: string;
  /** Detail page content. */
  heading: string;
  intro: string;
  points: string[];
  delivered: string[];
  facts: { label: string; value: string }[];
};

export type Project = {
  slug: string;
  image: string;
  fr: ProjectText;
  en: ProjectText;
};

export const projects: Project[] = [
  {
    slug: "omansat",
    image: "/images/real-1.jpg",
    fr: {
      client: "OMANSAT",
      place: "Sultanat d'Oman",
      title: "Connectivité haut débit par satellite",
      text: "Solution satellite à haut débit (HTS) en bande Ka pour étendre la connectivité à tout le Sultanat : liaison 2G/3G/LTE, voix sur IP, connectivité maritime et liaisons de secours, sur une seule plateforme.",
      heading: "Space Communication Technology (OMANSAT)",
      intro:
        "Green Planet Technologie a fourni une solution de satellite à haut débit (HTS) fonctionnant en bande Ka pour étendre la connectivité dans le Sultanat d'Oman. Le système prend en charge 3 faisceaux en bande Ka avec un débit global agrégé de 2 Gbit/s.",
      points: [
        "Prise en charge de plusieurs applications via une seule plate-forme : liaison terrestre 2G/3G/LTE, connectivité haut débit, voix sur IP (VoIP), COTP/COTM, connectivité maritime, point d'accès Wi-Fi, connexion de secours et d'urgence.",
        "Mise à disposition et intégration des terminaux distants pour prendre en charge différentes applications, notamment : antenne, BUC, LNB, modems et câbles.",
      ],
      delivered: [
        "Formation intensive dans le pays",
        "Services managés dans le pays",
        "Installation et certification du hub",
        "Gestion de projet dans le pays",
      ],
      facts: [
        { label: "Bande", value: "Ka" },
        { label: "Faisceaux", value: "3" },
        { label: "Débit agrégé", value: "2 Gbit/s" },
      ],
    },
    en: {
      client: "OMANSAT",
      place: "Sultanate of Oman",
      title: "High-throughput satellite connectivity",
      text: "Ka-band high-throughput satellite (HTS) solution extending connectivity across the Sultanate: 2G/3G/LTE backhaul, voice over IP, maritime connectivity and backup links, on a single platform.",
      heading: "Space Communication Technology (OMANSAT)",
      intro:
        "Green Planet Technology delivered a Ka-band high-throughput satellite (HTS) solution to extend connectivity across the Sultanate of Oman. The system supports 3 Ka-band beams with an aggregate throughput of 2 Gbit/s.",
      points: [
        "Multiple applications supported on a single platform: 2G/3G/LTE backhaul, broadband connectivity, voice over IP (VoIP), COTP/COTM, maritime connectivity, Wi-Fi hotspots, backup and emergency links.",
        "Supply and integration of remote terminals to support the different applications, including antenna, BUC, LNB, modems and cabling.",
      ],
      delivered: ["Intensive in-country training", "In-country managed services", "Hub installation and certification", "In-country project management"],
      facts: [
        { label: "Band", value: "Ka" },
        { label: "Beams", value: "3" },
        { label: "Aggregate throughput", value: "2 Gbit/s" },
      ],
    },
  },
  {
    slug: "armee-bresilienne",
    image: "/images/real-2b.jpg",
    fr: {
      client: "Armée brésilienne",
      place: "Brésil",
      title: "Surveillance des frontières SISFRON",
      text: "Réseau de communication satellite en bande X, conçu pour une disponibilité maximale avec une bande de base géo-redondante, des terminaux déployables dont un fly-away 4 pétales et des antennes motorisées de 1,2 m.",
      heading: "Armée brésilienne",
      intro:
        "Green Planet Technologie a fourni un réseau de communication par satellite en bande X pour le projet SISFRON, dans le but de soutenir les tâches de surveillance et de sécurité des frontières du territoire.",
      points: [
        "Réseau conçu pour une disponibilité maximale avec une solution de bande de base géo-redondante, SoTP.",
        "Mise à disposition et intégration des bornes déportées lite, dont un Fly-Away 4 pétales.",
        "Antenne motorisée de 1,2 m (bande X), BUC, LNB et équipement en bande de base pour la VoIP et les données.",
      ],
      delivered: ["Gestion de projets dans le pays", "Formation intensive dans le pays", "Installation, intégration et certification du réseau"],
      facts: [
        { label: "Bande", value: "X" },
        { label: "Antenne", value: "1,2 m motorisée" },
        { label: "Bande de base", value: "Géo-redondante" },
      ],
    },
    en: {
      client: "Brazilian Army",
      place: "Brazil",
      title: "SISFRON border surveillance",
      text: "X-band satellite communication network designed for maximum availability with a geo-redundant baseband, deployable terminals including a 4-petal fly-away and 1.2 m motorised antennas.",
      heading: "Brazilian Army",
      intro:
        "Green Planet Technology delivered an X-band satellite communication network for the SISFRON programme, supporting border surveillance and territorial security missions.",
      points: [
        "Network designed for maximum availability with a geo-redundant baseband solution, SoTP.",
        "Supply and integration of lite remote terminals, including a 4-petal Fly-Away.",
        "1.2 m motorised antenna (X-band), BUC, LNB and baseband equipment for VoIP and data.",
      ],
      delivered: ["In-country project management", "Intensive in-country training", "Network installation, integration and certification"],
      facts: [
        { label: "Band", value: "X" },
        { label: "Antenna", value: "1.2 m motorised" },
        { label: "Baseband", value: "Geo-redundant" },
      ],
    },
  },
  {
    slug: "hellas-sat",
    image: "/images/real-3.jpg",
    fr: {
      client: "Hellas Sat",
      place: "Grèce",
      title: "Réseau chiffré pour le gouvernement",
      text: "Téléport avec antenne motorisée de 4,9 m en bande Ku, RF sur fibre et convertisseurs redondants de 200 W, pour un trafic entièrement chiffré en topologie maillée et en étoile vers 110 terminaux distants.",
      heading: "Hellas Sat",
      intro:
        "Green Planet Technologie a fourni un réseau pour la transmission du trafic entièrement crypté en connectivité Mesh et Star, pour le gouvernement et l'armée de Grèce.",
      points: [
        "Mise à disposition et intégration d'un téléport avec une antenne entièrement motorisée en bande Ku de 4,9 mètres, HPA, LNA et convertisseurs redondants de 200 W avec connectivité RF sur fibre entre l'équipement RF et la bande de base.",
        "Réseau conçu pour prendre en charge plusieurs transpondeurs dans différentes polarisations, pour un total de 110 terminaux distants.",
        "Fourniture et intégration des terminaux distants, y compris l'antenne, le BUC, le LNB, les modems et les câbles.",
      ],
      delivered: [
        "Formation intensive dans le pays",
        "Services managés dans le pays",
        "Installation et intégration de la solution",
        "Gestion de projet dans le pays",
      ],
      facts: [
        { label: "Bande", value: "Ku" },
        { label: "Antenne téléport", value: "4,9 m" },
        { label: "Terminaux distants", value: "110" },
      ],
    },
    en: {
      client: "Hellas Sat",
      place: "Greece",
      title: "Encrypted network for government",
      text: "Teleport with a 4.9 m motorised Ku-band antenna, RF over fibre and 200 W redundant converters, carrying fully encrypted traffic in mesh and star topology to 110 remote terminals.",
      heading: "Hellas Sat",
      intro:
        "Green Planet Technology delivered a network carrying fully encrypted traffic in mesh and star connectivity for the Greek government and armed forces.",
      points: [
        "Supply and integration of a teleport with a fully motorised 4.9 m Ku-band antenna, HPA, LNA and 200 W redundant converters, with RF-over-fibre connectivity between the RF equipment and the baseband.",
        "Network designed to support several transponders in different polarisations, for a total of 110 remote terminals.",
        "Supply and integration of the remote terminals, including antenna, BUC, LNB, modems and cabling.",
      ],
      delivered: ["Intensive in-country training", "In-country managed services", "Solution installation and integration", "In-country project management"],
      facts: [
        { label: "Band", value: "Ku" },
        { label: "Teleport antenna", value: "4.9 m" },
        { label: "Remote terminals", value: "110" },
      ],
    },
  },
  {
    slug: "aeronautica-civil",
    image: "/images/real-4.jpg",
    fr: {
      client: "Aeronautica Civil",
      place: "Colombie",
      title: "37 aéroports reliés en temps réel",
      text: "Réseau satellite entièrement redondant reliant les 37 aéroports de Colombie aux centres de contrôle aérien de Bogotá et Barranquilla : voix et données critiques, conformité EC-137, liaisons directes d'aéroport à aéroport.",
      heading: "Aeronautica Civil",
      intro: "Green Planet Technologie a fourni et déployé une communication par satellite pour l'ensemble des 37 aéroports de Colombie.",
      points: [
        "Fournit une connectivité vocale et de données critiques.",
        "Réseau entièrement redondant, MESH interconnecté, intégré au sous-système de Frequentis et conforme à la norme EC-137.",
        "Deux hubs géographiquement redondants dans les principaux centres de contrôle du trafic aérien (ATC) situés à Bogotá et Barranquilla.",
        "Topologie hybride étoile/maillage prenant en charge la connectivité à saut de satellite unique entre les aéroports régionaux et les centres ATC, ainsi que les communications directes d'aéroport à aéroport.",
        "Assure les communications entre les avions et les aéroports (voix et données en temps réel).",
        "Deux nouveaux téléports situés aux ATC comprenant chacun : une antenne en bande C de 4,5 mètres, concentrateurs redondants, HPA 200 W, LNA et convertisseurs.",
        "Chaque aéroport régional se compose de : une antenne en bande C de 2,4 m, des modems locaux redondants 1:1 (LMR), BUC 20 W et LNB.",
      ],
      delivered: [],
      facts: [
        { label: "Aéroports", value: "37" },
        { label: "Bande", value: "C" },
        { label: "Hubs redondants", value: "2" },
      ],
    },
    en: {
      client: "Aeronautica Civil",
      place: "Colombia",
      title: "37 airports connected in real time",
      text: "Fully redundant satellite network linking Colombia's 37 airports to the air traffic control centres in Bogotá and Barranquilla: critical voice and data, EC-137 compliance, direct airport-to-airport links.",
      heading: "Aeronautica Civil",
      intro: "Green Planet Technology supplied and deployed satellite communications for all 37 airports in Colombia.",
      points: [
        "Provides critical voice and data connectivity.",
        "Fully redundant, interconnected MESH network, integrated with the Frequentis subsystem and compliant with the EC-137 standard.",
        "Two geographically redundant hubs at the main air traffic control (ATC) centres in Bogotá and Barranquilla.",
        "Hybrid star/mesh topology supporting single-hop satellite connectivity between regional airports and ATC centres, as well as direct airport-to-airport communications.",
        "Ensures communications between aircraft and airports (real-time voice and data).",
        "Two new teleports at the ATC centres, each with a 4.5 m C-band antenna, redundant hubs, 200 W HPA, LNA and converters.",
        "Each regional airport is equipped with a 2.4 m C-band antenna, 1:1 redundant local modems (LMR), 20 W BUC and LNB.",
      ],
      delivered: [],
      facts: [
        { label: "Airports", value: "37" },
        { label: "Band", value: "C" },
        { label: "Redundant hubs", value: "2" },
      ],
    },
  },
  {
    slug: "mtn-nigeria",
    image: "/images/real-5.jpg",
    fr: {
      client: "MTN Nigeria",
      place: "Nigeria",
      title: "Liaison terrestre pour 135 stations",
      text: "Hub multiservice redondant en bandes C et Ku pour le raccordement des cellules rurales, avec optimisation et accélération intégrées aux modems : moins d'espace, moins d'énergie et une bande passante mieux utilisée.",
      heading: "MTN Nigeria",
      intro:
        "Green Planet Technologie a conçu un système doté d'un hub multiservice redondant pour une résilience et une disponibilité élevées, afin de fournir des services de liaisons terrestres (CBH) et d'entreprise pour 135 stations.",
      points: [
        "Déployé en bande C et actuellement en cours d'expansion, en utilisant les services de la bande Ku pour répondre aux exigences de CBH des cellules rurales.",
        "Intégration de l'optimisation et de l'accélération dans les modems pour atteindre deux objectifs principaux : réduction de l'espace et de l'énergie nécessaires aux stations de base radio ; allocation de bande passante à haut rendement.",
        "Approvisionnement et intégration des terminaux distants, y compris les BUC, les LNB, les modems et les câbles, avec prise en charge des différentes applications.",
      ],
      delivered: [
        "Formation intensive à distance",
        "Installation et certification du hub avec intégration au système M&C de MTN",
        "Gestion de projet dans le pays",
      ],
      facts: [
        { label: "Stations", value: "135" },
        { label: "Bandes", value: "C et Ku" },
        { label: "Hub", value: "Multiservice redondant" },
      ],
    },
    en: {
      client: "MTN Nigeria",
      place: "Nigeria",
      title: "Cellular backhaul for 135 sites",
      text: "Redundant multiservice hub in C and Ku bands connecting rural cells, with optimisation and acceleration built into the modems: less space, less power and better use of bandwidth.",
      heading: "MTN Nigeria",
      intro:
        "Green Planet Technology designed a system with a redundant multiservice hub for high resilience and availability, delivering cellular backhaul (CBH) and enterprise services for 135 sites.",
      points: [
        "Deployed in C-band and currently expanding, using Ku-band services to meet the CBH requirements of rural cells.",
        "Optimisation and acceleration built into the modems to meet two main goals: reducing the space and power needed at radio base stations, and high-efficiency bandwidth allocation.",
        "Supply and integration of the remote terminals, including BUCs, LNBs, modems and cabling, supporting the different applications.",
      ],
      delivered: ["Intensive remote training", "Hub installation and certification with integration into MTN's M&C system", "In-country project management"],
      facts: [
        { label: "Sites", value: "135" },
        { label: "Bands", value: "C and Ku" },
        { label: "Hub", value: "Redundant multiservice" },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectText(p: Project, lang: Lang): ProjectText {
  return p[lang];
}
