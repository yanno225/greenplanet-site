"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import { useLang } from "@/components/providers/LanguageProvider";

const prose =
  "mt-10 max-w-[70ch] text-[16px] leading-relaxed text-ink-2 [&_h2]:mt-10 [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:text-ink";

export function LegalNoticeView() {
  const { t } = useLang();
  const l = t.legal;
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1880px] px-6 pb-24 pt-10 md:px-8">
        <h1 className="section-title">{l.title}</h1>
        <div className={prose}>
          <h2>{l.publisher}</h2>
          <p>
            {site.fullName}
            <br />
            {site.offices[0].lines.join(", ")}, {t.footer.hqCity}
            <br />
            {site.offices[1].lines.join(", ")}, {t.footer.montrealCity}
            <br />
            {l.emailLabel} : {site.email}
          </p>
          <p className="mt-4 text-ink-3">{l.publisherTodo}</p>
          <h2>{l.hosting}</h2>
          <p className="text-ink-3">{l.hostingTodo}</p>
          <h2>{l.ip}</h2>
          <p>{l.ipText}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function PrivacyView() {
  const { t } = useLang();
  const p = t.privacy;
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1880px] px-6 pb-24 pt-10 md:px-8">
        <h1 className="section-title">{p.title}</h1>
        <div className={prose}>
          <h2>{p.collected}</h2>
          <p>{p.collectedText}</p>
          <h2>{p.retention}</h2>
          <p>{p.retentionText}</p>
          <h2>{p.rights}</h2>
          <p>
            {p.rightsText} {site.email}.
          </p>
          <h2>{p.cookies}</h2>
          <p>{p.cookiesText}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
