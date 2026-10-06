import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="site-container pt-8 md:pt-10">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {trail.map((item, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? <span aria-current="page" className="text-ink">{item.name}</span> : <Link href={item.path} className="transition-colors hover:text-brand">{item.name}</Link>}
              {!last && <ChevronRight size={14} aria-hidden="true" className="text-subtle" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
