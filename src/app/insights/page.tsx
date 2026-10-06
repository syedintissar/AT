import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { INSIGHTS } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { InsightArtwork } from "./InsightArtwork";

const title = "Insights: Product, Design & Engineering";
const description = "Practical articles from Alhawaij Tech on planning a first product release, building design systems, and preparing cloud infrastructure before you scale.";

export const metadata = pageMetadata({ title, description, path: "/insights" });

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ type: "CollectionPage", path: "/insights", name: title, description, breadcrumbs: [{ name: "Insights", path: "/insights" }] })} />
      <PageIntro eyebrow="IDEAS WORTH SHARING" title={<>A little perspective.<br />A better <span className="serif-accent text-brand">next step.</span></>} description="Thoughts on building useful products, designing with intention, and making technology work better. From our studio to your next idea." />
      <section className="site-container pb-24" aria-label="Studio articles">
        <div className="mb-10 flex items-center justify-between border-b border-line pb-5"><p className="text-sm font-medium text-ink">From the studio</p><span className="text-xs text-muted">Product. Design. Engineering.</span></div>
        <div className="grid gap-x-7 gap-y-12 md:grid-cols-3">
          {INSIGHTS.map((article, index) => <Reveal key={article.slug} delay={index * 0.08}><Link href={`/insights/${article.slug}`} className="group block rounded-[18px]"><InsightArtwork accent={article.accent} /><div className="mt-6 flex flex-wrap items-center justify-between gap-2"><span className="text-[11px] font-medium uppercase tracking-[0.09em] text-brand">{article.category}</span><span className="text-xs text-muted">{article.readTime}</span></div><h2 className="mt-4 text-[25px] font-medium leading-[1.35] tracking-[-0.035em] text-ink transition-colors group-hover:text-brand">{article.title}</h2><p className="mt-4 text-sm leading-[1.8] text-muted">{article.excerpt}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">Read the story <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></Link></Reveal>)}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
