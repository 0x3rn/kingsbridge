# Copy and design revision

10 October 2026 · Guide version 2

The revision applies the supplied replacement copy across all 18 content pages. It retains the forest green, cream, muted gold, crest and local serif/sans-serif fonts, with different layouts for overviews, decision guides, forms/reference pages and reading/print content.

School type, year groups and imagined location are explicit near the opening. Demo status precedes forms and article bodies. Admission requirements, school costs, school-day times and example term dates have direct section links. Closing actions are contextual, with one primary action and one secondary link; forms and privacy have no promotional closing banner. Existing article URLs are retained.

## Verification

- `npm run lint`, `npm run typecheck` and a clean `npm run build` pass.
- The Cloudflare preview route check reaches all 18 pages and validates 185 anchors, linked assets, the six-event example calendar and HTTP 404 handling.
- Chromium checks cover desktop and 360px/390px mobile layouts, navigation, search singular/plural wording, section results, curriculum/news filters and empty states.
- Keyboard checks cover native dialog focus containment, Escape dismissal, return focus, and the gallery's radio-button arrow-key selection.
- All three form modes validate invented details, preserve values when editing, require the demo acknowledgment, download a local text summary and clear on refresh. No application, visit booking or enquiry message is sent.
- Automated axe checks report no WCAG A/AA violations across the 18 pages. These checks are not a formal accessibility certification or a substitute for screen-reader and real-device review.
- Enlarged-text checks cover the admissions form, parent information and privacy. The term table scrolls within its labelled keyboard-focusable region.
- Body, supporting, gold-label and footer text contrast ratios are approximately 11.6:1, 6.1:1, 5.4:1 and 9.8:1 respectively. Form/filter boundary contrast is approximately 3.8:1 against white. Image text uses dark overlays and was reviewed visually.
- The guide prints to five A4 pages with contents, a version/date, page numbers, illustrative labels and readable text. The web action uses the browser print dialog; no pre-generated PDF download is promised.
- Open Graph metadata uses the public origin and an absolute image URL. The public campus image returns HTTP 200.

## Parent validation exercise

Human participant testing remains to be carried out. Give parents these tasks without explaining the site first:

1. Identify the year groups.
2. Find JSS1 entry requirements.
3. Find school-day times.
4. Find term dates.
5. Explain what the application form does.

Observe hesitation and ask what they expect each main button to do. Success means they find the information and understand that the school, dates and forms are fictional demonstrations.

Actual school offerings, fees, accreditation, staff, contact routes and operating arrangements still require verified source material before this project could represent a real school.
