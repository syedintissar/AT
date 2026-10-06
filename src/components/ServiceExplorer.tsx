"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { DynamicIcon } from "@/components/DynamicIcon";
import { SERVICES_DATA } from "@/data/services";
import { useMotionPreference } from "@/components/MotionProvider";

const categories = ["All", "Engineering", "Design & UX", "Cloud & Security", "Growth & Marketing"] as const;
type Category = (typeof categories)[number];

export function ServiceExplorer() {
  const [category, setCategory] = useState<Category>("All");
  const systemReduceMotion = useReducedMotion();
  const { paused } = useMotionPreference();
  const reduceMotion = systemReduceMotion || paused;
  const services = category === "All" ? SERVICES_DATA : SERVICES_DATA.filter((service) => service.category === category);

  return (
    <section className="site-container pb-24 lg:pb-32" aria-label="Explore our services">
      <div className="mb-10 flex flex-wrap gap-2 border-b border-[#e8e7e4] pb-7" role="group" aria-label="Filter services by category">
        {categories.map((item) => {
          const count = item === "All" ? SERVICES_DATA.length : SERVICES_DATA.filter((service) => service.category === item).length;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              aria-controls="service-results"
              onClick={() => setCategory(item)}
              className={`inline-flex min-h-11 items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-colors ${category === item ? "border-[#171a3b] bg-[#171a3b] text-white" : "border-[#e8e7e4] bg-white text-[#6b6d7b] hover:border-[#171a3b] hover:text-[#171a3b]"}`}
            >
              {item}<span className={`text-[11px] ${category === item ? "text-white/60" : "text-[#94949e]"}`}>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" role="status" aria-live="polite">Showing {services.length} {category === "All" ? "services" : `${category} services`}.</p>
      <motion.div id="service-results" layout={!reduceMotion} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {services.map((service) => (
            <motion.article
              key={service.id}
              layout={!reduceMotion}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
              transition={{ duration: reduceMotion ? 0 : 0.28 }}
              className="group rounded-[22px] border border-[#e8e7e4] bg-white transition-colors hover:border-[#bd0a2f]/35 hover:bg-[#fffdfb]"
            >
              <Link href={`/services/${service.id}`} className="flex h-full flex-col rounded-[22px] p-7 sm:p-8" aria-label={`Explore ${service.name}`}>
                <div className="mb-12 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6f2ee] text-[#bd0a2f] transition-colors group-hover:bg-[#bd0a2f] group-hover:text-white">
                    <DynamicIcon name={service.icon} size={23} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-[#94949e]">/{service.number}</span>
                </div>
                <span className="mb-3 text-[11px] font-medium uppercase tracking-[0.13em] text-[#8a8b98]">{service.category}</span>
                <h2 className="mb-4 text-[25px] font-medium leading-[1.2] tracking-[-0.04em] text-[#171a3b]">{service.name}</h2>
                <p className="mb-8 text-sm leading-7 text-[#6b6d7b]">{service.shortDesc}</p>
                <div className="mt-auto flex items-center justify-between border-t border-[#eeedea] pt-5 text-sm font-medium text-[#171a3b]">
                  Explore service
                  <ArrowUpRight size={19} strokeWidth={1.5} className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-dashed border-[#d9d7d2] px-7 py-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4"><Plus size={22} className="shrink-0 text-[#bd0a2f]" aria-hidden="true" /><p className="text-sm text-[#6b6d7b]">Have a challenge that crosses a few disciplines? That’s where we work best.</p></div>
        <Link href="/contact" className="text-link shrink-0">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
