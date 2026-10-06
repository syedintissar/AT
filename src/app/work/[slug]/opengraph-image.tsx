import { PROJECTS } from "@/data/projects";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Alhawaij Tech studio concept";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  return renderOgImage({ eyebrow: `Studio concept · ${project?.category ?? "Work"}`, title: project?.title ?? "Our work", subtitle: project?.description });
}
