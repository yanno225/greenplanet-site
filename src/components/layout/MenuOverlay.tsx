"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";
import { useLang } from "@/components/providers/LanguageProvider";

type Props = { open: boolean; onClose: () => void };

export default function MenuOverlay({ open, onClose }: Props) {
  const { t } = useLang();
  const nav = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.sectors, href: "/#secteurs" },
    { label: t.nav.projects, href: "/#realisations" },
    { label: t.nav.trusted, href: "/#confiance" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label={t.header.close}
            className="fixed inset-0 z-40 bg-ink/10 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 top-0 z-50 bg-paper shadow-[0_30px_80px_-30px_rgba(8,80,85,0.25)]"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
          >
            <div className="mx-auto flex max-w-[1880px] items-stretch justify-between gap-6 px-6 pb-8 pt-3 md:px-8">
              <div className="hidden flex-col justify-between py-2 md:flex">
                <div className="flex items-center gap-3 text-[13px] text-ink-2">
                  <Image src="/brand/mark.png" alt="" width={30} height={25} style={{ height: 25, width: "auto" }} />
                  <span className="font-semibold text-ink">{site.fullName}</span>
                  <span className="h-1 w-1 rounded-sm bg-ink-3" />
                  <span>{site.tagline}</span>
                </div>
                <div className="max-w-xs text-[13px] leading-relaxed text-ink-3">{t.menu.description}</div>
              </div>

              <div className="flex items-stretch gap-8 md:gap-14">
                <button
                  onClick={onClose}
                  className="flex w-20 items-center justify-center bg-paper-2 text-[15px] font-medium text-ink transition-colors hover:bg-gp-green-soft"
                >
                  {t.header.close}
                </button>
                <nav className="flex flex-col items-end justify-center gap-1 py-2">
                  {nav.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center gap-3 text-[22px] font-medium leading-tight text-ink md:text-[24px]"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{ delay: 0.06 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gp-yellow opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="transition-colors group-hover:text-gp-green">{item.label}</span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
