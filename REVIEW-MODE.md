# Presentation review mode

Add `?review=1` to the site URL (or `&review=1` alongside existing parameters)

- Desktop: hover a marked area, then click its Feedback label
- Mobile: labels stay visible; tap to expand
- Keyboard: Tab to a label, Enter to expand, Escape to dismiss
- Click outside an annotation to close it
- Exit returns to the same path/query/hash without review mode
- Notes use English and original feedback IDs, with requested change, current implementation and remaining integration work
- Notes follow rerenders, language changes, result tabs, booking and confirmation
- Regular mode has no annotation markup, outlines or dock
- Tracker is not changed or synchronized; annotations are a curated snapshot, not live statuses

Theme notes distinguish the initial full-white request from the later dark-page/light-card direction
Email delivery, live scoring, automatic competitor selection and other unfinished work are explicitly qualified

Validation: local desktop and 375px mobile checks, native disclosure opening, Escape dismissal, result-to-booking journey, normal-mode exit, EN/VI rendering and optional booking submission tests, static build
