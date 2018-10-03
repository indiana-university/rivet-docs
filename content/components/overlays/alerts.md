---
title: "Alerts"
description: "Alerts are used to display brief important messages to users. They are designed to attract the user’s attention, but not interrupt their work."
requiresJs: true
status: "Ready"
methods:
    -
        title: "Alert.init(context)"
        description: |
             - Initializes the `Alert` component
             - Accepts an optional DOM element. If no element is provided in the argument it defaults to the `document` element.
             - NOTE: the `init()` method is called automatically when `rivet.js` is loaded.
    -
        title: "Alert.destroy(context)"
        description: |
            - Destroys any currently initialized Alerts and removes their event listeners.
            - Accepts an optional DOM element. If no element is provided in the argument it defaults to the `document` element. **NOTE**: the optional `context` argument only needs to be passed into `.destroy()` if a DOM element was passed into the `.init()` method. If so, it must be the DOM element that was passed into `.init()` when the Alert was initialized.
    -
        title: "Alert.dismiss(id, callback)"
        description: |
            - `id` - The unique id (String) of the Alert you want to dismiss.
            - `callback` - An optional function that gets executed after the alert is dismissed
            - **NOTE**: In previous versions of Rivet, the `Alert.dismiss()` method accepted an Alert DOM Element. The `.dismiss()` method will still work if you pass it a DOM element (the Alert element itself), but **this functionality will be deprecated in the next major version of Rivet**.
events:
    -
        title: "alertDismissed"
        description: "A custom event that is emitted after an alert is dismissed"
---
## Page-level alerts
{{< example lang="html" >}}<div class="rvt-alert rvt-alert--info rvt-m-bottom-md" role="alertdialog" aria-labelledby="information-alert-title">
    <h1 class="rvt-alert__title" id="information-alert-title">Scheduled System Maintenance</h1>
    <p class="rvt-alert__message">This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.</p>
    <button class="rvt-alert__dismiss">
        <span class="v-hide">Dismiss this alert</span>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
        </svg>
    </button>
</div>

<div class="rvt-alert rvt-alert--success rvt-m-bottom-md" role="alertdialog" aria-labelledby="success-alert-title">
    <h1 class="rvt-alert__title" id="success-alert-title">Thank you!</h1>
    <p class="rvt-alert__message">We have received your application. Check your email in a few weeks to find out if you’ve been admitted.</p>
    <button class="rvt-alert__dismiss">
        <span class="v-hide">Dismiss this alert</span>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
        </svg>
    </button>
</div>

<div class="rvt-alert rvt-alert--warning rvt-m-bottom-md" role="alertdialog" aria-labelledby="warning-alert-title">
    <h1 class="rvt-alert__title" id="warning-alert-title">Unsaved Changes</h1>
    <p class="rvt-alert__message">Your changes have not been saved. To save your changes, click ‘Save my changes’ or click ‘Cancel’ to exit without saving.</p>
    <button class="rvt-alert__dismiss">
        <span class="v-hide">Dismiss this alert</span>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
        </svg>
    </button>
</div>

<div class="rvt-alert rvt-alert--danger" role="alert" aria-labelledby="error-alert-title">
    <h1 class="rvt-alert__title" id="danger-alert-title">Incorrect User ID or Password</h1>
    <p class="rvt-alert__message">The user ID and password you entered do not match. Please check your entries and try again. <a href="#">Forgot your user ID or password?</a></p>
</div>
{{< /example >}}

## Standalone inline alerts
Inline alerts in Rivet should be used for form validation situations where [the standard inline form input validation]({{< ref "components/forms/text-input.md#inline-validation-states" >}}) error would not make sense. For instance, marking a group of radio buttons or checkboxes will give an input error. Adding the `rvt-inline-alert--standalone` modifier class to the standard inline alert element will give the alert a subtle background color and left border to add some visual contrast.

{{< example lang="html" >}}
<div class="rvt-inline-alert rvt-inline-alert--standalone rvt-inline-alert--info">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
                <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z"/>
                <circle cx="8" cy="5" r="1"/>
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="radio-list-message">
        This field is required to continue.
    </span>
</div>

<div class="rvt-inline-alert rvt-inline-alert--standalone rvt-inline-alert--success">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z"/>
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z"/>
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="radio-list-message">
        This field is required to continue.
    </span>
</div>

<div class="rvt-inline-alert rvt-inline-alert--standalone rvt-inline-alert--warning">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z"/>
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="radio-list-message">
        This field is required to continue.
    </span>
</div>

<div class="rvt-inline-alert rvt-inline-alert--standalone rvt-inline-alert--danger">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
                <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z"/>
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="radio-list-message">
        This field is required to continue.
    </span>
</div>
{{< /example >}}

<div class="rvt-alert rvt-alert--info rvt-m-bottom-md rvt-m-top-xl">
    <h2 class="rvt-alert__title">More form validation tips</h2>
    <p class="rvt-alert__message">
        For more information on techniques for better from validation UX, <a href="../../forms/text-input/#form-validation-tips">see this list of form validation tips</a>.
    </p>
</div>

When using a standalone inline alert with a group of inputs, make sure to add the `aria-describedby` attribute to **each input** (in this case radio buttons) that is invalid. The `aria-describedy` by value should correspond to a matching `id` attribute on the `.rvt-inline-alert__message` element.


{{< example lang="html" >}}<form>
    <fieldset>
        <legend class="rvt-ts-23 rvt-text-bold rvt-m-bottom-sm">Radio list</legend>
        <ul class="rvt-plain-list">
            <li>
                <input type="radio" name="radio-demo-2" id="radio-3" aria-describedby="radio-list-message">
                <label for="radio-3">Option one</label>
            </li>
            <li>
                <input type="radio" name="radio-demo-2" id="radio-4" aria-describedby="radio-list-message">
                <label for="radio-4">Option two</label>
            </li>
            <li>
                <input type="radio" name="radio-demo-2" id="radio-4-disabled" aria-describedby="radio-list-message">
                <label for="radio-4-disabled">Option three disabled</label>
            </li>
            <li>
                <input type="radio" name="radio-demo-2" id="radio-5" aria-describedby="radio-list-message">
                <label for="radio-5">Option four checked and disabled</label>
            </li>
        </ul>
        <div class="rvt-inline-alert rvt-inline-alert--standalone rvt-inline-alert--danger">
            <span class="rvt-inline-alert__icon">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="currentColor">
                        <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
                        <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z"/>
                    </g>
                </svg>
            </span>
            <span class="rvt-inline-alert__message" role="alert" id="radio-list-message">
                This field is required to continue.
            </span>
        </div>
    </fieldset>
</form>
{{< /example >}}

## Alert lists
Alert lists provide a way to group a set of errors together. For instance, when summarizing a list of errors on a long form.

{{< example lang="html" >}}<ul class="rvt-alert-list">
    <li class="rvt-alert-list__item">
        <div class="rvt-alert rvt-alert--danger" role="alert">
            <h1 class="rvt-alert__title">Please correct the following errors.</h1>
            <p class="rvt-alert__message">Alert lists are useful for summarizing multiple errors on a page.</p>
        </div>
    </li>
    <li class="rvt-alert-list__item">
        <div class="rvt-alert rvt-alert--danger" role="alert">
            <h1 class="rvt-alert__title">Errors can have a title only, <a href="#">with a link</a> to the invalid element.</h1>
        </div>
    </li>
    <li class="rvt-alert-list__item">
        <div class="rvt-alert rvt-alert--danger" role="alert">
            <h1 class="rvt-alert__title">Error message three is soooo long!</h1>
            <p class="rvt-alert__message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam iste, nesciunt aliquam illum quaerat hic expedita ducimus error assumenda explicabo quos harum delectus deserunt, autem corrupti quas doloremque. Veritatis.</p>
        </div>
    </li>
</ul>
{{< /example >}}

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
- Dynamically rendered alerts are automatically announced by most screen readers, but it’s important to note that screen readers will not inform users of alerts that are present before a page has finished loading

### Alert list accessibility
Alert lists can be particularly useful for summarizing multiple errors on a page, and providing links to the invalid fields. These summaries are especially helpful for non-sighted users, who will not receive the visual cue provided by multiple inline alerts appearing on the page when a form is submitted.

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

### Implementation
- Page-level alerts can be used with an optional dismiss button (X icon), however it’s important to avoid allowing users to dismiss alerts that are used to display error messages. Do allow users to dismiss alerts wherever appropriate.
- Avoid using error messages that automatically disappear. If a user doesn’t have time to read the error message they may not know how to correct the problem once it has been automatically removed.
- Write helpful alert messages. For errors, Include a brief description of the problem and how to fix it. Check out the Voice and tone/microcopy section for more information.

## JavaScript API
The Rivet alert component comes with a couple of methods you can use to programmatically control alerts. The `.init()` method is called by default the first `rivet.js` is loaded. You can dismiss alerts using the `.rvt-alert__dismiss` button, or use the `Alert.dismiss()` method in your own script.

### Available methods

{{< apidocs type="methods" >}}{{< /apidocs >}}

