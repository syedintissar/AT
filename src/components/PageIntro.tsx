import { Reveal } from "./Reveal";
export function PageIntro({ eyebrow, title, description, children }: { eyebrow: string; title: React.ReactNode; description: string; children?: React.ReactNode }) {
  return <section className="page-intro site-container"><Reveal><p className="eyebrow mb-6">{eyebrow}</p><h1>{title}</h1><p className="body-copy mt-6 max-w-2xl">{description}</p>{children && <div className="mt-7">{children}</div>}</Reveal></section>;
}
