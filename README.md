# Dinesh D — Portfolio Site

A dark-themed, premium SaaS-style portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion. Built for an AI Automation Engineer / n8n Specialist / Data Engineer targeting business owners, startups, agencies, real estate companies, and SMEs.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` config — see `app/globals.css`)
- **Framer Motion** for scroll/entrance animations and the hero pipeline visualization
- **Lucide React** for icons (+ two custom hand-coded icons for GitHub/LinkedIn — see note below)
- Self-hosted variable fonts (Space Grotesk, Inter, JetBrains Mono) — no Google Fonts runtime dependency

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start         # serve the production build
```

## ⚠️ Before you launch — replace these placeholders

Everything content-related lives in **`lib/data.ts`**. Search that file for `TODO` to find:

1. **`SITE.email`** — currently `hello@dineshd.dev`
2. **`SITE.bookingUrl`** — currently a placeholder Cal.com link; point it at your real scheduling link
3. **`SITE.social.linkedin`** / **`SITE.social.github`** — placeholder URLs
4. **`TESTIMONIALS`** — three placeholder quotes; swap in real client testimonials as you collect them
5. **`siteUrl`** in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` — currently `https://dineshd.dev`; update to your real production domain once you have one

## Project screenshots

Real screenshots from your n8n workflows are already wired in under `public/projects/`:

- `project1-workflow.jpg` / `project1-chat.jpg` — Real Estate AI Lead Assistant System
- `project2-workflow.jpg` — Fiverr Lead Gen (cold email + follow-up)
- `project3-workflow.jpg` — Gaming Hub Booking automation

They were cropped from your original screen captures to remove browser/taskbar chrome. If you want to swap in cleaner captures later, replace the files in `public/projects/` (same filenames) — no code changes needed. The project copy/case-study details live in the `PROJECTS` array in `lib/data.ts`, including the `images[].caption` and `alt` text shown under each screenshot in the modal.

## Contact form

The form at `#contact` posts to `app/api/contact/route.ts`. Right now that route **validates the submission but doesn't deliver it anywhere** — open that file for three documented options (Resend, an n8n webhook — the most "on brand" choice given your stack, or a service like Formspree).

## Editing content

Almost everything is centralized in `lib/data.ts`: nav links, hero copy, about section, services, projects, tech stack, "why work with me" cards, testimonials, and contact headline. Component files under `components/` generally just render that data — you shouldn't need to touch JSX for routine copy edits.

## Deployment

This is a standard Next.js app — it deploys cleanly to **Vercel** (zero-config), or anywhere that supports Node.js (Render, Railway, a VPS with `npm run build && npm start`, etc.).

## Notes

- `lucide-react`'s current major version dropped brand/logo icons (GitHub, LinkedIn, etc.) for trademark reasons, so those two icons are hand-coded SVGs in `components/icons.tsx`.
- Fonts are self-hosted (`app/fonts/`) rather than loaded from Google Fonts at build/runtime — faster, more reliable, and license text is bundled in `app/fonts/LICENSE.txt` (all three are SIL Open Font License).
