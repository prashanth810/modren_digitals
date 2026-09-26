# Continue the Northstar website

## What will change

- Replace the starter project with the uploaded Modren Digital website, preserving its existing pages, content, styling, motion, and responsive behavior.
- Add a large `N/S NORTHSTAR / DIGITAL` brand line directly after the copyright area at the bottom of the footer.
- Connect the existing contact form to Resend so each valid enquiry is delivered to `supportweb329@gmail.com`.
- Keep the form’s current appearance while adding real sending, clear success feedback, and a useful error message.

## Technical details

- Validate every form field in the browser and again on the server, with strict length and allowed-value limits.
- Send only from server-side code; never expose the Resend credential in the browser.
- Use a fixed recipient and fixed email structure so the form cannot be used to send arbitrary emails.
- Preserve all existing page metadata and confirm every page renders correctly on desktop and mobile.

## Verification

- Confirm the imported site builds without errors.
- Test footer placement and contact-form states in the running preview.
- Verify that invalid submissions are rejected and a valid submission reaches the server-side send flow.
