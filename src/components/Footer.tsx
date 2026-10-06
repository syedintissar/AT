import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO, NAV_ITEMS, SITE } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";
import { MotionToggle } from "./MotionToggle";

const footerServices = ["web-development", "mobile-apps", "ui-ux-design", "cloud-computing", "cybersecurity", "ecommerce"]
  .map((id) => SERVICES_DATA.find((service) => service.id === id))
  .filter((service) => service !== undefined);

export function Footer() {
  return (
    <footer className="on-night relative overflow-hidden pt-[clamp(72px,9vw,128px)]">
      <div className="site-container">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1.3fr] lg:gap-10">
          <div className="max-w-sm">
            <Link href="/" aria-label="Alhawaij Tech home" className="inline-block">
              <Image src="/logo.png" alt="Alhawaij Tech" width={375} height={153} sizes="150px" className="h-auto w-[140px] brightness-0 invert" />
            </Link>
            <p className="mt-6 text-[15px] leading-7 text-on-night-muted">A digital product studio. We design, build, and scale web platforms, mobile apps, and cloud foundations for ambitious businesses.</p>
          </div>
          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="label mb-6 text-on-night-muted!">Explore</h2>
            <ul className="flex flex-col gap-3.5">
              <li><Link className="footer-link" href="/">Home</Link></li>
              {NAV_ITEMS.map((item) => <li key={item.href}><Link className="footer-link" href={item.href}>{item.label}</Link></li>)}
            </ul>
          </nav>
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="label mb-6 text-on-night-muted!">Services</h2>
            <ul className="flex flex-col gap-3.5">
              {footerServices.map((service) => <li key={service.id}><Link className="footer-link" href={`/services/${service.id}`}>{service.name}</Link></li>)}
            </ul>
          </nav>
          <div>
            <h2 className="label mb-6 text-on-night-muted!">Start a conversation</h2>
            <a className="group inline-flex items-center gap-2 text-xl font-medium tracking-tight break-all transition-colors hover:text-[#ff8fa5]" href={`mailto:${CONTACT_INFO.email}`}>
              {CONTACT_INFO.email}<ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <ul className="mt-5 flex flex-col gap-2">
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone.href}><a className="footer-link" href={phone.href}><span className="sr-only">{phone.label}: </span>{phone.display}</a></li>
              ))}
            </ul>
            <Link href="/contact" className="button-light mt-8">Start a project <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="grid gap-10 border-t border-line-night py-12 md:grid-cols-[1fr_1fr_auto] md:gap-10">
          {CONTACT_INFO.offices.map((office) => (
            <address key={office.label} className="not-italic">
              <p className="label mb-3 text-on-night-muted!">{office.label}</p>
              <p className="text-[15px] leading-7 text-on-night">{office.lines.map((line) => <span key={line} className="block">{line}</span>)}</p>
            </address>
          ))}
          <nav aria-label="Social media">
            <p className="label mb-3 text-on-night-muted!">Follow</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col">
              {CONTACT_INFO.socials.map((social) => (
                <li key={social.href}><a className="footer-link inline-flex items-center gap-1.5" href={social.href} target="_blank" rel="noopener noreferrer">{social.label}<ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div aria-hidden="true" className="site-container select-none overflow-hidden">
        <p className="footer-wordmark bg-gradient-to-b from-white/[.16] to-white/[.02] bg-clip-text text-transparent">Alhawaij<span className="text-brand/70">.</span></p>
      </div>
      <div className="border-t border-line-night">
        <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-6 text-[13px] text-on-night-muted">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <MotionToggle />
            <a href="#main-content" className="flex min-h-11 items-center gap-2 transition-colors hover:text-white">Back to top <ArrowUp size={13} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
