import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.heading} — Réalisations GreenPlanet Technology`,
    description: project.intro,
  };
}

export default async function ProjectPage(props: PageProps<"/realisations/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="flex flex-1 flex-col">
      <Header />

      {/* Hero */}
      <section className="mx-auto w-full max-w-[1880px] px-6 pb-10 pt-6 md:px-8 md:pb-16 md:pt-10">
        <Link
          href="/#realisations"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-2 transition-colors hover:text-gp-green"
        >
          <span aria-hidden>←</span> Toutes les réalisations
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,46%)] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-[14px] font-medium tracking-wide text-ink-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gp-yellow" />
              <span>
                {project.client} · {project.place}
              </span>
            </div>
            <h1 className="section-title mt-6 max-w-[16ch]">{project.heading}</h1>
            <p className="mt-8 max-w-[60ch] text-[18px] leading-relaxed text-ink-2">{project.intro}</p>
          </div>

          <div className="rounded-[28px] bg-gp-green-soft p-3">
            <Image
              src={project.image}
              alt={`${project.client}, ${project.place}`}
              width={1400}
              height={1120}
              sizes="(min-width: 1024px) 46vw, 100vw"
              priority
              className="aspect-[5/4] w-full rounded-[18px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="w-full border-t border-line bg-paper-2">
        <div className="mx-auto grid w-full max-w-[1880px] grid-cols-1 gap-px px-6 py-10 sm:grid-cols-3 md:px-8 md:py-14">
          {project.facts.map((f) => (
            <div key={f.label} className="py-4 sm:px-6 sm:first:pl-0">
              <div className="text-[13px] uppercase tracking-[0.16em] text-ink-3">{f.label}</div>
              <div className="mt-2 text-[clamp(28px,2.6vw,40px)] font-light leading-none tracking-[-0.02em] text-gp-green">
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="w-full border-t border-line">
        <div className="mx-auto grid w-full max-w-[1880px] gap-14 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 className="text-[clamp(26px,2.6vw,38px)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
              La solution déployée
            </h2>
            <ul className="mt-8 flex flex-col gap-5">
              {project.points.map((pt, i) => (
                <li key={i} className="flex gap-4 text-[16px] leading-relaxed text-ink-2">
                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-gp-green" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.delivered.length > 0 && (
            <div className="lg:pt-1">
              <div className="rounded-[24px] bg-gp-green p-8 text-white md:p-10">
                <h2 className="text-[clamp(22px,2vw,28px)] font-medium leading-tight tracking-tight">
                  Services fournis par GreenPlanet
                </h2>
                <ul className="mt-7 flex flex-col gap-4">
                  {project.delivered.map((d) => (
                    <li key={d} className="flex items-start gap-4 text-[15.5px] leading-relaxed text-white/90">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gp-yellow" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Prev / next */}
      <section className="w-full border-t border-line bg-paper-2">
        <div className="mx-auto grid w-full max-w-[1880px] gap-6 px-6 py-10 md:grid-cols-2 md:px-8 md:py-14">
          <Link href={`/realisations/${prev.slug}`} className="group flex flex-col gap-2">
            <span className="text-[13px] uppercase tracking-[0.16em] text-ink-3">Réalisation précédente</span>
            <span className="text-[clamp(20px,1.8vw,26px)] font-medium tracking-tight text-ink transition-colors group-hover:text-gp-green">
              <span aria-hidden>← </span>
              {prev.heading}
            </span>
          </Link>
          <Link href={`/realisations/${next.slug}`} className="group flex flex-col gap-2 md:items-end md:text-right">
            <span className="text-[13px] uppercase tracking-[0.16em] text-ink-3">Réalisation suivante</span>
            <span className="text-[clamp(20px,1.8vw,26px)] font-medium tracking-tight text-ink transition-colors group-hover:text-gp-green">
              {next.heading}
              <span aria-hidden> →</span>
            </span>
          </Link>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
