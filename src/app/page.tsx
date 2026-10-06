import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { ServicesIndex } from "@/components/ServicesIndex";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Approach } from "@/components/Approach";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { InsightArtwork } from "@/app/insights/InsightArtwork";
import { INSIGHTS } from "@/data/insights";

const homeTitle = "Software Development & Design Company | Alhawaij Tech";
const homeDescription = "Software development company building custom websites, web apps, mobile apps, eCommerce, and cloud solutions, with design, engineering, and support in one team.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: { title: homeTitle, description: homeDescription, url: "/", siteName: "Alhawaij Tech", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ServicesIndex />
      <FeaturedWork />
      <Approach />
      <ProcessTimeline />
      <section className="site-container section-space" aria-labelledby="insights-heading">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-6">From the studio</p>
            <h2 id="insights-heading" className="section-title">A little <span className="serif-accent text-muted">perspective.</span></h2>
          </div>
          <Link href="/insights" className="text-link shrink-0">All insights <ArrowUpRight aria-hidden="true" /></Link>
        </Reveal>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {INSIGHTS.slice(0, 3).map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.08}>
              <Link href={`/insights/${article.slug}`} className="group block">
                <div className="overflow-hidden rounded-[var(--radius-md)]">
                  <div className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"><InsightArtwork accent={article.accent} /></div>
                </div>
                <p className="label mt-6">{article.category} <span className="mx-2" aria-hidden="true">·</span> {article.readTime}</p>
                <h3 className="mt-3 text-[22px] font-medium leading-snug tracking-[-0.03em] transition-colors group-hover:text-brand">{article.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium">Read the story <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
