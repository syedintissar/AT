import { SITE } from "@/data/company";

type Crumb = { name: string; path: string };
type PageType = "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";

const absolute = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);

export function webPageJsonLd({ type = "WebPage", path, name, description, breadcrumbs }: { type?: PageType; path: string; name: string; description: string; breadcrumbs: Crumb[] }) {
  const trail = [{ name: "Home", path: "/" }, ...breadcrumbs];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${absolute(path)}#webpage`,
        url: absolute(path),
        name,
        description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#organization` },
        breadcrumb: { "@id": `${absolute(path)}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absolute(path)}#breadcrumb`,
        itemListElement: trail.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, name: crumb.name, item: absolute(crumb.path) })),
      },
    ],
  };
}
