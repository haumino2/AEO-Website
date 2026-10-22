# DSQUARE AEO — brand reflection

Updated 22 October 2026

## Result

The current bilingual prototype now uses the extracted DSQUARE staging visual language throughout the landing page, readiness report, email preview, review form, confirmation and internal lead views

- Near-black #00020D, neutral #1C1C1C surfaces, white type and #ACACAC secondary text
- Gold #FFAF14 actions, selection states, score rings and readiness bars
- Funnel Display headings/actions and Google Sans body stack
- 56px pill actions, 26px primary panel corners, 50px closing CTA frame on desktop
- Larger editorial headings and open content rows with wider section spacing
- Original D² SVG embedded in the app, without a separate text wordmark
- Compact navigation/footer; no new stepper, demo badge or removed helper copy

The checker now sits in the hero's right-hand panel on desktop so the action is visible sooner with larger display type
The sample report remains in its dedicated section below
Mobile uses one column and retains full text labels on actions

## Scope and source

The extraction lives in design-system/
Website-specific form fields, state colours, focus rings, 24px mobile margins and the 1440px content cap are AEO adaptations
They are not claimed as official DSQUARE brand specifications
Readiness scoring, sample data, required privacy consent, separate optional newsletter choice, EN/VI and the expert-review journey are unchanged
No live scan, email delivery, booking or CRM integration was added

## Files

- upgrade-app.js — interactive UI, revised hero and embedded original logo
- upgrade.css — existing component base
- dsquare-brand.css — complete brand layer, including responsive and dialog/internal-view rules
- build-upgrade.mjs — combines both stylesheets and loads both font families
- dsquare_ai_visibility_checker_v2.html — current standalone output
- DSQUARE-Demo-Presenter.html — existing separate presenter, loads the current standalone output
- brand-preview/ — screenshots from browser verification

The publication folder ../aeo-website-publish/ has the same JS, combined styles and standalone HTML
This package contains the reviewed DSQUARE prototype update

Rebuild with: node build-upgrade.mjs
Preview with: node preview-v2.mjs
The local preview uses http://127.0.0.1:4176/
Fonts use Google Fonts; the logo works offline, and font stacks include fallbacks

## Verification performed

- Browser review of desktop landing, generated sample report and email dialog
- VI at390px: fields, consent, booking slots and confirmation
- VI page at320px and390px: no content detected outside horizontal viewport bounds
- Empty checker submission: validation displayed and focus moved to Website URL
- Sample submission: report created; newsletter stayed unchecked
- Email preview opened; review request produced sample confirmation
- Lead workspace showed the requested review status and separate consent choices
- Computed primary action #FFAF14, body Google Sans stack, heading Funnel Display stack
- Responsive CSS preserves visible focus and disables animation/transition for reduced-motion preferences
- JavaScript syntax checks and both standalone builds passed

No claim of a full accessibility audit or live backend verification
