"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/company";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
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
    const onClick = (event: MouseEvent) => { if (event.target instanceof Node && !menuRef.current?.contains(event.target) && !toggleRef.current?.contains(event.target)) setOpen(false); };
    window.addEventListener("keydown", onKey); window.addEventListener("resize", onResize); document.addEventListener("click", onClick);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); document.removeEventListener("click", onClick); };
  }, [open]);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return <header className="site-header"><div className="site-container flex h-[84px] items-center justify-between gap-8"><Link href="/" aria-label="Alhawaj Tech home" onClick={() => setOpen(false)}><Image src="/logo.png" alt="Alhawaj Tech" width={149} height={61} priority className="h-auto w-[139px]" /></Link><nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} className="nav-link" aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>)}</nav><Link href="/contact" className="button-primary hidden min-h-[43px]! px-4! py-2.5! sm:inline-flex">Let’s talk <ArrowUpRight size={16} /></Link><button ref={toggleRef} type="button" className="rounded-md border border-[#e8e7e4] p-2.5 lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>{open && <div ref={menuRef} id="mobile-navigation" className="absolute top-full right-0 left-0 border-b border-[#e8e7e4] bg-[#faf9f6] shadow-xl shadow-[#171a3b08] lg:hidden"><nav aria-label="Mobile navigation" className="site-container flex flex-col gap-1 py-5">{NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={active(item.href) ? "page" : undefined} className={`rounded-md px-3 py-3.5 text-sm ${active(item.href) ? "bg-[#eeecf4] font-semibold text-[#bd0a2f]" : "text-[#626375]"}`}>{item.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button-primary mt-3">Start a project <ArrowUpRight /></Link></nav></div>}</header>;
}
