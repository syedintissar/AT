import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { INSIGHTS } from "@/data/insights";
import { SERVICES_DATA } from "@/data/services";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";
import { InsightArtwork } from "../InsightArtwork";

export function generateStaticParams() {
  return INSIGHTS.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find(item => item.slug === slug);
  if (!article) return { title: "Article not found" };
  return pageMetadata({ title: article.seoTitle, description: article.excerpt, path: `/insights/${article.slug}`, type: "article", ownImage: true });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = INSIGHTS.find(item => item.slug === slug);
  if (!article) notFound();
  const moreArticles = INSIGHTS.filter(item => item.slug !== slug);
  const path = `/insights/${article.slug}`;
  const relatedServices = article.services.map(id => SERVICES_DATA.find(service => service.id === id)).filter(service => service !== undefined);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    image: `${SITE.url}${path}/opengraph-image`,
    mainEntityOfPage: `${SITE.url}${path}`,
    author: { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  return (
    <>
      <JsonLd data={webPageJsonLd({ path, name: article.seoTitle, description: article.excerpt, breadcrumbs: [{ name: "Insights", path: "/insights" }, { name: article.seoTitle, path }] })} />
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs items={[{ name: "Insights", path: "/insights" }, { name: article.seoTitle, path }]} />
      <header className="site-container pb-14 pt-12 md:pt-16"><div><p className="eyebrow mb-6">{article.category}</p><h1 className="max-w-4xl text-[clamp(2.7rem,5.7vw,5.2rem)] font-medium leading-[1.09] tracking-[-0.055em] text-ink">{article.title}</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{article.excerpt}</p><div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted"><span className="font-medium text-ink">Alhawaij Tech Studio</span><span className="flex items-center gap-1.5"><Clock3 size={13} aria-hidden="true" /> {article.readTime}</span></div></div></header>
      <div className="site-container"><div className="grid items-center overflow-hidden rounded-3xl bg-white md:grid-cols-[1.1fr_1fr]"><div className="group"><InsightArtwork accent={article.accent} /></div><div className="p-8 md:p-12"><p className="eyebrow mb-5">A NOTE FROM THE STUDIO</p><p className="text-2xl font-medium leading-relaxed tracking-tight text-ink">Good products grow from clear questions, thoughtful decisions, and a little room to learn.</p><span className="mt-6 block h-0.5 w-12 bg-brand" /></div></div></div>
      <div className="site-container section-space grid items-start gap-12 lg:grid-cols-[250px_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-28"><p className="eyebrow mb-5">IN THIS ARTICLE</p><nav aria-label="Article contents" className="space-y-4 border-l border-line pl-5">{article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`} className="block text-sm leading-relaxed text-muted transition-colors hover:text-brand">{section.heading}</a>)}</nav><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand">Have a project in mind? <ArrowUpRight size={15} /></Link></aside>
        <article className="max-w-[720px] space-y-12">{article.sections.map((section, index) => <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-28"><h2 className="mb-5 text-2xl font-medium leading-snug tracking-tight text-ink md:text-[28px]">{section.heading}</h2><div className="space-y-5">{section.paragraphs.map(paragraph => <p key={paragraph} className="text-base leading-[1.9] text-muted md:text-[17px]">{paragraph}</p>)}</div>{section.items && <ul className="mt-6 space-y-3 rounded-2xl border border-line bg-white p-6">{section.items.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{item}</li>)}</ul>}</section>)}{relatedServices.length > 0 && <section aria-labelledby="article-services-heading" className="rounded-2xl border border-line bg-white p-7"><h2 id="article-services-heading" className="text-xl font-medium tracking-tight text-ink">Need help putting this into practice?</h2><p className="mt-2 text-[15px] leading-7 text-muted">These Alhawaij Tech services cover the work described in this article.</p><ul className="mt-5 flex flex-wrap gap-2">{relatedServices.map(service => <li key={service.id}><Link href={`/services/${service.id}`} className="pill transition-colors hover:border-brand hover:text-brand">{service.name}</Link></li>)}</ul></section>}<div className="border-t border-line pt-8"><p className="text-sm leading-relaxed text-muted">Written by the Alhawaij Tech studio. Practical notes to help you ask better questions at the start of your next project.</p><Link href="/contact" className="text-link mt-5 inline-flex items-center gap-2 text-sm">Let&apos;s think it through together <ArrowUpRight size={16} /></Link></div></article>
      </div>
      <section className="border-t border-line bg-white"><div className="site-container section-space"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow mb-4">KEEP THE IDEAS COMING</p><h2 className="section-title">A little more perspective.</h2></div><Link href="/insights" className="text-link inline-flex items-center gap-2">All insights <ArrowUpRight size={16} /></Link></div><div className="grid gap-8 md:grid-cols-2">{moreArticles.map(item => <Link key={item.slug} href={`/insights/${item.slug}`} className="group rounded-2xl border border-line bg-paper p-7 transition-colors hover:border-[#cbbdc0]"><p className="text-xs text-brand">{item.category} <span className="mx-2 text-[#b8b4b7]">/</span> <span className="text-muted">{item.readTime}</span></p><h3 className="mt-4 max-w-md text-2xl font-medium leading-snug tracking-tight text-ink">{item.title}</h3><span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">Read the story <ArrowUpRight size={16} /></span></Link>)}</div></div></section>
      <CtaBanner />
    </>
  );
}
