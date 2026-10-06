import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { WorkGallery } from "@/components/WorkGallery";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Work | Al-Hawaij Tech",
  description: "Explore Al-Hawaij Tech studio concepts across web platforms, e-commerce, and mobile experiences. A closer look at how we think, design, and build.",
};

export default function WorkPage() {
  return <><PageIntro eyebrow="THE WORK" title={<>Good ideas.<br />Thoughtfully <span className="font-serif italic text-[#bd0a2f]">made real.</span></>} description="A look inside our approach to digital products. These independent studio concepts explore how thoughtful design and technology can make everyday experiences better." /><WorkGallery /><CtaBanner /></>;
}
