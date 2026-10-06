import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";

export function FeaturedWork() {
  return (
    <section className="on-night section-space" aria-labelledby="work-heading">
      <div className="site-container">
        <Reveal className="mb-16 grid gap-8 lg:mb-28 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">Selected work</p>
            <h2 id="work-heading" className="section-title">A glimpse of <span className="serif-accent text-on-night-muted">what’s possible.</span></h2>
          </div>
          <div className="lg:max-w-[400px] lg:justify-self-end">
            <p className="body-copy">Original studio concepts that show how we think, design, and build. Each one explores a real product problem from first question to finished interface.</p>
            <Link href="/work" className="text-link mt-5">See all work <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </Reveal>
        <ol className="flex flex-col gap-[clamp(88px,12vw,176px)]">
          {PROJECTS.map((project, index) => {
            const flipped = index % 2 === 1;
            return (
              <li key={project.slug}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                  <Link href={`/work/${project.slug}`} tabIndex={-1} aria-hidden="true" className={`group block lg:col-span-7 ${flipped ? "lg:order-2 lg:col-start-6" : ""}`}>
                    <div className="scroll-scale overflow-hidden rounded-[20px]">
                      <div className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"><ProjectVisual variant={project.variant} /></div>
                    </div>
                  </Link>
                  <Reveal className={`lg:col-span-5 ${flipped ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
                    <div className="mb-8 flex items-center justify-between gap-4 border-b border-line-night pb-5 font-mono text-xs uppercase tracking-[0.12em] text-on-night-muted">
                      <span>{String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}</span>
                      <span>Studio concept · {project.category}</span>
                    </div>
                    <h3 className="display">{project.title}<span className="text-brand">.</span></h3>
                    <p className="mt-6 text-xl leading-snug tracking-tight text-on-night md:text-2xl">{project.description}</p>
                    <p className="body-copy mt-5 text-[15px]!">{project.discipline}</p>
                    <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies and disciplines">
                      {project.stack.map((item) => <li key={item} className="pill">{item}</li>)}
                    </ul>
                    <Link href={`/work/${project.slug}`} className="button-light mt-10">View case study <span className="sr-only">: {project.title}</span><ArrowUpRight aria-hidden="true" /></Link>
                  </Reveal>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
