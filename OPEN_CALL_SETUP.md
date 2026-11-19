# Open Call page: publication checklist

The proposed `/open-call/` page uses **earth.observation@eurac.edu** for enquiries and, once the call is open, application submissions. It introduces no form, upload endpoint or external submission provider. Applications remain in the institutional mailbox, outside this public repository.

The page is deliberately marked **in preparation / not open**. Its only email button opens an enquiry draft. No email has been sent and no mailbox settings have been changed by this website update.

## Before launching the call

- Reconcile the web instructions with the approved call text and SNOWCOP's grant agreement. The earlier draft is not a final source for dates, amounts, country eligibility, application language or attachment requirements.
- Confirm the opening date, deadline and explicit time zone, funding terms, eligibility, evaluation criteria, required documents and file-size limits.
- Confirm that the mailbox is monitored, accepts external senders and the expected attachments, and is available to authorised application administrators. Test it using an external address.
- Agree how receipt confirmations, application IDs and a submission register will be maintained. A website `mailto:` link provides none of these functions. Configure an acknowledgement through the institution if available; distinguish receipt from acceptance or eligibility.
- Define receipt-time rules, treatment of revised applications, the authoritative final version, late applications and any submission failure procedure in the approved guidelines. Preserve received messages and original attachments.
- Publish the institution-approved applicant privacy notice, including the responsible institution, purpose, access, applicable legal basis and retention arrangements. Do not replace this with a generic consent checkbox.
- Upload only the approved **blank templates and public call documents** under `docs/src/.vuepress/public/open-call/`, then replace the forthcoming-document list with real download links. Never commit submitted proposals, personal data or signatures to this repository.
- Update the status banner and summary table when the approved call opens; remove the repeated not-open notices and the `robots: noindex, nofollow` metadata then. If a submission button is added, label it **Prepare application email**, with the attachment/manual-send explanation retained.
- Check the subject line in both the page and guidelines. The proposed format is `SNOWCOP Open Call - Application - [Organisation name]`.

## Review and publication

The existing deployment workflow publishes pushes to `main` automatically. Review this change through its draft pull request. Merging publishes the page and navigation entry, including its current draft status; it does not open the call automatically.

The separate pull-request workflow builds VuePress without deploying. Its successful build confirms that the site compiles, not that mailbox delivery or automatic acknowledgements work.

Before publication, check `/open-call/` on desktop and mobile, keyboard navigation, the email recipient and subject, real document downloads and mailbox delivery/receipt handling. At the deadline, update the page to **closed** and retain the public call documents for reference.
