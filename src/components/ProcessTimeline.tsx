"use client";
import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/data/company";
import { DynamicIcon } from "./DynamicIcon";

export function ProcessTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>("[data-step]");
    if (!items?.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step)); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const progress = PROCESS_STEPS.length > 1 ? active / (PROCESS_STEPS.length - 1) : 1;

  return (
    <section className="border-y border-line bg-surface section-space" aria-labelledby="process-heading">
      <div className="site-container grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)] lg:self-start">
          <p className="eyebrow mb-6">How we work</p>
          <h2 id="process-heading" className="section-title">A clear path from <span className="serif-accent text-brand">“what if”</span> to what’s next.</h2>
          <p className="body-copy mt-8 max-w-[420px]">Collaborative from day one and clear at every step. A process that keeps you part of the picture.</p>
          <p className="mt-12 hidden font-mono text-sm text-subtle lg:block" aria-hidden="true">
            <span className="font-sans text-[clamp(4rem,7vw,6.5rem)] font-medium leading-none tracking-[-0.06em] text-ink">{PROCESS_STEPS[active].number}</span>
            <span className="ml-2">/ {String(PROCESS_STEPS.length).padStart(2, "0")}</span>
          </p>
        </div>
        <div className="relative">
          <div aria-hidden="true" className="absolute bottom-0 left-[19px] top-0 w-px bg-line">
            <div className="process-progress h-full w-full origin-top bg-brand" style={{ transform: `scaleY(${progress})` }} />
          </div>
          <ol ref={listRef} className="flex flex-col">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.number} data-step={index} data-active={index <= active} className="process-item relative pb-16 pl-16 last:pb-0">
                <span aria-hidden="true" className={`absolute left-0 top-0 grid size-10 place-items-center rounded-full border bg-surface transition-colors duration-500 ${index <= active ? "border-brand text-brand" : "border-line-strong text-subtle"}`}>
                  <DynamicIcon name={step.icon} size={17} strokeWidth={1.6} />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-subtle">{step.number} · {step.tagline}</p>
                <h3 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
