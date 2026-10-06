import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { DynamicIcon } from "@/components/DynamicIcon";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.id === slug);
  return service ? { title: service.name, description: service.shortDesc, alternates: { canonical: `/services/${service.id}` } } : { title: "Service not found" };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.id === slug);
  if (!service) notFound();
  const related = SERVICES_DATA.filter((item) => item.category === service.category && item.id !== service.id).slice(0, 3);
  const contactHref = `/contact?service=${encodeURIComponent(service.name)}`;

  return (
    <>
      <div className="site-container pt-10"><Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#6b6d7b] transition-colors hover:text-[#bd0a2f]"><ArrowLeft size={16} aria-hidden="true" /> All services</Link></div>
      <PageIntro eyebrow={service.category} title={service.name} description={service.shortDesc}>
        <Link href={contactHref} className="button-primary">Let’s build something <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </PageIntro>
      <section className="site-container pb-24 lg:pb-32">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="flex flex-col justify-between rounded-[28px] bg-[#eeeee8] p-8 sm:p-12">
            <div className="mb-16 flex items-start justify-between"><DynamicIcon name={service.icon} size={52} strokeWidth={1.1} className="text-[#bd0a2f]" aria-hidden="true" /><span className="font-mono text-sm text-[#94949e]">SERVICE / {service.number}</span></div>
            <div><h2 className="mb-5 text-3xl font-medium tracking-[-0.045em] text-[#171a3b]">Thoughtfully planned.<br />Carefully delivered.</h2><p className="body-copy">{service.fullDesc}</p></div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[28px] border border-[#e8e7e4] bg-white p-8 sm:p-12">
            <p className="eyebrow">WHAT WE CAN DELIVER</p>
            <h2 className="mb-8 mt-4 text-3xl font-medium tracking-[-0.045em] text-[#171a3b]">Expertise you can build on.</h2>
            <ul className="space-y-5">{service.deliverables.map((deliverable) => <li key={deliverable} className="flex items-start gap-4 border-b border-[#eeedea] pb-5 text-sm leading-6 text-[#555868]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f8e9ec] text-[#bd0a2f]"><Check size={12} aria-hidden="true" /></span>{deliverable}</li>)}</ul>
            <p className="mt-6 text-xs leading-6 text-[#8a8b98]">We’ll agree the scope, deliverables, and timeline together before work begins.</p>
          </Reveal>
        </div>
      </section>
      <section className="section-space border-y border-[#e8e7e4] bg-white">
        <div className="site-container">
          <Reveal><p className="eyebrow">THE WAY FORWARD</p><h2 className="section-title mt-5 max-w-xl">Clear steps.<br />Shared progress.</h2></Reveal>
          <div className="mt-14 grid gap-9 md:grid-cols-3">
            {[
              ["01", "Understand & align", "We begin with your goals, current challenges, and the people who will use the solution. Together, we define what success looks like."],
              ["02", "Create & collaborate", "We turn the plan into tangible work, share progress regularly, and use your feedback to guide each iteration."],
              ["03", "Deliver & evolve", "We validate the work, prepare a clear handover, and discuss the support and improvements that will help you move forward."],
            ].map(([number, title, description], index) => <Reveal key={number} delay={index * 0.1}><div className="border-t border-[#dcdad4] pt-6"><span className="font-mono text-xs text-[#bd0a2f]">/{number}</span><h3 className="mb-4 mt-8 text-xl font-medium tracking-[-0.03em] text-[#171a3b]">{title}</h3><p className="text-sm leading-7 text-[#6b6d7b]">{description}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      {related.length > 0 && <section className="section-space site-container"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">CONNECTED EXPERTISE</p><h2 className="section-title mt-5">Better, together.</h2></div><Link href="/services" className="text-link">View all services <ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map((item, index) => <Reveal key={item.id} delay={index * 0.07}><Link href={`/services/${item.id}`} className="group flex h-full flex-col rounded-[22px] border border-[#e8e7e4] bg-white p-8 transition-colors hover:border-[#bd0a2f]/40"><DynamicIcon name={item.icon} size={26} strokeWidth={1.5} className="mb-10 text-[#bd0a2f]" aria-hidden="true" /><h3 className="text-2xl font-medium tracking-[-0.04em] text-[#171a3b]">{item.name}</h3><p className="mb-8 mt-4 text-sm leading-7 text-[#6b6d7b]">{item.shortDesc}</p><span className="mt-auto flex items-center gap-2 text-sm font-medium text-[#171a3b]">Explore service <ArrowUpRight size={17} className="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></span></Link></Reveal>)}</div></section>}
      <section className="site-container pb-24"><Reveal className="rounded-[28px] bg-[#f3e8e7] px-8 py-14 text-center sm:px-14 sm:py-20"><p className="eyebrow justify-center">YOUR NEXT CHAPTER</p><h2 className="section-title mx-auto mt-5 max-w-2xl">Let’s move your<br />idea forward.</h2><p className="body-copy mx-auto mb-8 mt-5 max-w-lg">Tell us what you have in mind. We’ll help you find the right way to get there.</p><Link href={contactHref} className="button-primary">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></Link></Reveal></section>
    </>
  );
}
