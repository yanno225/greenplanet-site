"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/components/providers/LanguageProvider";

const sectorMedia = [
  { id: "energie", image: "/images/sectors-energie.jpg" },
  { id: "mines", image: "/images/sectors-mines.jpg" },
  { id: "agriculture", image: "/images/sectors-agriculture.jpg" },
  { id: "btp", image: "/images/sectors-btp.jpg" },
  { id: "environnement", image: "/images/sectors-environnement.jpg" },
  { id: "telecoms", image: "/images/sectors-telecoms.jpg" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Sectors() {
  const { t } = useLang();
  const sectors = sectorMedia.map((m, i) => ({ ...m, ...t.sectors.items[i] }));
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const current = sectors[active];

  const select = (i: number) => {
    if (i === active) return;
    setPrev(active);
    setActive(i);
  };

  return (
    <section id="secteurs" className="w-full border-t border-line bg-paper-2">
      <div className="mx-auto w-full max-w-[1880px] px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1480px]">
        <motion.div
          className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="section-title">{t.sectors.title}</h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-2">
            {t.sectors.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          {/* Left: sector list */}
          <ul className="relative z-10 flex flex-col justify-center gap-1 lg:pr-0">
            {sectors.map((s, i) => {
              const isActive = i === active;
              return (
                <li
                  key={s.id}
                  onMouseEnter={() => select(i)}
                  onFocus={() => select(i)}
                  tabIndex={0}
                  className="relative cursor-default outline-none"
                >
                  {isActive && (
                    <motion.span
                      layoutId="sector-active"
                      className="sector-tab absolute inset-0 rounded-2xl bg-gp-green-soft lg:-mr-3 lg:rounded-r-none"
                      transition={{ type: "spring", stiffness: 380, damping: 38 }}
                    />
                  )}
                  <div className="relative px-7 py-5 lg:pr-10">
                    <h3
                      className={`text-[24px] font-semibold tracking-tight transition-colors duration-300 md:text-[26px] ${
                        isActive ? "text-ink" : "text-ink/85"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          key="text"
                          className="overflow-hidden text-[14.5px] leading-relaxed text-ink-2"
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 10 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.45, ease }}
                        >
                          {s.text}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right: image frame */}
          <div className="relative rounded-[28px] bg-gp-green-soft p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-paper-2">
              {/* All images stay mounted (no load delay on hover). The new one fades in on top
                  of the previous one, which stays fully visible underneath: no flash. */}
              {sectors.map((s, i) => {
                const isCurrent = i === active;
                const isPrev = i === prev;
                return (
                  <motion.div
                    key={s.id}
                    className="absolute inset-0"
                    style={{ zIndex: isCurrent ? 2 : isPrev ? 1 : 0 }}
                    initial={false}
                    animate={{ opacity: isCurrent || isPrev ? 1 : 0, scale: isCurrent ? 1 : 1.04 }}
                    transition={{ opacity: { duration: 0.6, ease }, scale: { duration: 1.1, ease } }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={1400}
                      height={875}
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </motion.div>
                );
              })}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-1/3 bg-gradient-to-t from-gp-green-deep/30 to-transparent" />
              <div className="absolute bottom-5 left-6 z-[4] flex items-center gap-3 text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-gp-yellow" />
                <span className="text-[13px] font-medium tracking-wide">{current.title}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
