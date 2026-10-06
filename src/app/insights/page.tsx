import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { INSIGHTS } from "@/data/insights";
import { InsightArtwork } from "./InsightArtwork";

export const metadata: Metadata = {
  title: "Insights | Al-Hawaij Tech",
  description: "Practical perspectives on product strategy, thoughtful design systems, and dependable software engineering from Al-Hawaij Tech.",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="IDEAS WORTH SHARING" title={<>A little perspective.<br />A better <span className="font-serif italic text-[#bd0a2f]">next step.</span></>} description="Thoughts on building useful products, designing with intention, and making technology work better. From our studio to your next idea." />
      <section className="site-container pb-24" aria-label="Studio articles">
        <div className="mb-10 flex items-center justify-between border-b border-[#e8e7e4] pb-5"><p className="text-sm font-medium text-[#171a3b]">From the studio</p><span className="text-xs text-[#6b6d7b]">Product. Design. Engineering.</span></div>
        <div className="grid gap-x-7 gap-y-12 md:grid-cols-3">
          {INSIGHTS.map((article, index) => <Reveal key={article.slug} delay={index * 0.08}><Link href={`/insights/${article.slug}`} className="group block rounded-[18px]"><InsightArtwork accent={article.accent} /><div className="mt-6 flex flex-wrap items-center justify-between gap-2"><span className="text-[11px] font-medium uppercase tracking-[0.09em] text-[#bd0a2f]">{article.category}</span><span className="text-xs text-[#6b6d7b]">{article.readTime}</span></div><h2 className="mt-4 text-[25px] font-medium leading-[1.35] tracking-[-0.035em] text-[#171a3b] transition-colors group-hover:text-[#bd0a2f]">{article.title}</h2><p className="mt-4 text-sm leading-[1.8] text-[#6b6d7b]">{article.excerpt}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#171a3b]">Read the story <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></Link></Reveal>)}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
