"use client";

import Image from "next/image";
import Link from "next/link";
import { site, telHref } from "@/lib/site";
import { useLang } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  const columns = [
    {
      title: f.servicesCol,
      links: [
        { label: f.links.drone, href: "/#services" },
        { label: f.links.satellite, href: "/#services" },
        { label: f.links.monitoring, href: "/#services" },
        { label: f.links.sectors, href: "/#secteurs" },
      ],
    },
    {
      title: f.companyCol,
      links: [
        { label: f.links.projects, href: "/#realisations" },
        { label: f.links.contact, href: "/#contact" },
        { label: f.links.legal, href: "/mentions-legales" },
        { label: f.links.privacy, href: "/confidentialite" },
      ],
    },
  ];

  const offices = [
    { ...site.offices[0], name: f.hq, city: f.hqCity },
    { ...site.offices[1], name: f.montreal, city: f.montrealCity },
  ];

  return (
    <footer className="w-full border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1880px] px-6 pb-8 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/brand/mark.png" alt="" width={36} height={30} style={{ height: 34, width: "auto" }} />
              <span className="flex flex-col leading-none">
                <span className="text-[17px] font-bold tracking-tight text-ink">Green Planet</span>
                <span className="text-[13px] font-normal tracking-wide text-ink-2">Technology</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[34ch] text-[14.5px] leading-relaxed text-ink-2">{f.tagline}</p>
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
            {offices.map((o) => (
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
                  {o.fax && (
                    <span className="text-ink-3">
                      {f.fax} {o.fax}
                    </span>
                  )}
                </div>
              </div>
            ))}
            <a href={`mailto:${site.email}`} className="w-fit text-[14.5px] font-medium text-ink hover:text-gp-green">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1480px] flex-col justify-between gap-3 border-t border-line pt-6 text-[13px] text-ink-3 md:flex-row">
          <span>
            © {new Date().getFullYear()} {site.fullName}. {f.rights}
          </span>
          <span>{site.tagline}</span>
        </div>
        <p className="mx-auto mt-3 max-w-[1480px] text-[11px] text-ink-3/70">{f.credits}</p>
      </div>
    </footer>
  );
}
