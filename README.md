# Kingsbridge College

An original, responsive portfolio website for a fictional secondary school in Lagos, Nigeria. Built with Next.js App Router, TypeScript, Framer Motion and Tailwind CSS. Forest green, warm ivory, restrained gold, serif headings and original generated imagery establish the visual direction. The pages use the school's voice, with one notice above the header and fuller portfolio information on the welfare/website-information page. Form completion and newsletter feedback accurately describe their local preview behaviour.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Use Node.js 22 or later for Next.js and Wrangler.

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
- News: category/search filters, empty-state reset, four complete original articles and sharing controls.
- Parents: term dates, calendar download, school hours, uniform, materials, attendance and practical FAQs.
- Prospectus: printable college overview; the browser print dialogue supports saving a PDF.
- Student welfare and website information: distinct school-facing guidance and portfolio/privacy information.
- Custom 404, accessible mobile navigation, site search, four-view campus gallery and newsletter demonstration.

There are 18 content pages, including generated curriculum and article routes. Layouts adapt to desktop, tablet and mobile, with keyboard-operable native dialogs, labelled controls, visible focus, a skip link, semantic landmarks and reduced-motion support.

## Portfolio behaviour

The college, school stories, dates and operational descriptions are prepared for this presentation. The curriculum uses broad Nigerian secondary-school learning areas and makes no accreditation claim. No fee amounts, examination approvals, school address, telephone, email, staff identities or approved welfare policy are invented. These details must be supplied and approved before a client version is published. Transport is omitted until a service is confirmed.

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

The site exports static HTML, client navigation payloads, JavaScript, CSS, images and fonts to `out/`. Cloudflare Workers Assets serves this directory using `wrangler.jsonc`; the small Worker entry point redirects HTTP and HTML aliases before serving the exported assets. No Next.js runtime is required. All content routes are generated at build time, and unknown routes return the custom 404 page. The existing WebP images are served directly without a runtime image optimizer.

Metadata defaults to `https://kingsbridgecollege.corstack.dev`; `NEXT_PUBLIC_SITE_URL` can override it for another deployment. Every content page has a self canonical. `robots.txt` links to the sitemap, which lists all 18 content pages and uses the existing route and article data.

```sh
npm run build
npm start
```

`npm start` previews the exported site with Wrangler. Run the route/link check against the preview at `http://localhost:8787`.

To publish from an authenticated Cloudflare environment:

```sh
npm run deploy
```

In Cloudflare Workers Builds, use `npm run build` as the build command and `npx wrangler deploy` as the deploy command. Use the repository’s `main` branch for the GitHub-connected production build. Keep the existing custom domain attached to the `kingsbridge` Worker. Deploy the contents of `out/`, not `.next/`; a Node.js `next start` build cannot run directly as a Cloudflare Worker.

For a real school, replace illustrative content and dates with approved information, connect enquiry handling and email delivery, establish retention/consent rules, and review the policy copy before launch.

After building, run `node --test scripts/indexing.test.mjs` to verify the exported metadata, sitemap, canonical redirects, client navigation payloads and 404 responses. Publish the committed changes through the connected GitHub build.
