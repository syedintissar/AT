import type { Metadata } from "next";
import { SITE } from "@/data/company";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  // Set for segments with their own opengraph-image route; explicit config would otherwise win over it.
  ownImage?: boolean;
};

// Next merges metadata shallowly, so openGraph/twitter must be complete objects or root fields are lost.
// Images are set explicitly because a page-level openGraph object replaces the parent's, dropping the
// inherited file-based image.
export function pageMetadata({ title, description, path, type = "website", ownImage = false }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  const image = { url: ownImage ? `${path}/opengraph-image` : "/opengraph-image", width: 1200, height: 630, alt: ownImage ? fullTitle : `${SITE.name}: software development, UI/UX design, and cloud solutions` };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: SITE.name, locale: "en_US", type, images: [image] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
  };
}
