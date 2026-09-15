import Image from "next/image";
import Link from "next/link";
import { site, telHref } from "@/lib/site";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Services par drone", href: "/#services" },
      { label: "Services satellitaires", href: "/#services" },
      { label: "Solutions de monitoring", href: "/#services" },
      { label: "Secteurs d'application", href: "/#secteurs" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Nos réalisations", href: "/#realisations" },
      { label: "Contact", href: "/#contact" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1880px] px-6 pb-8 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/brand/mark.png" alt="" width={36} height={30} style={{ height: 30, width: "auto" }} />
              <span className="text-[17px] font-semibold tracking-tight text-ink">{site.name}</span>
            </Link>
            <p className="mt-5 max-w-[34ch] text-[14.5px] leading-relaxed text-ink-2">
              Prestataire de services par drone, de services satellitaires et de solutions de monitoring pour les
              infrastructures, les territoires et les réseaux.
            </p>
            <div className="mt-6 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-4 py-2 text-[13.5px] font-medium text-ink transition-colors hover:border-gp-green hover:text-gp-green"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-[12.5px] font-medium uppercase tracking-[0.16em] text-ink-3">{c.title}</div>
              <ul className="mt-5 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[15px] text-ink transition-colors hover:text-gp-green">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Offices */}
          <div className="flex flex-col gap-8">
            {site.offices.map((o) => (
              <div key={o.name}>
                <div className="text-[12.5px] font-medium uppercase tracking-[0.16em] text-ink-3">{o.name}</div>
                <div className="mt-3 text-[14.5px] leading-relaxed text-ink-2">
                  {o.lines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                  <div>{o.city}</div>
                </div>
                <div className="mt-2 flex flex-col gap-0.5 text-[14.5px]">
                  {o.phones.map((p) => (
                    <a key={p} href={telHref(p)} className="w-fit text-ink transition-colors hover:text-gp-green">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <a href={`mailto:${site.email}`} className="w-fit text-[14.5px] font-medium text-ink hover:text-gp-green">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1480px] flex-col justify-between gap-3 border-t border-line pt-6 text-[13px] text-ink-3 md:flex-row">
          <span>© {new Date().getFullYear()} {site.fullName}. Tous droits réservés.</span>
          <span>{site.tagline}</span>
        </div>
        <p className="mx-auto mt-3 max-w-[1480px] text-[11px] text-ink-3/70">
          Modèle 3D du drone :{" "}
          <a
            href="https://sketchfab.com/3d-models/dji-fpv-by-sdc-high-performance-drone-d471ea8c6235457b8e131842e2cf3783"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-2 hover:text-gp-green"
          >
            DJI FPV by SDC
          </a>{" "}
          par SDC PERFORMANCE, licence CC BY 4.0. Image satellite : NASA/JPL-Caltech. Photos secteurs : Unsplash, NARA
          (domaine public) et Wikimedia Commons (CC0). Vidéos : NASA Scientific Visualization Studio (Landsat 9) et
          Pixabay (orlandoalan).
        </p>
      </div>
    </footer>
  );
}
