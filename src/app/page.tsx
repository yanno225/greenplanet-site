import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Sectors from "@/components/sections/Sectors";
import Realisations from "@/components/sections/Realisations";
import Stats from "@/components/sections/Stats";
import Trusted from "@/components/sections/Trusted";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <Hero />

      <Services />
      <Sectors />
      <Realisations />
      <Stats />
      <Trusted />
      <Contact />

      <Footer />
    </main>
  );
}
