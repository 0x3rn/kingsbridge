# Kingsbridge College

An original, responsive portfolio website for a fictional secondary school imagined in Lagos, Nigeria. Built with Next.js App Router, TypeScript, Framer Motion and Tailwind CSS. Forest green, warm ivory, restrained gold, editorial typography and original generated imagery establish the visual direction.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Node.js 20.9 or later is required by Next.js.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

After starting a development or production server, run the route/link check:

```sh
node scripts/check-site.mjs http://localhost:3000
```

Biome provides recommended JavaScript, TypeScript, React and Next.js linting. It replaces the original ESLint dependency chain that contained the unpatched `braces` vulnerability. The lockfile is committed for reproducible installations.

## Pages and features

- Home: introduction, learning stages, values, school life, admissions, journal, questions and visit invitation.
- Our college: purpose, educational approach, community and campus.
- Academics: curriculum explorer with combined subject/stage filters, teaching and assessment. Dedicated junior and senior secondary pages.
- School life: activities, sport, arts, leadership, wellbeing and a typical school day.
- Admissions: typical entry requirements, document checklist, assessment, transfers, fees approach and FAQs.
- Apply, visit and contact: guided enquiry experiences with validation, review, back navigation, completion and downloadable text summaries.
- Journal: category/search filters, empty-state reset, four complete original articles and sharing controls.
- Families: illustrative term dates, calendar download, uniform, transport, attendance and practical FAQs.
- Prospectus: printable college overview; the browser print dialogue supports saving a PDF.
- Policies: portfolio privacy information and illustrative safeguarding principles.
- Custom 404, accessible mobile navigation, site search, four-view campus tour and newsletter demonstration.

There are 18 content pages, including generated curriculum and article routes. Layouts adapt to desktop, tablet and mobile, with keyboard-operable native dialogs, labelled controls, visible focus, a skip link, semantic landmarks and reduced-motion support.

## Portfolio behaviour

The college, school stories, dates and operational descriptions are invented. The curriculum is a general Nigerian junior/senior secondary model, not an accreditation claim. No fees, examination approvals, real location or contact details are asserted.

Enquiry forms are deliberately browser-only. They use in-memory state, clear on refresh, and create a local text download. They do not send email, save records, accept payments or reserve a place. The newsletter offers local demonstration feedback only. Use invented details when testing.

## Structure

- `src/app`: page routes, metadata, global styling and root layout.
- `src/components`: shared UI, navigation, footer and client interactions.
- `src/lib/content.ts`: search index, subjects, FAQs, journal articles, dates and daily schedule.
- `public/images`: four optimised original WebP images.
- `public/fonts`: locally served Manrope and DM Serif Display with licence files.
- `public/downloads`: illustrative iCalendar term dates.
- `docs/ASSETS.md`: visual references, image prompts and asset provenance.

## Deployment

Deploy as a Next.js application with `npm run build` and `npm start`, or use a compatible Next.js host. Set `NEXT_PUBLIC_SITE_URL` to the deployed origin before building so Open Graph metadata uses the public URL. Without it, metadata defaults to `http://localhost:3000`. Images and fonts are local; no third-party font requests or image hotlinks are required.

For a real school, replace illustrative content and dates with approved information, connect enquiry handling and email delivery, establish retention/consent rules, and review the policy copy before launch.
