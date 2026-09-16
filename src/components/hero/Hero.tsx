"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useLang } from "@/components/providers/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

/** Time the light "greenplanet" panel stays on screen before the videos take over. */
const INTRO_MS = 2600;
/** Cross-fade between the two clips. */
const FADE_S = 1.4;

const clips = [
  {
    id: "satellite",
    mp4: "/video/satellite-4k.mp4",
    poster: "/video/satellite-poster.jpg",
    label: "satellite" as const,
  },
  {
    id: "drone",
    mp4: "/video/drone-4k.mp4",
    poster: "/video/drone-poster.jpg",
    label: "drone" as const,
  },
];

export default function Hero() {
  const { t } = useLang();
  const [phase, setPhase] = useState<"intro" | "video">("intro");
  const [active, setActive] = useState(0);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  // 1. Intro panel, then reveal the videos.
  useEffect(() => {
    const id = setTimeout(() => setPhase("video"), INTRO_MS);
    return () => clearTimeout(id);
  }, []);

  // 2. Play the active clip from the start, pause the other one, and schedule the
  //    cross-fade to the next clip just before this one ends.
  useEffect(() => {
    if (phase !== "video") return;
    const current = videos.current[active];
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
    const seconds = current && Number.isFinite(current.duration) && current.duration > 0 ? current.duration : 9;
    const id = setTimeout(() => setActive((a) => (a + 1) % clips.length), Math.max(1, seconds - FADE_S) * 1000);
    return () => clearTimeout(id);
  }, [phase, active]);

  const showVideo = phase === "video";

  return (
    <section className="mx-auto w-full max-w-[1880px] px-6 md:px-8">
      {/* Visual panel */}
      <motion.div
        className="relative h-[62vh] min-h-[460px] overflow-hidden rounded-md bg-gp-green-deep md:h-[calc(100vh-215px)] md:min-h-[560px]"
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease }}
      >
        {/* Video layers (always mounted so the switch is instant) */}
        {clips.map((c, i) => (
          <motion.div
            key={c.id}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: showVideo && i === active ? 1 : 0, scale: showVideo && i === active ? 1 : 1.06 }}
            transition={{ opacity: { duration: FADE_S, ease: "easeInOut" }, scale: { duration: 9, ease: "linear" } }}
            style={{ zIndex: i === active ? 2 : 1 }}
          >
            <video
              ref={(el) => {
                videos.current[i] = el;
              }}
              className="h-full w-full object-cover"
              muted
              playsInline
              preload="auto"
              poster={c.poster}
              aria-label={t.hero[c.label]}
            >
              <source src={c.mp4} type="video/mp4" />
            </video>
          </motion.div>
        ))}

        {/* Soft darkening so the watermark stays readable over the footage */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-gp-green-deep/55 via-transparent to-gp-green-deep/20"
          initial={false}
          animate={{ opacity: showVideo ? 1 : 0 }}
          transition={{ duration: 1.2, ease }}
        />

        {/* Intro panel: light gradient + grid, wiped away from the top when the videos start */}
        <motion.div
          className="absolute inset-0 z-[4] bg-gradient-to-b from-[#e9f0ef] via-[#f3f7f6] to-paper"
          initial={false}
          animate={{ clipPath: showVideo ? "inset(100% 0 0 0)" : "inset(0 0 0 0)" }}
          transition={{ duration: 1.3, ease }}
        >
          <div className="grid-bg absolute inset-0" />
        </motion.div>

        {/* Watermark: embossed on the light panel, then white over the footage */}
        <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center overflow-hidden px-6">
          <motion.div
            className="watermark flex flex-col items-center"
            initial={false}
            animate={
              showVideo
                ? { color: "rgba(255,255,255,0.94)", textShadow: "0 8px 40px rgba(0,0,0,0.35)" }
                : { color: "rgba(255,255,255,0.92)", textShadow: "0 1px 0 rgba(255,255,255,0.9), 0 18px 40px rgba(8,80,85,0.08)" }
            }
            transition={{ duration: 1.3, ease }}
          >
            {/* Line 1: light, tight display */}
            <span className="watermark-name text-[clamp(52px,10.5vw,196px)]">
              Green<span className="watermark-thin"> Planet</span>
            </span>

            {/* Line 2: spaced small caps between two hairlines */}
            <span className="watermark-sub mt-[0.35em] flex items-center gap-[1.2em] text-[clamp(11px,1.35vw,24px)]">
              <motion.span
                className="h-px w-[3.5em] origin-right"
                style={{ background: "currentColor", opacity: 0.55 }}
                initial={false}
                animate={{ scaleX: showVideo ? 1 : 0.7 }}
                transition={{ duration: 1.3, ease }}
              />
              <span className="flex items-center gap-[0.8em]">
                <span className="inline-block h-[0.42em] w-[0.42em] rounded-full bg-gp-yellow" />
                Technology
              </span>
              <motion.span
                className="h-px w-[3.5em] origin-left"
                style={{ background: "currentColor", opacity: 0.55 }}
                initial={false}
                animate={{ scaleX: showVideo ? 1 : 0.7 }}
                transition={{ duration: 1.3, ease }}
              />
            </span>
          </motion.div>
        </div>

        {/* corner markers */}
        <span className={`corner corner-tl z-[6] transition-colors duration-1000 ${showVideo ? "!border-white/60" : ""}`} />
        <span className={`corner corner-tr z-[6] transition-colors duration-1000 ${showVideo ? "!border-white/60" : ""}`} />
        <span className={`corner corner-bl z-[6] transition-colors duration-1000 ${showVideo ? "!border-white/60" : ""}`} />
        <span className={`corner corner-br z-[6] transition-colors duration-1000 ${showVideo ? "!border-white/60" : ""}`} />
      </motion.div>

      {/* Headline row */}
      <div className="pb-10 pt-7">
        <motion.h1
          className="text-[clamp(26px,3.1vw,44px)] font-light leading-[1.12] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
        >
          <span className="block text-ink">{t.hero.line1}</span>
          <span className="block text-ink-2">{t.hero.line2}</span>
        </motion.h1>
      </div>
    </section>
  );
}
