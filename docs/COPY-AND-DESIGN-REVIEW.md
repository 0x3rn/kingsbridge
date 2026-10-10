# School copy and design revision

10 October 2026 · Prospectus version 3

All 18 content pages now speak in the voice of a Nigerian secondary school. Navigation, headings, calls to action, subject descriptions, FAQs, news and form labels follow the supplied revision. The forest-green and cream identity, crest, serif headings, image-led overviews and compact task/reference layouts are retained.

One discreet notice above the header explains that Kingsbridge is a fictional portfolio preview. The welfare page separates school-facing guidance from fuller website information about forms, downloads, subscriptions, images and hosting. Image captions identify activities; repeated concept labels and developer instructions have been removed from ordinary school content. The prospectus uses a conventional six-section structure with a small preview statement on its final printed page.

Admission enquiries, visit requests and contact enquiries still use browser memory and local text downloads. Their final actions save a summary, and their completion messages explicitly say the preview has not sent anything or booked an appointment. No subscription is created. Required/optional labels, field errors, editing, Back navigation and clearing on refresh are retained. The former demo acknowledgment is removed to match the revised review screens.

## Verification

- Production build, lint, type checks and indexing/redirect tests pass.
- All 18 pages, 237 section links, linked assets, the six-event calendar and HTTP 404 handling pass the local Cloudflare Worker route check.
- Chromium checks cover all 18 pages at 360px, 390px and 1440px widths with no page overflow, plus the supplied page titles and copy/disclosure placement.
- Automated axe checks report no WCAG A/AA violations across all 18 pages at 360px. This is not a formal accessibility certification or a substitute for screen-reader and real-device testing.
- Menu/search/gallery keyboard checks cover Escape dismissal, return focus and native radio selection. Search singular/plural results, section targets, empty results, curriculum/news filtering and resets pass.
- All three enquiry flows validate, preserve edits, save/download local summaries and clear on refresh. Entered details stay out of network requests, including native submissions with JavaScript disabled.
- Enlarged-text checks pass for the enquiry form, parent information and welfare/website information. The term table remains keyboard-scrollable.
- The revised prospectus prints to three A4 pages with contents, version/date and page numbers. The cover, section flow and final-page disclosure were inspected. The action opens the browser print dialogue.
- Canonical metadata, the 18-page sitemap, robots information, public social image URL, HTTPS/HTML-alias redirects and client navigation are retained.

## Information needed for a client version

No school address, telephone, email, office hours, principal, founding date, staff profile, fee amount, admission deadline, examination approval or approved welfare policy has been invented. Verified details must be supplied and approved before client publication. The contact and prospectus pages omit unavailable address/telephone/email fields; the welfare page omits an unverified reporting contact or policy link. School transport is omitted until its provision and arrangements are confirmed. The retained term dates and school hours belong to this disclosed presentation and must be replaced with the intended school's approved information.

Human parent usability testing remains to be carried out: ask parents to identify the classes, find JSS1 requirements, school hours and term dates, and explain what the preview form does.
