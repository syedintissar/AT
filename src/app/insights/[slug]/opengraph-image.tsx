import { INSIGHTS } from "@/data/insights";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Alhawaij Tech insight";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return INSIGHTS.map((article) => ({ slug: article.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = INSIGHTS.find((item) => item.slug === slug);
  return renderOgImage({ eyebrow: article?.category ?? "Insights", title: article?.title ?? "Insights", subtitle: article?.readTime });
}
