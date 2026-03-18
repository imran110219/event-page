# Ex Students of Jhikargacha Govt. M L Model High School Events Landing Page (Astro)

A static-first, production-ready Astro + TypeScript + Tailwind landing page focused on showcasing upcoming events.

## Features

- Astro latest stable (`latest` tag in `package.json`)
- TypeScript with a typed event model
- Tailwind CSS with a customizable brand color system
- Component-based architecture
- Future-event filtering and nearest-date sorting
- Featured events + full upcoming list
- Static event detail pages generated from local data
- Sticky transparent navbar that changes on scroll
- Section reveal animations and card hover motion
- SEO basics: title, meta description, Open Graph, Twitter card, favicon
- Mobile-first responsive layout with accessible structure

## Project Structure

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CTASection.astro
│   │   ├── EmptyState.astro
│   │   ├── EventCard.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   └── SectionHeader.astro
│   ├── data/
│   │   ├── events.ts
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── events/
│   │   │   └── [slug].astro
│   │   ├── 404.astro
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── event.ts
│   ├── utils/
│   │   ├── date.ts
│   │   └── events.ts
│   └── env.d.ts
├── astro.config.mjs
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## How to Update Events

Edit [`src/data/events.ts`](src/data/events.ts).

Each event uses this shape:

```ts
interface EventItem {
  id: string;
  title: string;
  slug: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  category:
    | "seminar"
    | "workshop"
    | "conference"
    | "community meetup"
    | "webinar"
    | "training session";
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  registrationUrl: string;
  coverImage: string;
  status: "upcoming" | "cancelled" | "draft";
  limitedSeats?: boolean;
}
```

Important behavior:

- Only events with `status: "upcoming"` and a future `date` appear on the site.
- Events are auto-sorted by nearest date first.
- Up to 3 featured events are shown in the featured section.
- `/events/[slug]` pages are generated statically from upcoming event data.

## How to Change Branding / Colors / Content

- Organization profile and contact details: `src/data/site.ts`
- Global colors, typography, shadows, animation tokens: `tailwind.config.cjs`
- Backgrounds and shared design tokens: `src/styles/global.css`
- Hero copy and section order: `src/pages/index.astro`

## Deployment

This is a static Astro project. Deploy the built `dist/` output to any static host (Netlify, Vercel static output, GitHub Pages, Cloudflare Pages, S3 + CDN, etc.).
