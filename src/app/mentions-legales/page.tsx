import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales — GreenPlanet Technology",
};

export default function MentionsLegales() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1880px] px-6 pb-24 pt-10 md:px-8">
        <h1 className="section-title">Mentions légales</h1>
        <div className="mt-10 max-w-[70ch] text-[16px] leading-relaxed text-ink-2 [&_h2]:mt-10 [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:text-ink">
          <h2>Éditeur du site</h2>
          <p>
            {site.fullName}
            <br />
            {site.offices[0].lines.join(", ")}, {site.offices[0].city}
            <br />
            {site.offices[1].lines.join(", ")}, {site.offices[1].city}
            <br />
            Email : {site.email}
          </p>
          <p className="mt-4 text-ink-3">
            À compléter : forme juridique, capital, numéro d&apos;immatriculation, directeur de la publication.
          </p>
          <h2>Hébergement</h2>
          <p className="text-ink-3">À compléter : nom et adresse de l&apos;hébergeur.</p>
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, images, logos) est la propriété de {site.fullName} ou de
            leurs auteurs respectifs et ne peut être reproduit sans autorisation. Les crédits des images tierces
            figurent en pied de page.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
