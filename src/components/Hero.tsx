import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { cssVars } from "@/lib/css";
import { HeroStage } from "./HeroStage";
import { Magnetic } from "./Magnetic";

const lines: { text: string; accent?: boolean }[][] = [
  [{ text: "Good" }, { text: "ideas." }],
  [{ text: "Great" }, { text: "software.", accent: true }],
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="site-container">
        <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
          <div className="relative z-10">
            <p className="eyebrow hero-fade mb-8" style={cssVars({ "--d": "0ms" })}>Digital product studio</p>
            <h1 id="hero-heading" className="display-xl">
              {lines.map((line, lineIndex) => (
                <span key={lineIndex} className="block">
                  {line.map((word, wordPosition) => {
                    const i = lines.slice(0, lineIndex).reduce((count, previous) => count + previous.length, 0) + wordPosition;
                    return (
                      <span key={word.text} className="hero-word mr-[.22em] last:mr-0">
                        <span style={cssVars({ "--i": i })} className={word.accent ? "serif-accent text-brand" : undefined}>{word.text}</span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>
            <p className="body-copy hero-fade mt-8 max-w-[520px]" style={cssVars({ "--d": "450ms" })}>
              Alhawaij Tech designs and engineers web platforms, mobile apps, and cloud foundations for businesses ready to grow. One connected team, from the first sketch to launch and beyond.
            </p>
            <div className="hero-fade mt-10 flex flex-wrap items-center gap-3" style={cssVars({ "--d": "550ms" })}>
              <Magnetic><Link href="/contact" className="button-primary">Start a project <ArrowUpRight aria-hidden="true" /></Link></Magnetic>
              <Magnetic><Link href="/work" className="button-secondary">View our work <ArrowUpRight aria-hidden="true" /></Link></Magnetic>
            </div>
          </div>
          <HeroStage />
        </div>
        <div className="hero-fade mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 lg:mt-14" style={cssVars({ "--d": "700ms" })}>
          {[
            [`${SERVICES_DATA.length} services`, "Design, engineering, cloud, and growth under one roof."],
            ["One connected team", "Strategy, design, and build stay in the same conversation."],
            ["Beyond launch", "Support, optimization, and the room your product needs to grow."],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="text-[15px] font-semibold tracking-tight">{title}</p>
              <p className="mt-1.5 text-sm leading-6 text-muted">{text}</p>
            </div>
          ))}
        </div>
        <a href="#services" className="label mt-10 hidden items-center gap-2 transition-colors hover:text-brand lg:inline-flex">Scroll to explore <ArrowDown size={14} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
