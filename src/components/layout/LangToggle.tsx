"use client";

import { motion } from "motion/react";
import { LANGS, type Lang } from "@/lib/i18n";
import { useLang } from "@/components/providers/LanguageProvider";

/* Round flag icons, inline SVG (no network request). */
function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden>
      <clipPath id="gb-clip">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#gb-clip)">
        <rect width="60" height="60" fill="#012169" />
        <path d="M0 0l60 60M60 0L0 60" stroke="#fff" strokeWidth="12" />
        <path d="M0 0l60 60M60 0L0 60" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v60M0 30h60" stroke="#fff" strokeWidth="20" />
        <path d="M30 0v60M0 30h60" stroke="#C8102E" strokeWidth="12" />
      </g>
    </svg>
  );
}

function FlagFR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden>
      <clipPath id="fr-clip">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#fr-clip)">
        <rect width="20" height="60" fill="#0055A4" />
        <rect x="20" width="20" height="60" fill="#fff" />
        <rect x="40" width="20" height="60" fill="#EF4135" />
      </g>
    </svg>
  );
}

const meta: Record<Lang, { label: string; name: string; Flag: typeof FlagFR }> = {
  fr: { label: "FR", name: "Français", Flag: FlagFR },
  en: { label: "EN", name: "English", Flag: FlagGB },
};

export default function LangToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.header.langLabel}
      className="relative flex items-center rounded-full border border-line bg-paper-2 p-1 shadow-[inset_0_1px_2px_rgba(8,80,85,0.06)]"
    >
      {LANGS.map((l) => {
        const active = l === lang;
        const { label, name, Flag } = meta[l];
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            aria-label={name}
            className="relative flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-[13px] font-semibold tracking-wide outline-none"
          >
            {active && (
              <motion.span
                layoutId="lang-thumb"
                className="absolute inset-0 rounded-full bg-paper shadow-[0_2px_10px_rgba(8,80,85,0.16),0_0_0_1px_rgba(8,80,85,0.06)]"
                transition={{ type: "spring", stiffness: 520, damping: 38 }}
              />
            )}
            <span
              className={`relative block h-[22px] w-[22px] overflow-hidden rounded-full ring-1 ring-black/10 transition-opacity duration-300 ${
                active ? "opacity-100" : "opacity-45"
              }`}
            >
              <Flag className="h-full w-full" />
            </span>
            <span className={`relative transition-colors duration-300 ${active ? "text-ink" : "text-ink-3"}`}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
