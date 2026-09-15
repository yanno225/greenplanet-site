export const site = {
  name: "GreenPlanet",
  fullName: "GreenPlanet Technology",
  tagline: "Drones · Satellites · Monitoring",
  descriptor: "Intelligence géospatiale & surveillance autonome",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Nos services", href: "/#services" },
    { label: "Secteurs d'application", href: "/#secteurs" },
    { label: "Nos réalisations", href: "/#realisations" },
    { label: "Ils nous ont fait confiance", href: "/#confiance" },
    { label: "Contact", href: "/#contact" },
  ],
  email: "info@greenplanet-technology.com",
  offices: [
    {
      name: "Siège social",
      city: "Abidjan, Côte d'Ivoire",
      lines: ["Angré – Cocody", "Cité Elite 2"],
      phones: ["+225 07 00 00 26 14", "+225 07 00 00 26 15"],
      fax: null,
    },
    {
      name: "Bureau de Montréal",
      city: "Brossard, Québec, Canada",
      lines: ["6185 Boul. Taschereau, Porte #118", "Bureau 105, Brossard, QC J4Z 0E4"],
      phones: ["+1 514 885 9426"],
      fax: "+1 514 639 3020",
    },
  ],
  // TODO: remplacer par les URLs exactes des pages GreenPlanet (non indiquées sur le site actuel).
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/greenplanet-technology" },
    { label: "Facebook", href: "https://www.facebook.com/greenplanettechnology" },
  ],
  needs: [
    "Services par drone",
    "Services satellitaires",
    "Solutions de monitoring",
    "Données et analyses",
    "Autre demande",
  ],
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
