import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRINCIPLES, PROCESS_STEPS, TECH_CATEGORIES } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";
import { CountUp } from "./CountUp";
import { DynamicIcon } from "./DynamicIcon";
import { Reveal } from "./Reveal";

const facts = [
  { value: SERVICES_DATA.length, label: "Connected services" },
  { value: TECH_CATEGORIES.length, label: "Technology disciplines" },
  { value: TECH_CATEGORIES.reduce((total, category) => total + category.technologies.length, 0), label: "Tools, platforms & practices" },
  { value: PROCESS_STEPS.length, label: "Stage delivery process" },
];

export function Approach() {
  return (
    <section className="site-container section-space" aria-labelledby="approach-heading">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-[calc(var(--header-h)+48px)] lg:self-start">
          <p className="eyebrow mb-6">Why Alhawaij Tech</p>
          <h2 id="approach-heading" className="section-title">Your ambition.<br /><span className="serif-accent text-brand">Our shared obsession.</span></h2>
          <p className="body-copy mt-8 max-w-[460px]">We’re the people who ask one more question, refine one more interaction, and care about your product as much as you do. Creative thinking meets practical engineering, so the complicated feels simple and the ambitious feels achievable.</p>
          <Link href="/about" className="text-link mt-8">Get to know us <ArrowUpRight aria-hidden="true" /></Link>
        </Reveal>
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {PRINCIPLES.map((principle, index) => (
            <li key={principle.title}>
              <Reveal delay={(index % 2) * 0.08} className="h-full border-t border-line py-9">
                <DynamicIcon name={principle.icon} size={26} strokeWidth={1.4} className="mb-10 text-brand" aria-hidden="true" />
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em]">{principle.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-muted">{principle.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <Reveal className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line lg:mt-28 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-paper p-7 sm:p-9">
            <p className="text-[clamp(3rem,6vw,5rem)] font-medium leading-none tracking-[-0.06em]"><CountUp value={fact.value} /></p>
            <p className="mt-4 text-sm text-muted">{fact.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
