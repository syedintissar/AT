import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a product idea or a technology challenge? Tell Alhawaj Tech about your project and start a conversation about design, development, cloud, and more.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Let's build something great | Alhawaj Tech",
    description: "Start a conversation about your next digital project with Alhawaj Tech.",
    url: "/contact",
  },
};

export default async function ContactPage({ searchParams }: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const params = await searchParams;
  const selectedService = Array.isArray(params.service) ? params.service[0] : params.service;

  return (
    <>
      <PageIntro
        eyebrow="Let's talk"
        title={<>Your next chapter<br />starts with <span className="text-[#bd0a2f]">a hello.</span></>}
        description="Tell us where you want to go. We'll help you figure out how to get there."
      />
      <Contact key={selectedService ?? "general"} preselectedService={selectedService} />
    </>
  );
}
