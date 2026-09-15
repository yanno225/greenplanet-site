"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 mx-auto flex w-full max-w-[1880px] items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/mark.png"
            alt="GreenPlanet"
            width={36}
            height={30}
            priority
            style={{ height: 30, width: "auto" }}
          />
          <span className="text-[17px] font-semibold tracking-tight text-ink">{site.name}</span>
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="rounded-sm bg-paper-2 px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:bg-gp-green-soft"
        >
          menu
        </button>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
