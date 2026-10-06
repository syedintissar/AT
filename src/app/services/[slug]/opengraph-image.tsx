import { SERVICES_DATA, SERVICE_SEO } from "@/data/services";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Alhawaij Tech service";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.id === slug);
  return renderOgImage({ eyebrow: service?.category ?? "Services", title: SERVICE_SEO[slug]?.title ?? service?.name ?? "Our services", subtitle: service?.shortDesc });
}
