import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
export function CtaBanner() {
  return <section className="site-container pb-20"><Reveal><div className="cta-section"><div className="cta-orbit" aria-hidden="true" /><div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow mb-4">Great things start with a conversation</p><h2 className="section-title max-w-xl">Your next big idea.<br /><span className="text-[#77738e]">Our next great collaboration.</span></h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#6b6d7b]">A new product, a fresh perspective, or a better way forward.<br className="hidden sm:block" /> We’d love to hear what you’re thinking.</p></div><Link href="/contact" className="button-primary shrink-0">Let’s build something <ArrowUpRight /></Link></div></div></Reveal></section>;
}
