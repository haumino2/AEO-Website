# DSQUARE AI Visibility Checker

Interactive EN/VI prototype for the DSQUARE GEO/AIO lead-generation flow

Website + work email + consent → Google SEO + AI readiness report → email preview → free 30-minute expert review → internal lead list

## Open the prototype

Open `index.html` directly in your browser

For a presentation, open `presenter.html` in the same folder — its separate navigation switches one session between Checker, Email preview and Lead list

The presentation navigation is separate from the customer-facing landing page

## Local development

Requires Node.js 20 or later; no package installation is needed

```sh
npm run build
npm start
```

Open http://127.0.0.1:4176 for the checker or http://127.0.0.1:4176/presenter for presentation mode

Edit `src/app.js` for the interface, bilingual copy and demo behavior, or `src/styles.css` for styling; rebuild to update the standalone `index.html`

## Demo walkthrough

1. Choose EN or VI
2. Use example details or enter a website and email
3. Accept the required Privacy Notice; newsletter consent is separate and starts unchecked
4. Run the sample diagnostic, compare four sample websites and explore Strategy / Technical issues
5. Open the email report preview
6. Use a free-talk CTA to request a free 30-minute review with an illustrative time and language; name, company and country are optional
7. In presentation mode, open Lead list to inspect source attribution, consent, booking details and sales status
8. Try the timeout or daily-limit scenario from the lead workspace, then retry from the checker
9. Reset demo data or refresh the page to start again

## Prototype scope

- All scores and findings are fixed illustrative examples
- No live TOS API, website scan, email delivery, calendar booking or CRM connection is implemented
- User-entered data exists only in the current page's memory; no browser storage is used
- Different tabs or a reload start separate sessions; presentation mode keeps one embedded session across views
- EN/VI covers the landing page, validation, results, email, booking, privacy notice and lead workspace
- Comparison uses three fictional peers; actual AI mentions and competitive research belong to the paid audit
- The original DSQUARE logo is embedded; Funnel Display and Google Sans load from Google Fonts

For production, confirm the provider API contract, replace mock data, connect approved email/calendar/CRM services and review the privacy notice before launch

## Current design and result flow

DSQUARE dark/gold styling, responsive service comparison fields and a prefilled free-talk request form

The report includes a four-site sample comparison, platform priorities, market/website-type controls and technical sub-checks

See DSQUARE-RESTYLE.md and RESULTS-UPGRADE.md for implementation and verification details

## Report categories

- Google SEO basics: Technical, Structured Data, Content Extractability and E-E-A-T
- AI readiness: AI Crawler Access and llms.txt

The same grouping appears on the landing page, sample preview, results, technical details and email report, including mobile EN/VI

Sample totals remain 48/70 + 14/30 = 62/100

See GROUPING-UPDATE.md for mapping, scope and verification
