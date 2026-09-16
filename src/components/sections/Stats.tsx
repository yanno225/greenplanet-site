"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { useLang } from "@/components/providers/LanguageProvider";

type Stat = { value: number; prefix?: string; suffix?: string; label: string };

const DURATION = 2.2;
const ease = [0.22, 1, 0.36, 1] as const;

function Counter({ value, prefix, suffix, start }: Stat & { start: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, value, {
      duration: DURATION,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, value]);

  return (
    <span className="inline-flex items-start leading-none">
      {prefix && <span className="mr-1 text-[0.55em] font-medium">{prefix}</span>}
      <span className="tabular-nums">{n}</span>
      {suffix && <span className="ml-2 mt-[0.08em] text-[0.5em] font-medium text-gp-yellow-deep">{suffix}</span>}
    </span>
  );
}

export default function Stats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const stats: Stat[] = [
    { value: 100, suffix: "+", label: t.stats.clients },
    { value: 100, suffix: "+", label: t.stats.projects },
    { value: 90, suffix: "%", label: t.stats.satisfaction },
  ];

  return (
    <section id="chiffres" className="w-full bg-paper">
      <div ref={ref} className="mx-auto w-full max-w-[1880px] px-6 pb-28 pt-8 md:px-8 md:pb-40 md:pt-12">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: i * 0.12, ease }}
            >
              <div className="text-[clamp(64px,7.5vw,120px)] font-semibold tracking-[-0.04em] text-gp-green">
                <Counter {...s} start={inView} />
              </div>
              <div className="mt-5 text-[17px] font-medium text-ink-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
