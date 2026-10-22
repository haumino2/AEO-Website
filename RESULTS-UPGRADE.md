# AEO prototype — results and free-talk flow

Updated 22 October 2026 from the supplied result screenshots

## What changed

- Four-row comparison: entered domain plus three fictional peers, overall readiness and six signal columns
- The entered domain is highlighted; the comparison remains explicitly sample data
- Strategy / Technical issues tabs support mouse, touch and arrow-key navigation
- Market and website-type choices change the sample priority order and content guidance
- Eight platform cards include sample readiness checks, suggested actions and crawler review lists
- The top three platforms open first; five more are available through a disclosure section
- Technical issues show sub-checks, earned/max points and suggested actions for all six signals
- WordPress / Shopify / Other changes the implementation context, without claiming CMS detection
- Free-talk actions appear immediately after the comparison and at the end of the result detail
- The contact dialog retains website/email and places name/company before language/time selection
- The existing session-only confirmation, lead status and separate newsletter/privacy choices remain
- Services use a semantic table: Service / Engagement / What you get / Next step
- At mobile widths, services become labelled field groups; only the comparison scrolls horizontally

## Demo data

The entered domain always has the existing fixed 62/100 sample breakdown
Fictional peer-a.example, peer-b.example and peer-c.example use fixed totals 86, 82 and 77
All peer totals equal the sum of their six signal scores
Technical sub-checks add up to the corresponding signal total and maximum
Platform checks are illustrative; their counts do not represent live AI queries or vendor-defined certification
No market-share statistics, third-party authority scores or traffic figures were copied from the screenshots
No live API, scan, email, calendar or CRM call has been added

## Build

Source: upgrade-app.js + results-ui.js
Styles: upgrade.css + dsquare-brand.css + results-ui.css
Build: node build-upgrade.mjs
Output: dsquare_ai_visibility_checker_v2.html
Preview: node preview-v2.mjs

The builder injects results-ui.js at the RESULTS_UI marker inside the existing app closure
The publication folder contains the compiled app and combined stylesheet, with the same standalone output
This package contains the reviewed results and conversion update

## Verification

- Generated the sample result with required privacy and optional newsletter left unchecked
- Tested both tabs and keyboard switching; each tab has a valid labelled panel
- Changed target market to International and website type to E-commerce; priority order changed
- Changed CMS to Shopify; implementation guidance changed
- Navigated to Meta AI from the platform list; the containing group and target card opened
- Completed the free-talk form with sample name/company and an example time; confirmation displayed
- Reviewed the service table at desktop and labelled field groups at390px
- Checked the VI report at320px and390px: document width stayed within the viewport
- Checked four comparison rows, six technical groups and no duplicate DOM IDs
- JavaScript syntax and standalone build checks passed

Screenshots are in results-preview/
This is prototype verification, not a production accessibility or backend audit
