---
title: "Alerts"
description: "Alerts are used to display brief important messages to users. They are designed to attract the user’s attention, but not interrupt their work."
requiresJs: true
status: "Beta"
---

## When to use
- To notify users about system status including error, warnings, and updates.
- To notify users they’ve successfully completed a task
- Use along with inline validation alerts to summarize multiple errors on longer forms

## When to use something else
- When it’s necessary to interrupt the user’s work flow.
- When user input/action is required to continue working
- If action taken by the user will result in losing/destroying their work, use a modal dialog that allows the user to confirm the destructive action.

## Accessibility
- Alerts should use the `role="alert"` attribute
- Alerts that have a dismiss or close button should use the `role="alertdialog"` attribute
- Use the `aria-labelledby` attribute to link the alert title with the alert element
- Dynamically rendered alerts are automatically announced by most screen readers, but it’s important to note that screen readers will not inform users of alerts that are present before a page has finished loading.

## Microcopy notes
- Alert title should be clear and concise. “Success!” rather than “Application was submitted successfully!"
- Alert message should be descriptive and should clearly articulate the problem the user has encountered or the information you are trying to convey to the user. “The user ID and password you entered do not match” is more clear than “Unauthorized”.
- Where appropriate, alert title should be a link to the position on the page where the invalid element can be found.
- Alert message should offer next steps where appropriate.

### Good example:
**Scheduled System Maintenance**
This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.

- Clear title; explains that maintenance was scheduled and expected
- Informs the user of the length of the outage
- Lets the user know when the system is expected to be available

### Bad example:
**System is Down**
The system is currently unavailable.

- Doesn't indicate that maintenance was scheduled and expected
- Doesn't inform the user how long the system will be unavailable
- Doesn't let the user know when the system is expected to be available again

See the [content guide section](/content-guide) for additional information.

## Page-level alerts
{{< example lang="html" >}}<div class="rvt-alert rvt-alert--info rvt-m-bottom-md" role="alertdialog" aria-labelledby="information-alert-title">
    <h1 class="rvt-alert__title" id="information-alert-title">Scheduled System Maintenance</h1>
    <p class="rvt-alert__message">This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.</p>
    <button class="rvt-alert__dismiss">
        <span class="v-hide">Dismiss this alert</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" style="fill: #333"/>
        </svg>
    </button>
</div>

<div class="rvt-alert rvt-alert--success rvt-m-bottom-md" role="alertdialog" aria-labelledby="success-alert-title">
    <h1 class="rvt-alert__title" id="success-alert-title">Thank you!</h1>
    <p class="rvt-alert__message">We have received your application. Check your email in a few weeks to find out if you’ve been admitted.</p>
    <button class="rvt-alert__dismiss">
        <span class="v-hide">Dismiss this alert</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" style="fill: #333"/>
        </svg>
    </button>
</div>

<div class="rvt-alert rvt-alert--message rvt-m-bottom-md" role="alertdialog" aria-labelledby="warning-alert-title">
    <h1 class="rvt-alert__title" id="warning-alert-title">Unsaved Changes</h1>
    <p class="rvt-alert__message">Your changes have not been saved. To save your changes, click ‘Save my changes’ or click ‘Cancel’ to exit without saving.</p>
    <button class="rvt-alert__dismiss">
        <span class="v-hide">Dismiss this alert</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" style="fill: #333"/>
        </svg>
    </button>
</div>

<div class="rvt-alert rvt-alert--error" role="alert" aria-labelledby="error-alert-title">
    <h1 class="rvt-alert__title" id="error-alert-title">Incorrect User ID or Password</h1>
    <p class="rvt-alert__message">The user ID and password you entered do not match. Please check your entries and try again. <a href="#">Forgot your user ID or password?</a></p>
</div>
{{< /example >}}

### Implementation
- Page-level alerts can be used with an optional dismiss button (X icon), however it’s important to avoid allowing users to dismiss alerts that are used to display error messages. Do allow users to dismiss alerts wherever appropriate.
- It's important to note that the `Alert.init()` function in `rivet.js` has to be called after the alert element in loaded in the DOM. If you are dynamically adding new alerts in the DOM you will need to call the `Alert.init()` function each time a new alert is added.
- Avoid using error messages that automatically disappear. If a user doesn’t have time to read the error message they may not know how to correct the problem once it has been automatically removed.
- Write helpful alert messages. For errors, Include a brief description of the problem and how to fix it. Check out the Voice and tone/microcopy section for more information.

## Alert lists
Alert lists provide a way to group a set of errors together. For instance, when summarizing a list of errors on a long form.

{{< example lang="html" >}}<ul class="rvt-alert-list">
    <li class="rvt-alert-list__item">
        <div class="rvt-alert rvt-alert--error" role="alert">
            <h1 class="rvt-alert__title">Please correct the following errors.</h1>
            <p class="rvt-alert__message">Alert lists are useful for summarizing multiple errors on a page.</p>
        </div>
    </li>
    <li class="rvt-alert-list__item">
        <div class="rvt-alert rvt-alert--error" role="alert">
            <h1 class="rvt-alert__title">Errors can have a title only, <a href="#">with a link</a> to the invalid element.</h1>
        </div>
    </li>
    <li class="rvt-alert-list__item">
        <div class="rvt-alert rvt-alert--error" role="alert">
            <h1 class="rvt-alert__title">Error message three is soooo long!</h1>
            <p class="rvt-alert__message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam iste, nesciunt aliquam illum quaerat hic expedita ducimus error assumenda explicabo quos harum delectus deserunt, autem corrupti quas doloremque. Veritatis.</p>
        </div>
    </li>
    <li class="rvt-alert-list__item">
        <div class="rvt-alert rvt-alert--error" role="alert">
            <p class="rvt-alert__message">Errors don't always have to have a title. You could just use them for <a href="#">messages</a>.</p>
        </div>
    </li>
</ul>
{{< /example >}}

### Alert list accessibility
Alert lists can be particularly useful for summarizing multiple errors on a page, and providing links to the invalid fields. These summaries are especially helpful for non-sighted users, who will not receive the visual cue provided by multiple inline alerts appearing on the page when a form is submitted.
