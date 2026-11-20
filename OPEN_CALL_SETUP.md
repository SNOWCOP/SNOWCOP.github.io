# SNOWCOP Open Call page: current setup

The page is `/open-call/`, implemented in `docs/src/open-call/README.md`. It receives no submissions itself: applications are sent to earth.observation@eurac.edu. The downloadable call PDF is `docs/src/.vuepress/public/open-call/SNOWCOP_Open_Call.pdf`, served at `/open-call/SNOWCOP_Open_Call.pdf`.

## Current content

- EUR 39,000 total, up to four pilots, EUR 9,750 per pilot.
- Cut-offs: 21 December 2026, 18 January 2027 and 15 February 2027; each at 17:00 Brussels time.
- Earlier cut-off rounds have priority. Within each round selection follows quality ranking. No budget or places are reserved for later rounds; the call closes when all places or budget are allocated.
- Later cut-offs allow revised applications after feedback. Revisions do not retain the original priority. No automatic carry-over.
- Five application sections within five A4 pages; four scored criteria, each with a 3/5 threshold and 15/20 overall.
- Current PDF: exact, unmodified copy of the user-supplied SNOWCOP_cascade_funding_call-2.pdf. Do not regenerate it or substitute the earlier PDF. The PDF itself retains a draft status and an opening-date placeholder.
- Resolve the duration discrepancy before publication: summary page 2 says 8 months; section 6/page 5 and timetable/page 10 say 10 months. The website therefore states only the 31 August 2027 completion deadline until confirmed.

## Before opening

1. Confirm and publish the actual opening date. The page deliberately does not invent one and remains marked in preparation, with noindex/nofollow metadata.
2. Supply the approved application form and required declarations. No detailed itemised budget is requested. Add real download links once these exist; there are no fake template links.
3. Resolve the PDF duration discrepancy and confirm the opening date/status. If the user supplies a corrected PDF, replace the download at the same path with those exact bytes. Do not regenerate the attached PDF.
4. Reconcile the website, PDF, application form and Funding & Tenders Portal entry, including cut-off dates, first-round priority, resubmission rules and early closure. Check grant-specific publication/opening-period requirements against the actual dates.
5. Confirm mailbox monitoring, external attachment delivery, a submission register, receipt acknowledgements, version handling, restricted evaluator access and the institution-approved applicant privacy notice. None is automated by a website email link.
6. Update the status banner and repeated not-open notices and remove noindex/nofollow when the call is actually open. If adding a submission mailto button, explain that attachments must be added and the message sent manually.

## Keeping the page current

After award decisions, publish the availability of subsequent rounds. When the four places are allocated or the budget is committed, replace the status with Closed, explain that remaining cut-offs will not take place, and notify affected applicants. Do not close rounds automatically based only on receipt counts.

The existing workflow deploys pushes to main. Review on the local feature branch and use `cd docs`, `npm ci`, `npm run dev` for the preview; `npm run build` checks the VuePress build. The preview route is normally http://localhost:8080/open-call/.

This change does not publish the website, send email or change mailbox settings.
