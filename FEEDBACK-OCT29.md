# Taka feedback implementation — 29 October 2026

Selected IDs: 1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 29, 30, 32, 36, 37

## Implemented in the prototype

- White background; navy #13203F; cyan #00AEEF; light gray #F2F4F8 and borders #D5DAE3
- Cyan primary CTAs with navy text, updated report/review labels, DSQUARE operator and footer contact
- VI default and EN language switch; JA placeholder disabled pending the separate translation task #6
- Mobile single column, report CTA fixed at bottom and fullscreen booking dialog
- Business-language criterion names with technical subtitles and keyboard/touch-focus tooltips
- Updated hero, public-signal explanation, optional unchecked newsletter
- Corrected consumer statistics: 58% replacing search for recommendations, approximately 75% open to Gen AI recommendations; source text without a link
- Signal order: Crawler / llms.txt / Content / Structured Data / E-E-A-T / Technical
- Only Structured Data, E-E-A-T and Technical have SEO labels; LP cards show no scores
- Numbers strip and explicit price column with pricing discussed at review
- One readiness score /100, no separate SEO subtotal
- Optional preferred day/time captured with the existing required Name/Company fields
- `?mode=production` hides example-fill control and removes sample booking microcopy; this is a presentation configuration, not a live integration
- AI-first wording in EN/VI
- Pre-rendered Vietnamese HTML; no external fonts/images; deferred JS and external versioned CSS
- Separate result/report routes with static noindex,nofollow, no sensitive data in URLs, no result links in a sitemap

## Completion boundaries

The service is still a frontend prototype: there is no TOS API, live diagnostic, real competitor selection, email delivery, calendar booking or CRM. Timing/email microcopy is explicitly qualified as the planned live service. Fixed result scores are retained as samples.

#5 remains In progress until JA is provided in #6. #36 static rendering and reduced asset dependencies are implemented; PageSpeed verification is recorded separately after deployment and must not be claimed without a successful run.

Other selected items are complete at the agreed prototype level. Real timings, TOS scoring contract and production notifications remain separate integration work.

## Validation

EN/VI report flow, privacy validation, preferred-time capture, table score totals (62/86/82/77), white email preview, 375px form visibility, sticky CTA and fullscreen booking dialog verified in the browser. Repeated report-tab changes retain exactly one sticky CTA.

Static HTML contains the hero, entry form and all six business labels without running client JS. Result/report documents contain noindex,nofollow before JavaScript executes. No production performance score has been assumed.
