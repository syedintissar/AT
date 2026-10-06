import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/company";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

export function CtaBanner() {
  return (
    <section className="on-night relative overflow-hidden" aria-labelledby="cta-heading">
      <div aria-hidden="true" className="pointer-events-none absolute -right-[20%] top-1/2 aspect-square w-[70%] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(189_10_47/.28),transparent_62%)] blur-2xl" />
      <div className="site-container relative border-b border-line-night pb-[clamp(72px,9vw,128px)] pt-[clamp(88px,11vw,160px)]">
        <Reveal>
          <p className="eyebrow mb-8">Great things start with a conversation</p>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <h2 id="cta-heading" className="display max-w-[14ch]">
              Have an idea? <span className="serif-accent text-on-night-muted">Let’s build</span> something great.
            </h2>
            <Magnetic strength={0.35} className="shrink-0 self-start lg:self-end">
              <Link href="/contact" className="group relative grid size-[clamp(136px,15vw,188px)] place-items-center overflow-hidden rounded-full bg-brand text-center text-[15px] font-medium leading-tight text-white">
                <span aria-hidden="true" className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-white transition-transform duration-[600ms] ease-[var(--ease-out-expo)] group-hover:scale-y-100" />
                <span className="relative flex flex-col items-center gap-2 transition-colors duration-300 group-hover:text-ink">
                  <ArrowUpRight size={26} aria-hidden="true" className="transition-transform duration-500 group-hover:rotate-45" />
                  Start a<br />project
                </span>
              </Link>
            </Magnetic>
          </div>
          <p className="body-copy mt-10 max-w-xl">A new product, a fresh perspective, or a better way forward. Tell us what you’re thinking, or write to <a href={`mailto:${CONTACT_INFO.email}`} className="text-on-night underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">{CONTACT_INFO.email}</a>.</p>
        </Reveal>
      </div>
    </section>
  );
}
