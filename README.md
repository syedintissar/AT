# Alhawaj Tech

A light, responsive software agency website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run dev -- --port 3100` for an alternate port.

```sh
npm run lint
npm run build
npm start
```

## Pages and content

- `/`: introduction, capabilities, studio projects, process, and insights.
- `/services`: 12 services with category filtering; `/services/[slug]` contains each service's deliverables and related expertise.
- `/work`: filterable studio gallery; `/work/[slug]` describes each original product concept.
- `/about`: approach, values, process, and expandable technology groups.
- `/insights`: original articles; `/insights/[slug]` provides full articles with linked contents.
- `/contact`: inquiry builder with validation, service preselection, email draft, clipboard copy, and FAQ.

Edit services in `src/data/services.ts`, projects in `src/data/projects.ts`, articles in `src/data/insights.ts`, and navigation/contact email in `src/data/company.ts`.

The Work projects are explicitly labeled **studio concepts**, not client case studies. Replace them with verified projects when available. The original placeholder address and phone number are not displayed.

The contact form prepares an email draft addressed to the existing `contact@alhawajtech.com` address; it does not send or store inquiries on a server. Visitors review the draft and open their email app to send it, or copy it manually. Service links preselect the inquiry with `?service=...`. Connecting direct submission later requires a real delivery provider/backend.

## Design and motion

Warm white surfaces, navy text, and the original red brand accent. Original CSS product mockups and a pointer-responsive layered hero illustration avoid external image dependencies. Motion includes section reveals, route entrances, animated filtering, floating hero elements, and hover effects. Operating-system reduced-motion settings and the footer's Pause motion control are respected.

Research references: [thoughtbot](https://thoughtbot.com/) for clear services and project narratives, and [Netguru](https://www.netguru.com/) for capability organization and product presentations. The layout, artwork, and copy in this site are original.

Geist and Geist Mono Latin variable fonts are served locally from `public/fonts`, copied from the installed Next.js distribution. Their SIL Open Font License is included in `public/fonts/OFL.txt`. Builds no longer require Google Fonts access.

Every content route has its own title and canonical URL, and `src/app/sitemap.ts` enumerates actual pages. Production metadata currently uses the existing `https://alhawajtech.com` domain.
