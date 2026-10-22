# Google SEO basics + AI readiness

Approved prototype grouping, implemented22 October2026

## Shared category definition

Google SEO basics: Technical, Structured Data, Content Extractability, E-E-A-T
AI readiness: AI Crawler Access, llms.txt

One definition in signal-groups.js controls the landing page, sample preview, result summary, comparison-table column order, technical details and email report
The presentation grouping does not change the underlying six-signal sample scoring
Existing weights and totals are retained

- Google SEO basics:48/70
- AI readiness:14/30
- Overall:62/100

The scores describe sample website readiness, not actual Google rankings, traffic or AI mentions
SEO foundations also support AI search; the groups are not independent vendor certification systems
llms.txt is described as optional guidance, not a required condition for search visibility

## UI changes

- Hero now includes Google and AI search
- Landing shows two category panels with four and two signal disclosures
- Mobile renders disclosures collapsed initially; each can be opened independently
- Result shows overall readiness and two category scores
- Comparison has grouped column headers, with the underlying values reordered by the same index mapping
- Technical issues has two sections with their corresponding signal checks and subtotals
- Email shows overall score, two category sections, all six signals and a next action per category
- Free-talk CTA and prefilled report context are preserved
- Paid audit and implementation copy now includes Google SEO
- EN/VI is included across these changes

## Build

build-upgrade.mjs combines signal-groups.js before results-ui.js inside the existing app closure
Styles include signal-groups.css after the existing component and DSQUARE layers
The publication folder contains the same compiled JS/CSS and standalone HTML

## Verification

- Desktop1280px: category panels,48/70 and14/30 summaries, grouped comparison headers
- Comparison order: Technical / Structured Data / Content Extractability / E-E-A-T / AI Crawler Access / llms.txt
- Own-site values:11 /12 /16 /9 /14 /0, summing to62
- All four comparison totals checked against their six displayed values
- Technical detail sub-checks checked against the corresponding signal scores and maxima
- Email contains exactly two categories with four and two rows and matching scores
- VI390px: two stacked categories, initially collapsed disclosures, working expansion
- VI320px: no document overflow; email content fits its scrollable dialog
- Email-to-free-talk button preserves website and email context
- Combined JS syntax and both standalone builds checked

Screenshots: group-preview/
Prototype only; no backend integrations were introduced
