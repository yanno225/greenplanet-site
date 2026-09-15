"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const services = [
  {
    index: "01",
    title: "Services par drone",
    text: "Inspections aériennes, relevés LiDAR et photogrammétrie réalisés par nos pilotes certifiés, sur vos sites et infrastructures.",
    slide: 0,
  },
  {
    index: "02",
    title: "Services satellitaires",
    text: "Imagerie et analyses satellitaires pour suivre vos territoires, cultures et actifs à grande échelle, en continu.",
    slide: 1,
  },
  {
    index: "03",
    title: "Solutions de monitoring",
    text: "Plateformes de supervision temps réel : capteurs, alertes intelligentes et tableaux de bord opérés pour vous.",
    slide: null,
  },
  {
    index: "04",
    title: "Données exploitables",
    text: "De la mission au rapport : nos équipes livrent des données fiables, des analyses claires et des recommandations.",
    slide: null,
  },
];

const slides = [
  { src: "/images/services-drone.jpg", alt: "Drone d'inspection en vol au-dessus d'une forêt" },
  { src: "/images/services-satellite-nisar.jpg", alt: "Satellite d'observation en orbite au-dessus de la Terre" },
];

const SLIDE_MS = 5000;
const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);

  // Auto-advance every 5 s; the timer restarts whenever the slide changes (hover or auto).
  useEffect(() => {
    const id = setTimeout(() => setSlide((s) => (s + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [slide]);

  const activate = (i: number) => {
    setActive(i);
    const target = services[i].slide;
    if (target !== null) setSlide(target);
  };

  return (
    <section id="services" className="w-full border-t border-line">
      <div className="mx-auto w-full max-w-[1880px] px-6 py-20 md:px-8 md:py-32">
      <motion.div
        className="mx-auto mb-10 flex max-w-[1480px] flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        <h2 className="section-title">
          Nos services
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-2">
          Nous opérons les missions, traitons les données et livrons des résultats prêts à l&apos;emploi.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2.1fr)] lg:gap-10">
        {services.map((s, i) => {
          const isActive = i === active;
          return (
            <motion.article
              key={s.index}
              onMouseEnter={() => activate(i)}
              onFocus={() => activate(i)}
              tabIndex={0}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className={`group flex cursor-default flex-col rounded-sm p-6 outline-none transition-colors duration-300 md:p-7 ${
                isActive ? "bg-gp-green text-white" : "bg-paper-2 text-ink"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-[26px] font-medium leading-none transition-colors duration-300 ${
                    isActive ? "text-gp-yellow" : "text-gp-green"
                  }`}
                >
                  {s.index}
                </span>
                <span
                  className={`h-px w-20 transition-colors duration-300 ${isActive ? "bg-gp-yellow" : "bg-gp-green"}`}
                />
              </div>
              <h3 className="mt-10 text-[26px] font-medium leading-tight tracking-tight md:text-[28px]">{s.title}</h3>
              <p
                className={`mt-4 text-[15.5px] leading-relaxed transition-colors duration-300 ${
                  isActive ? "text-white/85" : "text-ink-2"
                }`}
              >
                {s.text}
              </p>
            </motion.article>
          );
        })}

        {/* Horizontal slideshow */}
        <motion.figure
          className="relative aspect-[6/5] w-full overflow-hidden rounded-sm bg-paper-2 lg:col-start-3 lg:row-span-2 lg:row-start-1"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          aria-roledescription="carrousel"
        >
          <motion.div
            className="absolute inset-0 flex"
            animate={{ x: `${-slide * 100}%` }}
            transition={{ duration: 0.9, ease }}
          >
            {slides.map((img, i) => (
              <div key={img.src} className="relative h-full w-full shrink-0" aria-hidden={i !== slide}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={1000}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </motion.div>

          {/* progress indicators */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Image ${i + 1}`}
                onClick={() => setSlide(i)}
                className="relative h-[3px] w-10 overflow-hidden rounded-full bg-white/40"
              >
                {i === slide && (
                  <motion.span
                    key={`bar-${slide}`}
                    className="absolute inset-y-0 left-0 bg-gp-yellow"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.figure>
      </div>
      </div>
    </section>
  );
}
