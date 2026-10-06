"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { cssVars } from "@/lib/css";

const filters = ["All work", "Web platforms", "Commerce", "Mobile apps"] as const;

export function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All work");
  const [filtered, setFiltered] = useState(false);
  const projects = activeFilter === "All work" ? PROJECTS : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section className="site-container pb-24" aria-label="Project concepts">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-line pb-7">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map(filter => <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => { setActiveFilter(filter); setFiltered(true); }} className={`min-h-11 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${activeFilter === filter ? "border-ink bg-ink text-white" : "border-line bg-transparent text-muted hover:border-ink hover:text-ink"}`}>{filter}</button>)}
        </div>
        <span className="text-sm text-muted" role="status">{projects.length} {projects.length === 1 ? "studio concept" : "studio concepts"}</span>
      </div>
      <div key={activeFilter} className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.slug} style={cssVars({ "--i": index })} className={filtered ? "filter-enter" : undefined}>
            <Link href={`/work/${project.slug}`} className="group block rounded-[20px]" aria-label={`Explore ${project.title}, ${project.category} studio concept`}>
              <ProjectVisual variant={project.variant} />
              <div className="mt-6 flex items-start justify-between gap-4">
                <div><div className="mb-2 flex items-center gap-3"><h2 className="text-2xl font-semibold tracking-tight text-ink">{project.title}</h2><span className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">Studio concept</span></div><p className="max-w-sm text-[15px] leading-relaxed text-muted">{project.description}</p><p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-muted">{project.discipline}</p></div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white"><ArrowUpRight size={20} aria-hidden="true" /></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
