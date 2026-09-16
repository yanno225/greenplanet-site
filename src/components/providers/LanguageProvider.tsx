"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { DEFAULT_LANG, dict, type Dict, type Lang } from "@/lib/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx>({ lang: DEFAULT_LANG, setLang: () => {}, t: dict[DEFAULT_LANG] });

const STORAGE_KEY = "gp-lang";

/* Tiny external store: the server always renders French; the client snapshot
   restores the visitor's choice (or browser language) right after hydration. */
const listeners = new Set<() => void>();
let current: Lang | null = null;

function readClient(): Lang {
  if (current) return current;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "fr" || v === "en") return (current = v);
  } catch {
    /* storage unavailable */
  }
  return (current = navigator.language.toLowerCase().startsWith("en") ? "en" : "fr");
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function setLang(l: Lang) {
  current = l;
  try {
    window.localStorage.setItem(STORAGE_KEY, l);
  } catch {
    /* private mode: ignore */
  }
  listeners.forEach((cb) => cb());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readClient, () => DEFAULT_LANG);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dict[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
