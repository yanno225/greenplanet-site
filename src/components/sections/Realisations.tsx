"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { projects } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;
const N = projects.length;

/* Arc geometry (desktop): circles sit on a circle of radius R whose rightmost point
   is the active slot. Earlier projects go below, later ones above. */
const R = 640;
const STEP = 0.3; // radians between two slots
const pad = (n: number) => String(n).padStart(2, "0");

export default function Realisations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
    setActive((prev) => (prev === i ? prev : i));
  });
  const current = projects[active];

  return (
    <section id="realisations" className="w-full border-t border-line">
      {/* ---------- Desktop: scroll-driven ---------- */}
      <div ref={sectionRef} className="relative hidden lg:block" style={{ height: `calc(${N} * 70vh + 100vh)` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="mx-auto grid h-full w-full max-w-[1880px] grid-cols-[360px_minmax(0,1fr)_minmax(0,44%)] grid-rows-[auto_minmax(0,1fr)_auto] gap-x-10 px-8">
            {/* Arc timeline (spans the full height) */}
            <div className="relative row-span-3 h-full">
              <svg className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
                <circle cx={240 - R} cy="50%" r={R} fill="none" stroke="var(--line)" strokeWidth="1.5" />
              </svg>
              {projects.map((p, i) => {
                const d = i - active;
                const theta = d * STEP;
                const x = R * (Math.cos(theta) - 1);
                const y = -R * Math.sin(theta);
                const isActive = d === 0;
                const dist = Math.abs(d);
                return (
                  <div key={p.slug} className="absolute left-[240px] top-1/2 -ml-11 -mt-11 h-22 w-22">
                    <motion.button
                      type="button"
                      aria-label={`Réalisation ${pad(i + 1)}`}
                      onClick={() => {
                        const el = sectionRef.current;
                        if (!el) return;
                        const top = el.getBoundingClientRect().top + window.scrollY;
                        const span = el.offsetHeight - window.innerHeight;
                        window.scrollTo({ top: top + (span * (i + 0.5)) / N, behavior: "smooth" });
                      }}
                      className={`grid h-22 w-22 place-items-center rounded-full border text-[22px] font-medium tracking-tight transition-colors duration-500 ${
                        isActive ? "border-gp-green bg-gp-green text-gp-yellow" : "border-ink/20 bg-paper text-ink"
                      }`}
                      animate={{ x, y, scale: isActive ? 1.12 : 0.92, opacity: dist >= 3 ? 0 : dist === 2 ? 0.45 : 1 }}
                      transition={{ type: "spring", stiffness: 170, damping: 26, mass: 0.9 }}
                    >
                      {pad(i + 1)}
                    </motion.button>
                  </div>
                );
              })}
            </div>

            {/* Header (text + image columns only, so the arc never overlaps it) */}
            <div className="col-span-2 flex flex-wrap items-end justify-between gap-x-10 gap-y-2 pt-5">
              <h2 className="section-title">
                Nos réalisations
              </h2>
              <p className="hidden max-w-md text-[15px] leading-relaxed text-ink-2 xl:block">
                Des réseaux critiques déployés et opérés pour des gouvernements, des armées et des opérateurs.
              </p>
            </div>

            {/* Text */}
            <div className="relative self-center py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <div className="flex items-center gap-3 text-[14px] font-medium tracking-wide text-ink-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gp-yellow" />
                    <span>
                      {current.client} · {current.place}
                    </span>
                  </div>
                  <h3 className="mt-6 max-w-[14ch] text-[clamp(34px,3.6vw,58px)] font-light leading-[1.05] tracking-[-0.025em] text-ink">
                    <Link href={`/realisations/${current.slug}`} className="transition-colors hover:text-gp-green">
                      {current.title}
                    </Link>
                  </h3>
                  <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-ink-2">{current.text}</p>
                  <Link
                    href={`/realisations/${current.slug}`}
                    className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gp-green px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-gp-green-deep"
                  >
                    Voir le projet
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image: height capped so it never reaches the title on short screens */}
            <Link
              href={`/realisations/${current.slug}`}
              aria-label={`Voir le projet ${current.client}`}
              className="relative block w-full self-center justify-self-end rounded-[28px] bg-gp-green-soft p-3 transition-colors hover:bg-gp-green/15"
            >
              <div className="relative aspect-[5/4] max-h-[calc(100vh-270px)] w-full overflow-hidden rounded-[18px] bg-paper-2">
                {projects.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    className="absolute inset-0"
                    style={{ zIndex: i === active ? 2 : 0 }}
                    initial={false}
                    animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.05 }}
                    transition={{ opacity: { duration: 0.55, ease }, scale: { duration: 1.2, ease } }}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.client}, ${p.place}`}
                      width={1400}
                      height={1120}
                      sizes="44vw"
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </motion.div>
                ))}
              </div>
            </Link>

            <div className="col-span-2 h-10" />
          </div>
        </div>
      </div>

      {/* ---------- Mobile / tablet: stacked ---------- */}
      <div className="mx-auto w-full max-w-[1880px] px-6 py-20 lg:hidden">
        <h2 className="section-title">Nos réalisations</h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-2">
          Des réseaux critiques déployés et opérés pour des gouvernements, des armées et des opérateurs.
        </p>
        <div className="mt-10 flex flex-col gap-10">
          {projects.map((p) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
            >
              <Link href={`/realisations/${p.slug}`} className="block rounded-[22px] bg-gp-green-soft p-2.5">
                <Image
                  src={p.image}
                  alt={`${p.client}, ${p.place}`}
                  width={1400}
                  height={1120}
                  sizes="100vw"
                  className="aspect-[5/4] w-full rounded-[14px] object-cover"
                />
              </Link>
              <div className="mt-5 flex items-center gap-3 text-[13px] font-medium tracking-wide text-ink-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gp-yellow" />
                <span>
                  {p.client} · {p.place}
                </span>
              </div>
              <h3 className="mt-3 text-[28px] font-light leading-[1.1] tracking-[-0.02em] text-ink">
                <Link href={`/realisations/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{p.text}</p>
              <Link
                href={`/realisations/${p.slug}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gp-green px-5 py-2.5 text-[14px] font-medium text-white"
              >
                Voir le projet <span aria-hidden>→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
