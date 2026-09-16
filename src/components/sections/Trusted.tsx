"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLang } from "@/components/providers/LanguageProvider";

type Logo =
  | { kind: "image"; name: string; src: string; width: number; height: number; h: number }
  | { kind: "text"; name: string; text: string; sub?: string };

/* Images are official marks from Wikimedia Commons (public domain). Clients without a
   redistributable logo file are shown as a typographic wordmark. */
const logos: Logo[] = [
  { kind: "image", name: "MTN Nigeria", src: "/logos/mtn-color.svg", width: 200, height: 200, h: 64 },
  { kind: "text", name: "Hellas Sat", text: "HELLAS SAT" },
  { kind: "image", name: "Aeronáutica Civil de Colombia", src: "/logos/aerocivil.png", width: 309, height: 323, h: 60 },
  { kind: "text", name: "OMANSAT", text: "OMANSAT", sub: "Space Communication Technology" },
  { kind: "image", name: "Exército Brasileiro", src: "/logos/exercito-brasileiro.png", width: 139, height: 240, h: 64 },
];

const ease = [0.22, 1, 0.36, 1] as const;

function LogoItem({ logo }: { logo: Logo }) {
  if (logo.kind === "image") {
    return (
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        style={{ height: logo.h, width: "auto" }}
        className="max-w-none"
      />
    );
  }
  return (
    <span className="flex flex-col items-center leading-none">
      <span className="text-[26px] font-semibold tracking-[0.12em] text-ink">{logo.text}</span>
      {logo.sub && <span className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-ink-3">{logo.sub}</span>}
    </span>
  );
}

export default function Trusted() {
  const { t } = useLang();
  // Two identical tracks side by side: when the first one has scrolled out, the loop is seamless.
  const track = [...logos, ...logos];

  return (
    <section id="confiance" aria-label={t.trusted.title} className="w-full border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1880px] px-6 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <motion.h2
          className="section-title mx-auto max-w-[1480px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          {t.trusted.title}
        </motion.h2>
      </div>

      <div className="logo-marquee relative w-full overflow-hidden border-y border-line py-10 md:py-12">
        <div className="logo-track flex w-max items-center">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              aria-hidden={i >= logos.length}
              className="logo-item flex h-20 shrink-0 items-center justify-center px-14 md:px-20"
              title={logo.name}
            >
              <LogoItem logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
