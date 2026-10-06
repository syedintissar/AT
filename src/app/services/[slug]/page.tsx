import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES_DATA, SERVICE_SEO } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";
import { SITE, TECH_CATEGORIES } from "@/data/company";
import { DynamicIcon } from "@/components/DynamicIcon";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.id === slug);
  if (!service) return { title: "Service not found" };
  const seo = SERVICE_SEO[service.id];
  return pageMetadata({ title: seo?.title ?? service.name, description: seo?.description ?? service.shortDesc, path: `/services/${service.id}`, ownImage: true });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.id === slug);
  if (!service) notFound();
  const seo = SERVICE_SEO[service.id];
  const path = `/services/${service.id}`;
  const related = SERVICES_DATA.filter((item) => item.category === service.category && item.id !== service.id).slice(0, 3);
  const technologies = TECH_CATEGORIES.filter((category) => seo?.techCategories.includes(category.name));
  const relatedWork = PROJECTS.filter((project) => project.services.includes(service.id));
  const relatedInsights = INSIGHTS.filter((article) => article.services.includes(service.id));
  const contactHref = `/contact?service=${encodeURIComponent(service.name)}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${path}#service`,
    name: service.name,
    description: service.fullDesc,
    serviceType: service.name,
    category: service.category,
    url: `${SITE.url}${path}`,
    provider: { "@id": `${SITE.url}/#organization` },
    hasOfferCatalog: { "@type": "OfferCatalog", name: `${service.name} deliverables`, itemListElement: service.deliverables.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) },
  };

  return (
    <>
      <JsonLd data={webPageJsonLd({ path, name: seo?.title ?? service.name, description: seo?.description ?? service.shortDesc, breadcrumbs: [{ name: "Services", path: "/services" }, { name: service.name, path }] })} />
      <JsonLd data={serviceJsonLd} />
      <Breadcrumbs items={[{ name: "Services", path: "/services" }, { name: service.name, path }]} />
      <PageIntro eyebrow={service.category} title={service.name} description={service.shortDesc}>
        <Link href={contactHref} className="button-primary">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </PageIntro>
      <section className="site-container pb-24 lg:pb-32" aria-labelledby="overview-heading">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="flex flex-col justify-between rounded-[28px] bg-paper-2 p-8 sm:p-12">
            <div className="mb-16 flex items-start justify-between"><DynamicIcon name={service.icon} size={52} strokeWidth={1.1} className="text-brand" aria-hidden="true" /><span className="font-mono text-sm text-subtle">SERVICE / {service.number}</span></div>
            <div><h2 id="overview-heading" className="mb-5 text-3xl font-medium tracking-[-0.045em] text-ink">{service.name} at Alhawaij Tech</h2><p className="body-copy">{service.fullDesc}</p></div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[28px] border border-line bg-white p-8 sm:p-12">
            <p className="eyebrow">What we can deliver</p>
            <h2 className="mb-8 mt-4 text-3xl font-medium tracking-[-0.045em] text-ink">{service.name} deliverables</h2>
            <ul className="space-y-5">{service.deliverables.map((deliverable) => <li key={deliverable} className="flex items-start gap-4 border-b border-line pb-5 text-[15px] leading-6 text-muted"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand"><Check size={12} aria-hidden="true" /></span>{deliverable}</li>)}</ul>
            <p className="mt-6 text-sm leading-6 text-muted">We’ll agree the scope, deliverables, and timeline together before work begins.</p>
          </Reveal>
        </div>
      </section>
      {technologies.length > 0 && (
        <section className="site-container pb-24 lg:pb-32" aria-labelledby="tech-heading">
          <Reveal className="mb-10"><p className="eyebrow">Technology</p><h2 id="tech-heading" className="section-title mt-5">Tools we use for {service.name}</h2></Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((category) => (
              <Reveal key={category.name} className="h-full rounded-[22px] border border-line bg-white p-7">
                <div className="mb-5 flex items-center gap-3"><DynamicIcon name={category.iconName} size={20} strokeWidth={1.5} className="text-brand" aria-hidden="true" /><h3 className="text-lg font-medium tracking-[-0.02em]">{category.name}</h3></div>
                <p className="mb-5 text-sm leading-6 text-muted">{category.description}</p>
                <ul className="flex flex-wrap gap-2">{category.technologies.map((technology) => <li key={technology.name} className="pill">{technology.name}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <Link href="/about#our-toolkit" className="text-link mt-8">See our full technology toolkit <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </section>
      )}
      <section className="section-space border-y border-line bg-white" aria-labelledby="process-heading">
        <div className="site-container">
          <Reveal><p className="eyebrow">The way forward</p><h2 id="process-heading" className="section-title mt-5 max-w-xl">Our {service.name} process</h2></Reveal>
          <div className="mt-14 grid gap-9 md:grid-cols-3">
            {[
              ["01", "Understand & align", "We begin with your goals, current challenges, and the people who will use the solution. Together, we define what success looks like."],
              ["02", "Create & collaborate", "We turn the plan into tangible work, share progress regularly, and use your feedback to guide each iteration."],
              ["03", "Deliver & evolve", "We validate the work, prepare a clear handover, and discuss the support and improvements that will help you move forward."],
            ].map(([number, title, description], index) => <Reveal key={number} delay={index * 0.1}><div className="border-t border-line pt-6"><span className="font-mono text-xs text-brand">/{number}</span><h3 className="mb-4 mt-8 text-xl font-medium tracking-[-0.03em] text-ink">{title}</h3><p className="text-[15px] leading-7 text-muted">{description}</p></div></Reveal>)}
          </div>
          <Link href="/about#our-process" className="text-link mt-10">Read about our full delivery process <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
      {(relatedWork.length > 0 || relatedInsights.length > 0) && (
        <section className="site-container section-space" aria-labelledby="related-heading">
          <Reveal className="mb-10"><p className="eyebrow">See it in practice</p><h2 id="related-heading" className="section-title mt-5">Related work and insights</h2></Reveal>
          <ul className="grid gap-4 md:grid-cols-2">
            {relatedWork.map((project) => (
              <li key={project.slug}><Link href={`/work/${project.slug}`} className="group flex h-full flex-col rounded-[22px] border border-line bg-white p-7 transition-colors hover:border-brand/40"><span className="label">Studio concept · {project.category}</span><span className="mt-3 text-2xl font-medium tracking-[-0.03em]">{project.seoTitle}</span><span className="mt-3 text-[15px] leading-7 text-muted">{project.description}</span><span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium">View the {project.title} concept <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></Link></li>
            ))}
            {relatedInsights.map((article) => (
              <li key={article.slug}><Link href={`/insights/${article.slug}`} className="group flex h-full flex-col rounded-[22px] border border-line bg-paper p-7 transition-colors hover:border-brand/40"><span className="label">Insight · {article.readTime}</span><span className="mt-3 text-2xl font-medium tracking-[-0.03em]">{article.title}</span><span className="mt-3 text-[15px] leading-7 text-muted">{article.excerpt}</span><span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium">Read the article <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></Link></li>
            ))}
          </ul>
        </section>
      )}
      {related.length > 0 && <section className="section-space site-container" aria-labelledby="connected-heading"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Connected expertise</p><h2 id="connected-heading" className="section-title mt-5">More {service.category} services</h2></div><Link href="/services" className="text-link">View all services <ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map((item, index) => <Reveal key={item.id} delay={index * 0.07}><Link href={`/services/${item.id}`} className="group flex h-full flex-col rounded-[22px] border border-line bg-white p-8 transition-colors hover:border-brand/40"><DynamicIcon name={item.icon} size={26} strokeWidth={1.5} className="mb-10 text-brand" aria-hidden="true" /><h3 className="text-2xl font-medium tracking-[-0.04em] text-ink">{item.name}</h3><p className="mb-8 mt-4 text-[15px] leading-7 text-muted">{item.shortDesc}</p><span className="mt-auto flex items-center gap-2 text-[15px] font-medium text-ink">Explore {item.name} <ArrowUpRight size={17} className="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></span></Link></Reveal>)}</div></section>}
      <section className="site-container pb-24"><Reveal className="rounded-[28px] bg-brand-soft px-8 py-14 text-center sm:px-14 sm:py-20"><p className="eyebrow justify-center">Your next chapter</p><h2 className="section-title mx-auto mt-5 max-w-2xl">Let’s move your<br />idea forward.</h2><p className="body-copy mx-auto mb-8 mt-5 max-w-lg">Tell us what you have in mind. We’ll help you find the right way to get there.</p><Link href={contactHref} className="button-primary">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></Link></Reveal></section>
    </>
  );
}
