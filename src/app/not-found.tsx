import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return <section className="site-container py-28 text-center"><p className="mb-5 font-mono text-sm text-brand">404 / A little off the map</p><h1 className="section-title">Let’s get you back on track.</h1><p className="body-copy mx-auto mt-5 max-w-md">This page may have moved, or the link might be incomplete. There’s plenty more to explore.</p><Link className="button-primary mt-8" href="/">Back to home <ArrowUpRight /></Link></section>;
}
