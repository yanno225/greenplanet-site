import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectView from "@/components/projects/ProjectView";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.fr.heading} — Réalisations Green Planet Technology`,
    description: project.fr.intro,
  };
}

export default async function ProjectPage(props: PageProps<"/realisations/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return <ProjectView project={project} prev={prev} next={next} />;
}
