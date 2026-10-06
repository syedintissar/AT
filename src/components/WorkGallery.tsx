"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { useMotionPreference } from "@/components/MotionProvider";

const filters = ["All work", "Web platforms", "Commerce", "Mobile apps"] as const;

export function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All work");
  const reducedMotion = useReducedMotion();
  const { paused } = useMotionPreference();
  const reduceMotion = reducedMotion || paused;
  const projects = activeFilter === "All work" ? PROJECTS : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section className="site-container pb-24" aria-label="Project concepts">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-[#e8e7e4] pb-7">
        <div className="flex flex-wrap gap-2" aria-label="Filter projects">
          {filters.map(filter => <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${activeFilter === filter ? "border-[#171a3b] bg-[#171a3b] text-white" : "border-[#e8e7e4] bg-transparent text-[#6b6d7b] hover:border-[#171a3b] hover:text-[#171a3b]"}`}>{filter}</button>)}
        </div>
        <span className="text-xs text-[#6b6d7b]" role="status">{projects.length} {projects.length === 1 ? "studio concept" : "studio concepts"}</span>
      </div>
      <motion.div layout={!reduceMotion} className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {projects.map(project => (
            <motion.article key={project.slug} layout={!reduceMotion} initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }} transition={{ duration: reduceMotion ? 0 : 0.35 }}>
              <Link href={`/work/${project.slug}`} className="group block rounded-[20px]" aria-label={`Explore ${project.title}, ${project.category} studio concept`}>
                <ProjectVisual variant={project.variant} />
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div><div className="mb-2 flex items-center gap-3"><h2 className="text-2xl font-semibold tracking-tight text-[#171a3b]">{project.title}</h2><span className="rounded-full border border-[#e8e7e4] px-2.5 py-1 text-[10px] text-[#6b6d7b]">Studio concept</span></div><p className="max-w-sm text-sm leading-relaxed text-[#6b6d7b]">{project.description}</p><p className="mt-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#6b6d7b]">{project.discipline}</p></div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#e8e7e4] text-[#171a3b] transition-colors group-hover:border-[#bd0a2f] group-hover:bg-[#bd0a2f] group-hover:text-white"><ArrowUpRight size={20} /></span>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
