# Information for Eurac's privacy review

The two notice drafts are structured for the current public website and the email-based SNOWCOP CF call. `CONFIRM` fields are deliberate: the underlying facts have not been established by the website source or the call text. Apply the pages for local review and complete these facts before publication or collection of applications.

Eurac publishes privacy@eurac.edu as its privacy contact and info@himmeladvisors.it as its DPO contact. Confirm which entity is the controller for each operation and whether those DPO details apply to this project. Project coordination or signing sub-grants does not automatically establish every institution's controller/processor role.

| Topic | Confirmation needed |
| --- | --- |
| Website controller | Legal name, postal address, contact, and any joint-controller arrangement. |
| Call controller and roles | Entity/entities responsible for applications and the role of each evaluating, contracting or supporting institution. |
| DPO | Applicable contact details, or a confirmed explanation of applicability. |
| Legal bases | A purpose-specific basis for website delivery/security, correspondence, eligibility/evaluation, procedural review, contracting, payments, accounting/audits and required award publication. |
| Legitimate interests | Specific interests where Article 6(1)(f) is used. |
| Required data | Which fields are necessary, any legal/contractual obligation, and consequences of not providing them. |
| Verification sources | Any sources beyond the applicant and internal evaluation records; categories obtained indirectly and how people will be informed. |
| Recipients | Actual evaluator institutions, administrators, service providers and funding/audit bodies; access scope and appropriate arrangements. |
| Public award information | Exact fields, basis, channels and period, accounting for sole traders or other natural-person recipients. |
| International data flows | Actual access/hosting destinations, recipients, adequacy decisions or safeguards, and how to obtain information/copies. Do not infer that all partners receive every application. |
| Retention | Periods or sufficiently specific criteria and starting events for enquiries, successful/unsuccessful/withdrawn applications, evaluation and procedural-review records, grant/audit records and public awards. |
| Cookies/storage | Live inventory covering cookies, local/session storage and comparable tracking, with purpose, provider, duration and necessity/consent classification. |
| Technical processing | Actual hosting/delivery/security entities, request-data categories, settings and provider/controller retention arrangements. |
| Effective dates | Actual dates when the completed notices become applicable; arrangements for retaining and communicating versions. |

## Points to resolve in the institution's own process

- A legal entity's contractual relationship does not automatically make Article 6(1)(b) the basis for processing every employee or representative's data. Likewise, identify the actual legal obligation if Article 6(1)(c) is used; do not substitute a generic reference to GDPR or the project's contract.
- No fixed retention period was invented. Align the periods with the actual grant, accounting, audit and records-management obligations, including any applicable legal holds.
- An institutional privacy policy is a useful reference, but it should not be copied verbatim if it describes different hosting, cookies, purposes or recipients.
- The email submission route still processes personal data. The applicant notice should be available before submission and supplied with the application materials. If data are received indirectly, assess the controller's Article 14 transparency obligations.
- The current call has a human panel. The draft does not create permission to send proposal data to an AI system, publish full proposals, or reuse application contact lists for marketing.

## Technical checks for Codex / the maintainer

Audit all relevant routes in a fresh browser profile before interaction. Inspect cookies, local and session storage, network requests and embedded resources. Classify the actual functionality instead of relying on a scanner's labels. Document optional tracking and prevent its use before any required consent. If only strictly necessary tools are used, describe them without adding an unnecessary consent banner. If none are found, say so with the audit's scope/date rather than claim there is no personal-data processing: GitHub Pages has security IP logging.

Confirm mailbox access controls, receipt/version registration and approved storage with the responsible team. The website changes do not implement these institutional processes. Do not put actual applications or personal records in the public repository or this Codex task.

Complete the CONFIRM fields from verified information, update dates, and remove the draft-only text only after the responsible institution has settled the facts. Keep the footer links and applicant link accessible on desktop and mobile. A successful site build checks syntax and integration, not legal accuracy.

## Local implementation checks — 20 November 2026

- Added both draft routes and the shared footer on the local `snowcop-privacy-notices` branch. No remote write or deployment was performed.
- Preserved all CONFIRM fields and adjusted front matter to VuePress 1 `meta` syntax so noindex/nofollow is emitted.
- `npm ci` and `npm run build` passed. Existing plugin and outdated Browserslist warnings remain.
- Checked generated HTML for exactly one footer and both links on the homepage, Open Call, Latest Research (sidebar), and both notices. Checked the application paragraph appears before submission steps.
- Rendered the footer component with `/` and `/preview/` base paths; both link destinations are correct. Added desktop sidebar spacing; the supplied component stacks its links below 420px and has visible keyboard-focus styles.
- The final call PDF SHA256 remains a5ac705d884faf821baea1cf316d6d99f210177565c490c9f7530e639fc8f28f. Call dates, grant terms and the remainder of the Open Call page are unchanged.
- Browser audit was attempted, but the browser access host is unavailable. Cookies, local/session storage, external requests and their purpose/necessity classifications remain **unconfirmed**. No consent was given and no storage or network inventory is inferred from source inspection.
- Mobile/desktop visual checks and interactive keyboard navigation remain outstanding for the same reason. Source and generated-HTML checks do not replace these browser checks.
- No analytics, external fonts, tracking scripts, consent provider or submission checkbox was added. No real applications or personal records were used.

Local preview routes: http://127.0.0.1:8081/privacy/ and http://127.0.0.1:8081/open-call/privacy/. Complete the institutional confirmations above and the browser checks before publication.
