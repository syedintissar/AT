import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { DynamicIcon } from "@/components/DynamicIcon";
import { PROCESS_STEPS, TECH_CATEGORIES } from "@/data/company";

export const metadata: Metadata = {
  title: "About us",
  description: "Meet Alhawaj Tech: a digital partner bringing design, engineering, and growth together. Discover our approach, values, and technology expertise.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "Users", title: "People before pixels.", description: "We start with the people behind the business and the people using the product. Their needs give the work direction." },
  { icon: "MessagesSquare", title: "Clarity at every step.", description: "Good collaboration needs honest conversations, understandable decisions, and a shared view of what comes next." },
  { icon: "ScanLine", title: "Care in the details.", description: "From the first interaction to the underlying architecture, we make thoughtful choices that add up to a better experience." },
  { icon: "Sprout", title: "Build beyond launch.", description: "A launch is a beginning. We consider maintainability, security, and the room your business needs to grow." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="A LITTLE ABOUT US" title={<>Technology is our craft.<br /><span className="text-[#bd0a2f]">Your progress is the point.</span></>} description="We’re Alhawaj Tech. A digital partner for businesses with something to build, something to improve, and somewhere to go.">
        <Link href="#our-story" className="text-link">Get to know us <ArrowDown size={17} aria-hidden="true" /></Link>
      </PageIntro>
      <section className="site-container pb-24 lg:pb-32" id="our-story">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-[28px] bg-[#eeeee8] sm:min-h-[470px]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(#d8d8cf_1px,transparent_1px),linear-gradient(90deg,#d8d8cf_1px,transparent_1px)] [background-size:48px_48px]" />
            <div aria-hidden="true" className="absolute h-[300px] w-[300px] rounded-full border border-[#c9c9bb] sm:h-[350px] sm:w-[350px]" />
            <div aria-hidden="true" className="absolute h-[220px] w-[220px] rounded-full border border-[#c9c9bb] sm:h-[270px] sm:w-[270px]" />
            <div className="absolute left-7 top-7 text-[10px] font-medium uppercase tracking-[0.18em] text-[#818374]">Different disciplines. Shared purpose.</div>
            <div className="relative flex h-36 w-36 rotate-[-8deg] items-center justify-center rounded-[32px] bg-[#bd0a2f] text-white shadow-[0_18px_45px_-15px_#bd0a2f66] sm:h-44 sm:w-44"><Sparkles size={70} strokeWidth={1} aria-hidden="true" /></div>
            <span className="absolute left-6 top-[30%] rotate-[-9deg] rounded-xl border border-white/70 bg-white px-5 py-3 text-sm font-medium text-[#171a3b] shadow-sm sm:left-10">Design with care.</span>
            <span className="absolute right-5 top-[53%] rotate-[8deg] rounded-xl border border-white/70 bg-white px-5 py-3 text-sm font-medium text-[#171a3b] shadow-sm sm:right-8">Build with purpose.</span>
            <span className="absolute bottom-14 left-[15%] rotate-[-4deg] rounded-xl border border-white/70 bg-white px-5 py-3 text-sm font-medium text-[#171a3b] shadow-sm">Grow together.</span>
            <div className="absolute bottom-6 right-7 font-mono text-[10px] text-[#818374]">ALHAWAJ TECH / OUR APPROACH</div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">MORE THAN A HANDOFF</p>
            <h2 className="section-title mt-5">Good things happen<br />when we build together.</h2>
            <p className="body-copy mt-7">Technology should make your next step easier. That belief connects everything we do, from designing a more intuitive website to building the systems behind it.</p>
            <p className="body-copy mt-5">We bring design, engineering, cloud, security, and marketing into one conversation. It means the big picture stays in view, and the details get the attention they deserve.</p>
            <p className="body-copy mt-5">Our role is to understand where you want to go, bring useful ideas to the table, and work with you to make them real.</p>
            <Link href="/services" className="text-link mt-8">Explore our expertise <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>
      <section className="section-space border-y border-[#e8e7e4] bg-white">
        <div className="site-container">
          <Reveal className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="eyebrow">WHAT GUIDES US</p><h2 className="section-title mt-5">The way we do things.</h2></div><p className="body-copy max-w-sm">A few simple principles that shape our decisions, our work, and our partnerships.</p></Reveal>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{values.map((value, index) => <Reveal key={value.title} delay={index * 0.08}><div className="border-t border-[#e8e7e4] pt-7"><DynamicIcon name={value.icon} size={27} strokeWidth={1.4} className="mb-9 text-[#bd0a2f]" aria-hidden="true" /><h3 className="mb-4 text-xl font-medium leading-snug tracking-[-0.04em] text-[#171a3b]">{value.title}</h3><p className="text-sm leading-7 text-[#6b6d7b]">{value.description}</p></div></Reveal>)}</div>
        </div>
      </section>
      <section className="section-space site-container" id="our-process">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal><p className="eyebrow">FROM POSSIBILITY TO PROGRESS</p><h2 className="section-title mt-5">A clear path.<br />Built around you.</h2><p className="body-copy mt-6 max-w-sm">Shared goals, regular conversations, and room to learn. Our process keeps the work moving and everyone on the same page.</p><Link href="/contact" className="text-link mt-8">Let’s find your starting point <ArrowUpRight size={17} aria-hidden="true" /></Link></Reveal>
          <div>{PROCESS_STEPS.map((step, index) => <Reveal key={step.number} delay={index * 0.05}><div className="group flex gap-5 border-t border-[#deddd7] py-7 sm:gap-7"><span className="pt-1 font-mono text-xs text-[#bd0a2f]">{step.number}</span><div><h3 className="text-2xl font-medium tracking-[-0.04em] text-[#171a3b]">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[#6b6d7b]">{step.description}</p></div><DynamicIcon name={step.icon} size={21} strokeWidth={1.3} className="ml-auto mt-1 shrink-0 text-[#91928b]" aria-hidden="true" /></div></Reveal>)}</div>
        </div>
      </section>
      <section className="section-space border-y border-[#e8e7e4] bg-[#f1f0eb]" id="our-toolkit">
        <div className="site-container">
          <Reveal className="mb-12"><p className="eyebrow">OUR TOOLKIT</p><h2 className="section-title mt-5">The right tools.<br />For the right reasons.</h2><p className="body-copy mt-6 max-w-xl">We choose technology around your product, your people, and your plans. Explore the tools and practices we work with.</p></Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">{TECH_CATEGORIES.map((category, index) => <Reveal key={category.name} delay={(index % 2) * 0.06}><details className="group rounded-2xl border border-[#e0dfd8] bg-[#faf9f6] open:bg-white"><summary className="flex cursor-pointer list-none items-center gap-4 rounded-2xl px-6 py-6 [&::-webkit-details-marker]:hidden"><DynamicIcon name={category.iconName} size={21} strokeWidth={1.5} className="text-[#bd0a2f]" aria-hidden="true" /><span className="text-lg font-medium tracking-[-0.03em] text-[#171a3b]">{category.name}</span><span className="ml-auto font-mono text-[11px] text-[#8a8b98]">{category.technologies.length} tools</span><Plus size={17} className="text-[#6b6d7b] transition-transform group-open:rotate-45" aria-hidden="true" /></summary><div className="px-6 pb-7"><p className="mb-5 text-sm leading-6 text-[#6b6d7b]">{category.description}</p><ul className="flex flex-wrap gap-2">{category.technologies.map((technology) => <li key={technology.name} className="rounded-full border border-[#e8e7e4] bg-[#faf9f6] px-3 py-2 text-xs text-[#555868]">{technology.name}</li>)}</ul></div></details></Reveal>)}</div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
