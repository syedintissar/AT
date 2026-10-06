import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

export function generateStaticParams() {
  return PROJECTS.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find(item => item.slug === slug);
  return { title: project ? `${project.title} — Studio Concept | Al-Hawaij Tech` : "Project not found | Al-Hawaij Tech", description: project?.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find(item => item.slug === slug);
  if (!project) notFound();
  const nextProject = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

  return (
    <>
      <section className="site-container pb-12 pt-20 md:pt-24">
        <Link href="/work" className="text-link mb-10 inline-flex items-center gap-2 text-sm"><ArrowLeft size={16} /> All work</Link>
        <Reveal><div className="mb-7 flex flex-wrap items-center gap-3"><span className="eyebrow">{project.category}</span><span className="rounded-full border border-[#e8e7e4] px-3 py-1 text-xs text-[#6b6d7b]">Independent studio concept</span></div><h1 className="text-[clamp(4rem,10vw,8rem)] font-medium leading-none tracking-[-0.06em] text-[#171a3b]">{project.title}<span className="text-[#bd0a2f]">.</span></h1><p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#6b6d7b] md:text-2xl">{project.description}</p><div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-[#e8e7e4] pt-6 text-xs text-[#6b6d7b]"><span>{project.discipline}</span><span>Concept exploration · Al-Hawaij Tech</span></div></Reveal>
      </section>
      <div className="site-container"><Reveal><div className="group mx-auto max-w-5xl"><ProjectVisual variant={project.variant} compact /></div></Reveal><p className="mt-4 text-center text-xs leading-relaxed text-[#6b6d7b]">Visual exploration. All names, interface data, and product screens are illustrative.</p></div>
      <section className="site-container section-space">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><h2 className="eyebrow">THE IDEA</h2><div className="max-w-2xl"><p className="text-2xl leading-relaxed tracking-tight text-[#171a3b] md:text-3xl">{project.overview}</p><div className="mt-10 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="pill">{item}</span>)}</div></div></div>
        <div className="my-16 h-px bg-[#e8e7e4]" />
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><h2 className="eyebrow">THE DESIGN QUESTION</h2><p className="body-copy max-w-2xl">{project.challenge}</p></div>
        <div className="my-16 h-px bg-[#e8e7e4]" />
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><h2 className="eyebrow">OUR APPROACH</h2><div className="space-y-8">{project.approach.map((paragraph, index) => <Reveal key={paragraph} delay={index * 0.06}><div className="flex gap-5"><span className="pt-1 text-xs font-medium text-[#bd0a2f]">0{index + 1}</span><p className="body-copy max-w-xl">{paragraph}</p></div></Reveal>)}</div></div>
      </section>
      <section className="border-y border-[#e8e7e4] bg-white"><div className="site-container section-space grid gap-10 md:grid-cols-2"><div><p className="eyebrow mb-5">DESIGNED WITH INTENTION</p><h2 className="section-title max-w-sm">The details make<br />the difference.</h2></div><div className="space-y-5">{project.features.map(feature => <div key={feature} className="flex items-center gap-4 border-b border-[#e8e7e4] pb-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f8edef] text-[#bd0a2f]"><Check size={15} /></span><span className="text-lg text-[#171a3b]">{feature}</span></div>)}</div></div></section>
      <section className="site-container section-space"><p className="eyebrow mb-6">KEEP EXPLORING</p><Link href={`/work/${nextProject.slug}`} className="group flex items-center justify-between gap-5"><div><h2 className="text-4xl font-medium tracking-tight text-[#171a3b] md:text-6xl">{nextProject.title}</h2><p className="mt-3 text-sm text-[#6b6d7b]">{nextProject.category} · Studio concept</p></div><span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#e8e7e4] text-[#171a3b] transition-colors group-hover:bg-[#bd0a2f] group-hover:text-white"><ArrowUpRight size={28} /></span></Link></section>
      <CtaBanner />
    </>
  );
}
