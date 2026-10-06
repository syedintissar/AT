import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES_DATA } from "@/data/services";

const title = "Software Development & Digital Services";
const description = "Explore Alhawaij Tech services: web and mobile app development, UI/UX design, eCommerce, cloud and DevOps, cybersecurity, SEO, and digital marketing.";

export const metadata = pageMetadata({ title, description, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ type: "CollectionPage", path: "/services", name: title, description, breadcrumbs: [{ name: "Services", path: "/services" }] })} />
      <PageIntro eyebrow="OUR EXPERTISE" title={<>Big ideas.<br /><span className="text-brand">Built end to end.</span></>} description="From the first sketch to your next big milestone. Bring the right design, engineering, and growth expertise together, all in one place.">
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
          <span className="flex items-center gap-2"><Check size={16} className="text-brand" aria-hidden="true" />{SERVICES_DATA.length} connected services</span>
          <span className="flex items-center gap-2"><Check size={16} className="text-brand" aria-hidden="true" />One collaborative partner</span>
        </div>
      </PageIntro>
      <ServiceExplorer />
      <section className="section-space border-y border-line bg-paper-2">
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
                <div className="flex gap-6 border-b border-line py-7 first:pt-0">
                  <span className="pt-1 font-mono text-xs text-brand">{number}</span>
                  <div><h3 className="text-xl font-medium tracking-[-0.03em] text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{description}</p></div>
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
