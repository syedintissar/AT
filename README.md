# Alhawaij Tech

A light, responsive software agency website built with Next.js App Router, TypeScript, and Tailwind CSS. No animation library: motion is CSS plus a few small client components.

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

The Work projects are explicitly labeled **studio concepts**, not client case studies. Replace them with verified projects when available.

Contact details (email, phones, US and Pakistan offices, LinkedIn/Instagram/Pinterest) match those published on www.alhawaijtech.com and live in `CONTACT_INFO` in `src/data/company.ts`. Facebook is omitted because the live site links two different handles.

The contact form prepares an email draft addressed to `alhawaijtech@gmail.com`; it does not send or store inquiries on a server. Visitors review the draft and open their email app to send it, or copy it manually. Service links preselect the inquiry with `?service=...`. Connecting direct submission later requires a real delivery provider/backend.

## Design and motion

Design tokens (colors, fonts, easing) live in the `@theme` block of `src/app/globals.css` and are available as Tailwind utilities (`bg-night`, `text-muted`, `border-line`, …). Shared component classes (`button-primary`, `eyebrow`, `section-title`, …) sit in `@layer components`, so utilities can override them without `!`. Light paper sections alternate with deep-navy (`on-night`) sections for featured work, the closing CTA, and the footer.

Motion: CSS staggered hero headline (on phones it stays visible from the first frame so it can be the LCP element), CSS + IntersectionObserver scroll reveals (content is visible in the server HTML and only hidden once JS can reveal it), CSS scroll-driven scaling for project showcases (`animation-timeline: view()`, a no-op where unsupported), an IntersectionObserver process timeline, requestAnimationFrame counters, pointer-driven magnetic CTAs and hero tilt (mouse only), a CSS mobile menu, and CSS filter transitions. Operating-system reduced-motion settings and the footer's Pause motion control are respected. Page H1s never sit inside `Reveal`, and the page-entry animation is transform-only, so headings paint immediately.

Homepage statistics are computed from `src/data` (service count, technology disciplines, toolkit size, process stages), so they cannot drift from the content. There are no client logos or testimonials yet; add real ones before adding those sections.

Research references: [thoughtbot](https://thoughtbot.com/) for clear services and project narratives, and [Netguru](https://www.netguru.com/) for capability organization and product presentations. The layout, artwork, and copy in this site are original.

Geist and Geist Mono Latin variable fonts are served locally from `public/fonts`, copied from the installed Next.js distribution. Their SIL Open Font License is included in `public/fonts/OFL.txt`. Builds no longer require Google Fonts access.

## SEO

- **Metadata:** every route uses `pageMetadata()` in `src/lib/metadata.ts` (canonical URL plus complete Open Graph/Twitter objects; Next merges metadata shallowly). Service SEO titles and descriptions live in `SERVICE_SEO` in `src/data/services.ts`; projects and articles have `seoTitle`/`seoDescription` fields.
- **Share images:** generated 1200×630 cards: `src/app/opengraph-image.tsx` (default) and `opengraph-image.tsx` under `services/[slug]`, `work/[slug]`, and `insights/[slug]`, all drawn by `src/lib/og.tsx`.
- **Structured data:** Organization + WebSite (root layout, with real addresses, phones, and social profiles); a typed WebPage + BreadcrumbList on every other page (`src/lib/structured-data.ts`); plus Service, CreativeWork, or Article on detail pages. Detail pages show a visible breadcrumb trail that matches.
- **Crawling:** `src/app/sitemap.ts` and `src/app/robots.ts` use `SITE.url` (`https://www.alhawaijtech.com`).
- **Redirects** (`next.config.ts`, permanent 308): bare domain → `www`, and the previous site's `/index.php`, `/about-us`, `/contact-us`, `/get-services` → their equivalents.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID (`G-…`). Analytics loads only when set. |
| `GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag token. Emits `google-site-verification` only when set. |

Both are read at build time; nothing is tracked or verified without them.
