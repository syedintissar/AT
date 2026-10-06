import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SERVICES_DATA } from "@/data/services";
import { SITE } from "@/data/company";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return PROJECTS.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find(item => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return pageMetadata({ title: project.seoTitle, description: project.seoDescription, path: `/work/${project.slug}`, type: "article", ownImage: true });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find(item => item.slug === slug);
  if (!project) notFound();
  const nextProject = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];
  const path = `/work/${project.slug}`;
  const services = project.services.map(id => SERVICES_DATA.find(service => service.id === id)).filter(service => service !== undefined);
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE.url}${path}#concept`,
    name: project.seoTitle,
    headline: project.title,
    description: project.seoDescription,
    genre: "Studio concept",
    keywords: project.stack.join(", "),
    creator: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}${path}`,
  };

  return (
    <>
      <JsonLd data={webPageJsonLd({ path, name: project.seoTitle, description: project.seoDescription, breadcrumbs: [{ name: "Work", path: "/work" }, { name: project.title, path }] })} />
      <JsonLd data={creativeWorkJsonLd} />
      <Breadcrumbs items={[{ name: "Work", path: "/work" }, { name: project.title, path }]} />
      <section className="site-container pb-12 pt-12 md:pt-16">
        <div className="mb-7 flex flex-wrap items-center gap-3"><span className="eyebrow">{project.category}</span><span className="rounded-full border border-line px-3 py-1 text-xs text-muted">Independent studio concept</span></div><h1 className="text-[clamp(4rem,10vw,8rem)] font-medium leading-none tracking-[-0.06em] text-ink">{project.title}<span className="text-brand">.</span></h1><p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted md:text-2xl">{project.description}</p><div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6 text-sm text-muted"><span>{project.discipline}</span><span>Concept exploration · Alhawaij Tech</span></div>
      </section>
      <div className="site-container"><div className="group mx-auto max-w-5xl"><ProjectVisual variant={project.variant} compact /></div><p className="mt-4 text-center text-sm leading-relaxed text-muted">Visual exploration. All names, interface data, and product screens are illustrative.</p></div>
      <section className="site-container section-space">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><h2 className="eyebrow">THE IDEA</h2><div className="max-w-2xl"><p className="text-2xl leading-relaxed tracking-tight text-ink md:text-3xl">{project.overview}</p><div className="mt-10 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="pill">{item}</span>)}</div></div></div>
        <div className="my-16 h-px bg-line" />
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><h2 className="eyebrow">THE DESIGN QUESTION</h2><p className="body-copy max-w-2xl">{project.challenge}</p></div>
        <div className="my-16 h-px bg-line" />
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><h2 className="eyebrow">OUR APPROACH</h2><div className="space-y-8">{project.approach.map((paragraph, index) => <Reveal key={paragraph} delay={index * 0.06}><div className="flex gap-5"><span className="pt-1 text-xs font-medium text-brand">0{index + 1}</span><p className="body-copy max-w-xl">{paragraph}</p></div></Reveal>)}</div></div>
      </section>
      <section className="border-y border-line bg-white"><div className="site-container section-space grid gap-10 md:grid-cols-2"><div><p className="eyebrow mb-5">DESIGNED WITH INTENTION</p><h2 className="section-title">The details make<br />the difference.</h2></div><div className="space-y-5">{project.features.map(feature => <div key={feature} className="flex items-center gap-4 border-b border-line pb-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Check size={15} /></span><span className="text-lg text-ink">{feature}</span></div>)}</div></div></section>
      <section className="site-container pt-[var(--section-y)]" aria-labelledby="services-used-heading">
        <p className="eyebrow mb-5">Services behind this concept</p>
        <h2 id="services-used-heading" className="section-title mb-10">How we’d build {project.title}</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {services.map(service => (
            <li key={service.id}><Link href={`/services/${service.id}`} className="group flex h-full flex-col rounded-[22px] border border-line bg-white p-7 transition-colors hover:border-brand/40"><span className="text-xl font-medium tracking-[-0.03em]">{service.name}</span><span className="mt-3 text-[15px] leading-7 text-muted">{service.shortDesc}</span><span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium">Explore {service.name} <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></Link></li>
          ))}
        </ul>
      </section>
      <section className="site-container section-space"><p className="eyebrow mb-6">KEEP EXPLORING</p><Link href={`/work/${nextProject.slug}`} className="group flex items-center justify-between gap-5"><div><h2 className="text-4xl font-medium tracking-tight text-ink md:text-6xl">{nextProject.title}</h2><p className="mt-3 text-sm text-muted">{nextProject.category} · Studio concept</p></div><span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors group-hover:bg-brand group-hover:text-white"><ArrowUpRight size={28} /></span></Link></section>
      <CtaBanner />
    </>
  );
}
