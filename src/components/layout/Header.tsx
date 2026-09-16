"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import LangToggle from "./LangToggle";
import { useLang } from "@/components/providers/LanguageProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  return (
    <>
      <header className="relative z-30 mx-auto flex w-full max-w-[1880px] items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/mark.png" alt="" width={36} height={30} priority style={{ height: 34, width: "auto" }} />
          <span className="flex flex-col leading-none">
            <span className="text-[17px] font-bold tracking-tight text-ink">Green Planet</span>
            <span className="text-[13px] font-normal tracking-wide text-ink-2">Technology</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            onClick={() => setOpen(true)}
            className="rounded-sm bg-paper-2 px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:bg-gp-green-soft"
          >
            {t.header.menu}
          </button>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
