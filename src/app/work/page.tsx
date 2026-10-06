import { PageIntro } from "@/components/PageIntro";
import { WorkGallery } from "@/components/WorkGallery";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";

const title = "Portfolio: Design & Development Concepts";
const description = "See how Alhawaij Tech approaches product design and development through studio concepts for a finance dashboard, an eCommerce store, and a mobile app.";

export const metadata = pageMetadata({ title, description, path: "/work" });

export default function WorkPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ type: "CollectionPage", path: "/work", name: title, description, breadcrumbs: [{ name: "Work", path: "/work" }] })} />
      <PageIntro eyebrow="THE WORK" title={<>Good ideas.<br />Thoughtfully <span className="serif-accent text-brand">made real.</span></>} description="A look inside our approach to digital products. These independent studio concepts explore how thoughtful design and technology can make everyday experiences better." />
      <WorkGallery />
      <CtaBanner />
    </>
  );
}
