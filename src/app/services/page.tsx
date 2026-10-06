import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceExplorer } from "@/components/ServiceExplorer";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Alhawaj Tech’s services in software engineering, UI/UX design, cloud, cybersecurity, and digital growth. Find the right expertise for your next project.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="OUR EXPERTISE" title={<>Big ideas.<br /><span className="text-[#bd0a2f]">Built end to end.</span></>} description="From the first sketch to your next big milestone. Bring the right design, engineering, and growth expertise together, all in one place.">
        <div className="flex flex-wrap items-center gap-5 text-sm text-[#6b6d7b]">
          <span className="flex items-center gap-2"><Check size={16} className="text-[#bd0a2f]" aria-hidden="true" />12 connected services</span>
          <span className="flex items-center gap-2"><Check size={16} className="text-[#bd0a2f]" aria-hidden="true" />One collaborative partner</span>
        </div>
      </PageIntro>
      <ServiceExplorer />
      <section className="section-space border-y border-[#e8e7e4] bg-[#f1f0eb]">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">MADE TO WORK TOGETHER</p>
            <h2 className="section-title mt-5">The right team.<br />The right next step.</h2>
            <p className="body-copy mt-6 max-w-md">A new product, a better experience, or a stronger foundation. We shape our involvement around what your business actually needs.</p>
            <Link href="/contact" className="text-link mt-8">Find your starting point <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </Reveal>
          <div>
            {[
              ["01", "Start something new", "Turn an early idea into a clear roadmap, a thoughtful design, and a product people can use."],
              ["02", "Make something better", "Improve the experience, performance, and reliability of the products you already have."],
              ["03", "Build for what’s next", "Give your team the infrastructure, tools, and ongoing support to move forward with confidence."],
            ].map(([number, title, description], index) => (
              <Reveal key={number} delay={index * 0.08}>
                <div className="flex gap-6 border-b border-[#dcdad4] py-7 first:pt-0">
                  <span className="pt-1 font-mono text-xs text-[#bd0a2f]">{number}</span>
                  <div><h3 className="text-xl font-medium tracking-[-0.03em] text-[#171a3b]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#6b6d7b]">{description}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
