"use client";

import { useState } from "react";
import Link from "next/link";
import { cssVars } from "@/lib/css";
import { ArrowUpRight, Plus } from "lucide-react";
import { DynamicIcon } from "@/components/DynamicIcon";
import { SERVICES_DATA } from "@/data/services";


const categories = ["All", "Engineering", "Design & UX", "Cloud & Security", "Growth & Marketing"] as const;
type Category = (typeof categories)[number];

export function ServiceExplorer() {
  const [category, setCategory] = useState<Category>("All");
  const [filtered, setFiltered] = useState(false);
  const services = category === "All" ? SERVICES_DATA : SERVICES_DATA.filter((service) => service.category === category);

  return (
    <section className="site-container pb-24 lg:pb-32" aria-label="Explore our services">
      <div className="mb-10 flex flex-wrap gap-2 border-b border-line pb-7" role="group" aria-label="Filter services by category">
        {categories.map((item) => {
          const count = item === "All" ? SERVICES_DATA.length : SERVICES_DATA.filter((service) => service.category === item).length;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              aria-controls="service-results"
              onClick={() => { setCategory(item); setFiltered(true); }}
              className={`inline-flex min-h-11 items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-colors ${category === item ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-ink hover:text-ink"}`}
            >
              {item}<span className={`text-[11px] ${category === item ? "text-white/60" : "text-subtle"}`}>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" role="status" aria-live="polite">Showing {services.length} {category === "All" ? "services" : `${category} services`}.</p>
      <div id="service-results" key={category} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.id} style={cssVars({ "--i": index })} className={`${filtered ? "filter-enter " : ""}group rounded-[22px] border border-line bg-white transition-colors hover:border-brand/35 hover:bg-[#fffdfb]`}
            >
              <Link href={`/services/${service.id}`} className="flex h-full flex-col rounded-[22px] p-7 sm:p-8" aria-label={`Explore ${service.name}`}>
                <div className="mb-12 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6f2ee] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <DynamicIcon name={service.icon} size={23} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-subtle">/{service.number}</span>
                </div>
                <span className="mb-3 text-[11px] font-medium uppercase tracking-[0.13em] text-subtle">{service.category}</span>
                <h2 className="mb-4 text-[25px] font-medium leading-[1.2] tracking-[-0.04em] text-ink">{service.name}</h2>
                <p className="mb-8 text-sm leading-7 text-muted">{service.shortDesc}</p>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-5 text-sm font-medium text-ink">
                  Explore service
                  <ArrowUpRight size={19} strokeWidth={1.5} className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </Link>
            </article>
          ))}
      </div>
      <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-dashed border-[#d9d7d2] px-7 py-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4"><Plus size={22} className="shrink-0 text-brand" aria-hidden="true" /><p className="text-sm text-muted">Have a challenge that crosses a few disciplines? That’s where we work best.</p></div>
        <Link href="/contact" className="text-link shrink-0">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
