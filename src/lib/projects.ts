export type Project = {
  slug: string;
  client: string;
  place: string;
  title: string;
  /** Short teaser used on the home page. */
  text: string;
  image: string;
  /** Detail page content. */
  heading: string;
  intro: string;
  points: string[];
  delivered: string[];
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "omansat",
    client: "OMANSAT",
    place: "Sultanat d'Oman",
    title: "Connectivité haut débit par satellite",
    text: "Solution satellite à haut débit (HTS) en bande Ka pour étendre la connectivité à tout le Sultanat : liaison 2G/3G/LTE, voix sur IP, connectivité maritime et liaisons de secours, sur une seule plateforme.",
    image: "/images/real-1.jpg",
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
  {
    slug: "armee-bresilienne",
    client: "Armée brésilienne",
    place: "Brésil",
    title: "Surveillance des frontières SISFRON",
    text: "Réseau de communication satellite en bande X, conçu pour une disponibilité maximale avec une bande de base géo-redondante, des terminaux déployables dont un fly-away 4 pétales et des antennes motorisées de 1,2 m.",
    image: "/images/real-2b.jpg",
    heading: "Armée brésilienne",
    intro:
      "Green Planet Technologie a fourni un réseau de communication par satellite en bande X pour le projet SISFRON, dans le but de soutenir les tâches de surveillance et de sécurité des frontières du territoire.",
    points: [
      "Réseau conçu pour une disponibilité maximale avec une solution de bande de base géo-redondante, SoTP.",
      "Mise à disposition et intégration des bornes déportées lite, dont un Fly-Away 4 pétales.",
      "Antenne motorisée de 1,2 m (bande X), BUC, LNB et équipement en bande de base pour la VoIP et les données.",
    ],
    delivered: [
      "Gestion de projets dans le pays",
      "Formation intensive dans le pays",
      "Installation, intégration et certification du réseau",
    ],
    facts: [
      { label: "Bande", value: "X" },
      { label: "Antenne", value: "1,2 m motorisée" },
      { label: "Bande de base", value: "Géo-redondante" },
    ],
  },
  {
    slug: "hellas-sat",
    client: "Hellas Sat",
    place: "Grèce",
    title: "Réseau chiffré pour le gouvernement",
    text: "Téléport avec antenne motorisée de 4,9 m en bande Ku, RF sur fibre et convertisseurs redondants de 200 W, pour un trafic entièrement chiffré en topologie maillée et en étoile vers 110 terminaux distants.",
    image: "/images/real-3.jpg",
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
  {
    slug: "aeronautica-civil",
    client: "Aeronautica Civil",
    place: "Colombie",
    title: "37 aéroports reliés en temps réel",
    text: "Réseau satellite entièrement redondant reliant les 37 aéroports de Colombie aux centres de contrôle aérien de Bogotá et Barranquilla : voix et données critiques, conformité EC-137, liaisons directes d'aéroport à aéroport.",
    image: "/images/real-4.jpg",
    heading: "Aeronautica Civil",
    intro:
      "Green Planet Technologie a fourni et déployé une communication par satellite pour l'ensemble des 37 aéroports de Colombie.",
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
  {
    slug: "mtn-nigeria",
    client: "MTN Nigeria",
    place: "Nigeria",
    title: "Liaison terrestre pour 135 stations",
    text: "Hub multiservice redondant en bandes C et Ku pour le raccordement des cellules rurales, avec optimisation et accélération intégrées aux modems : moins d'espace, moins d'énergie et une bande passante mieux utilisée.",
    image: "/images/real-5.jpg",
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
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
