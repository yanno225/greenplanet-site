import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Green Planet Technology",
};

export default function Confidentialite() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1880px] px-6 pb-24 pt-10 md:px-8">
        <h1 className="section-title">Politique de confidentialité</h1>
        <div className="mt-10 max-w-[70ch] text-[16px] leading-relaxed text-ink-2 [&_h2]:mt-10 [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:text-ink">
          <h2>Données collectées</h2>
          <p>
            Le formulaire de contact recueille votre nom, votre entreprise, votre adresse email, le service qui vous
            intéresse et votre message. Ces informations servent uniquement à traiter votre demande et à y répondre.
          </p>
          <h2>Conservation et partage</h2>
          <p>
            Vos données ne sont ni vendues ni cédées à des tiers. Elles sont conservées le temps nécessaire au
            traitement de votre demande et aux échanges commerciaux qui peuvent en découler.
          </p>
          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données à tout moment en
            écrivant à {site.email}.
          </p>
          <h2>Cookies</h2>
          <p>Ce site n&apos;utilise pas de cookies de suivi publicitaire.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
