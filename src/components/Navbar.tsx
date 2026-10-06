"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_INFO, NAV_ITEMS } from "@/data/company";
import { cssVars } from "@/lib/css";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 12);
      if (Math.abs(y - lastY) > 6) setHidden(y > lastY && y > 480);
      lastY = y;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links?.length) return;
        if (event.shiftKey && document.activeElement === toggleRef.current) { event.preventDefault(); links[links.length - 1].focus(); }
        else if (!event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); toggleRef.current?.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { root.style.overflow = previousOverflow; window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const close = () => setOpen(false);

  return (
    <header className="site-header" data-scrolled={scrolled} data-hidden={hidden && !open} data-menu={open ? "open" : "closed"}>
      <div className="site-container flex h-full items-center justify-between gap-8">
        <Link href="/" aria-label="Alhawaij Tech home" onClick={close} className="relative z-10 shrink-0">
          <Image src="/logo.png" alt="Alhawaij Tech" width={375} height={153} loading="eager" fetchPriority="high" sizes="140px" className={`h-auto w-[118px] transition-[filter] duration-300 sm:w-[132px] ${open ? "brightness-0 invert" : ""}`} />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} className="nav-link link-underline" aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="button-primary hidden min-h-[46px]! px-5! py-2.5! text-[14px]! sm:inline-flex">Start a project <ArrowUpRight aria-hidden="true" /></Link>
          <button
            ref={toggleRef}
            type="button"
            className={`relative z-10 grid size-12 place-items-center rounded-full border transition-colors lg:hidden ${open ? "border-white/25 text-white" : "border-line-strong text-ink"}`}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
            </span>
          </button>
        </div>
      </div>
      <div ref={menuRef} id="mobile-navigation" className="mobile-menu on-night fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto lg:hidden" data-open={open}>
        <nav aria-label="Mobile navigation" className="site-container flex min-h-full flex-col pb-10 pt-8">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href} className="overflow-hidden border-b border-line-night">
                <div className="mobile-menu-item" style={cssVars({ "--i": index })}>
                  <Link href={item.href} onClick={close} aria-current={active(item.href) ? "page" : undefined} className="flex items-baseline justify-between py-5 text-[clamp(2rem,9vw,3rem)] font-medium leading-none tracking-[-0.045em]">
                    {item.label}
                    <span className={`font-mono text-xs tracking-widest ${active(item.href) ? "text-[#ff8fa5]" : "text-on-night-muted"}`}>0{index + 1}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer mt-auto pt-12">
            <p className="label mb-3 text-on-night-muted!">Have a project in mind?</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium break-all">{CONTACT_INFO.email}</a>
            <Link href="/contact" onClick={close} className="button-light mt-8 w-full">Start a project <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
