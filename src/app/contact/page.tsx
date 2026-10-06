import { Suspense } from "react";
import { Contact } from "@/components/Contact";
import { ContactWithQuery } from "@/components/ContactWithQuery";
import { PageIntro } from "@/components/PageIntro";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";

const title = "Contact Us: Start Your Software Project";
const description = "Tell us about your project. Contact Alhawaij Tech by email or phone, or visit our offices in St. Petersburg, Florida and Islamabad, Pakistan.";

export const metadata = pageMetadata({ title, description, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ type: "ContactPage", path: "/contact", name: title, description, breadcrumbs: [{ name: "Contact", path: "/contact" }] })} />
      <PageIntro
        eyebrow="Let's talk"
        title={<>Your next chapter<br />starts with <span className="text-brand">a hello.</span></>}
        description="Tell us where you want to go. We'll help you figure out how to get there."
      />
      {/* Static HTML ships the full form; the ?service= preselection is applied on the client. */}
      <Suspense fallback={<Contact />}>
        <ContactWithQuery />
      </Suspense>
    </>
  );
}
