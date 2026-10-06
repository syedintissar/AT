"use client";
import { useSearchParams } from "next/navigation";
import { Contact } from "./Contact";

export function ContactWithQuery() {
  const service = useSearchParams().get("service") ?? undefined;
  return <Contact key={service ?? "general"} preselectedService={service} />;
}
