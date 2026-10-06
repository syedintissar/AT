import Link from "next/link";
import { TECH_CATEGORIES } from "@/data/company";

const featured = ["Next.js", "React", "TypeScript", "Node.js", "Python", "AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "PostgreSQL", "React Native", "Flutter", "Tailwind CSS"];
const known = new Set(TECH_CATEGORIES.flatMap((category) => category.technologies.map((technology) => technology.name)));
const technologies = featured.filter((name) => known.has(name));

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {technologies.map((name) => (
        <li key={name} className="flex items-center gap-[var(--gap)] whitespace-nowrap text-[clamp(1.375rem,2.4vw,2rem)] font-medium tracking-[-0.04em] text-ink/75">
          {name}
          <span aria-hidden="true" className="size-1.5 rounded-full bg-brand/60" />
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <section aria-labelledby="stack-heading" className="border-y border-line py-10 sm:py-12">
      <div className="site-container mb-8 flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="stack-heading" className="label">The technology we build with</h2>
        <Link href="/about#our-toolkit" className="text-link text-sm!">Explore our toolkit</Link>
      </div>
      <div className="marquee">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
