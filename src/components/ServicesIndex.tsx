import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { Reveal } from "./Reveal";

const featured: { id: string; title: string; text: string; tags: string }[] = [
  { id: "web-development", title: "Web development", text: "Fast, intuitive websites and powerful platforms. Built around your business and the people who use them.", tags: "Web apps · Websites · Headless CMS" },
  { id: "mobile-apps", title: "Mobile applications", text: "Thoughtful iOS and Android experiences that put your business right where your customers are.", tags: "iOS · Android · Cross-platform" },
  { id: "ui-ux-design", title: "UI/UX & product design", text: "We turn complex challenges into clear, engaging experiences that feel effortless from the very first click.", tags: "Research · Design systems · Prototypes" },
  { id: "ecommerce", title: "eCommerce", text: "Storefronts and checkout flows built to convert, with the integrations a growing catalog needs.", tags: "Headless storefronts · Payments · Inventory" },
  { id: "cloud-computing", title: "Cloud & DevOps", text: "A dependable foundation for your next chapter. Secure infrastructure that grows alongside your ambition.", tags: "Cloud · CI/CD · Infrastructure as code" },
  { id: "cybersecurity", title: "Cybersecurity", text: "Confidence, built in. Protect your products, your data, and the trust you’ve worked hard to earn.", tags: "Audits · Hardening · Monitoring" },
];

export function ServicesIndex() {
  const items = featured.filter((item) => SERVICES_DATA.some((service) => service.id === item.id));
  return (
    <section id="services" className="site-container section-space" aria-labelledby="services-heading">
      <Reveal className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow mb-6">What we do</p>
          <h2 id="services-heading" className="section-title">Big-picture thinking.<br /><span className="serif-accent text-muted">Every little detail.</span></h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-[400px]">
          <p className="body-copy">From the first sketch to the next big milestone, we bring design, engineering, and strategy together.</p>
          <Link href="/services" className="text-link mt-5">All {SERVICES_DATA.length} services <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </Reveal>
      <ul className="border-b border-line">
        {items.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 0.04}>
              <Link href={`/services/${item.id}`} className="service-row group">
                <span className="service-row-number service-row-muted font-mono text-sm">0{index + 1}</span>
                <span className="min-w-0">
                  <span className="block text-[clamp(1.6rem,3.6vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.045em]">{item.title}</span>
                  <span className="service-row-detail">
                    <span className="block">
                      <span className="service-row-muted mt-4 grid max-w-3xl gap-x-10 gap-y-2 text-[15px] leading-7 md:grid-cols-[1.4fr_1fr]">
                        <span>{item.text}</span>
                        <span className="font-mono text-xs uppercase leading-6 tracking-[0.08em]">{item.tags}</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span className="service-row-arrow" aria-hidden="true"><ArrowUpRight size={22} strokeWidth={1.5} /></span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
