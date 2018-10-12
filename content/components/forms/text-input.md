---
title: "Text inputs"
description: "Text inputs are the basic building blocks of forms. They allow users to enter various types of data into web-based forms."
status: "Ready"
---
## Text input example
{{< example lang="html" >}}<label for="demo-1">Text Input</label>
<input type="text" id="demo-1" aria-describedby="demo-1-note">
<small id="demo-1-note" class="rvt-display-block rvt-m-bottom-md">This is a note about this field.</small>

<label for="demo-2">Text Input (disabled)</label>
<input type="text" id="demo-2" class="rvt-m-bottom-md" disabled>
{{< /example >}}

## Inline validation states

<div class="rvt-alert rvt-alert--info rvt-m-bottom-md rvt-m-top-md" aria-labelledby="information-alert-title">
    <h3 class="rvt-alert__title" id="information-alert-title">Validation styles</h3>
    <p class="rvt-alert__message">You can use all Rivet validation CSS classes (<code>.rvt-validation-success</code>, <code>.rvt-validation-danger</code>, <code>.rvt-validation-warning</code>, and <code>.rvt-validation-info</code>) on any of the HTML5 text input types, <a href="../select-input">select elements</a>, or <a href="#textarea-example">text areas</a>.</p>
</div>

Rivet provides the markup and styles for various states of inline form validation. These inline validation states should be used in combination with [alerts]({{< ref "components/overlays/alerts.md" >}}) to provide helpful validation error messages to users.

### Deprecated form validation class names
Version `1.1.0` of Rivet updated the CSS class names for inline form validation to be consistent with class names used by other components. The table below shows the deprecated class names and their replacements.

The deprecated class names will still work in version `1.1.0`. However, they will be removed in a future release.

<table class="rvt-m-top-lg">
    <caption class="rvt-sr-only">Rivet form validation CSS classes: deprecated and new</caption>
    <thead>
        <th>Deprecated</th>
        <th>New in <code>1.1.0</code></th>
    </thead>
    <tbody>
        <tr>
            <td><code>.rvt-inline-alert--has-info</code></td>
            <td><code>.rvt-inline-alert--info</code></td>
        </tr>
        <tr>
            <td><code>.rvt-inline-alert--is-valid</code></td>
            <td><code>.rvt-inline-alert--success</code></td>
        </tr>
        <tr>
            <td><code>.rvt-inline-alert--has-warning</code></td>
            <td><code>.rvt-inline-alert--warning</code></td>
        </tr>
        <tr>
            <td><code>.rvt-inline-alert--is-invalid</code></td>
            <td><code>.rvt-inline-alert--danger</code></td>
        </tr>
        <tr>
            <td><code>.rvt-has-info</code></td>
            <td><code>.rvt-validation-info</code></td>
        </tr>
        <tr>
            <td><code>.rvt-is-valid</code></td>
            <td><code>.rvt-validation-success</code></td>
        </tr>
        <tr>
            <td><code>.rvt-has-warning</code></td>
            <td><code>.rvt-validation-warning</code></td>
        </tr>
        <tr>
            <td><code>.rvt-is-invalid</code></td>
            <td><code>.rvt-validation-danger</code></td>
        </tr>
    </tbody>
</table>

### Form validation tips

Rivet does not make any assumptions about whether you’re using server- or client-side form validation. We only provide the HTML and CSS needed to create the validation states. That said, here are some tips for creating usable form error-handling experiences:

- **Validate after the user submits the form**. We recommend avoiding on-the-fly validation as the user types. This can cause too many unnecessary interruptions for users.
- **Summarize multiple errors** using a [Rivet page-level alert]({{< ref "components/overlays/alerts.md" >}}) at the top of the form. Provide links to the invalid fields in this summary. This makes it easier for keyboard and assistive technology users to jump directly to the invalid field (which is especially important on longer forms).
- Move focus to the error summary at the top of the form so that the errors will be announced right away to screen readers. **This step is important**. Otherwise, screen reader users would need to navigate all the way back through a page to get to that summary.
- **Use the `aria-describedby` attribute** on the invalid fields, and match the id to an element that describes what caused the error.
- **Use the `aria-invalid` attribute** set to true on invalid fields where appropriate. This will convey the invalid state to assistive technologies like screen readers.
    - **When not to use the `aria-invalid` attribute**: Input errors for groups of inputs like checkboxes and radio buttons need to be handled slightly differently. [Read this section on using the standalone inline alert]({{< ref "components/overlays/alerts.md#standalone-inline-alerts" >}}) for handling these input errors.


{{< example lang="html" >}}<label for="rvt-success-state">First name</label>
<input type="text" id="rvt-success-state" class="rvt-validation-success" aria-describedby="first-name-message">
<div class="rvt-inline-alert rvt-inline-alert--success">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z"/>
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="first-name-message">
        <strong>First name</strong> is valid!
    </span>
</div>

<label for="rvt-warning-state" class="rvt-m-top-md">Password</label>
<input type="text" id="rvt-warning-state" class="rvt-validation-warning" aria-describedby="password-message">
<div class="rvt-inline-alert rvt-inline-alert--warning">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z" />
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="password-message">
        Your <strong>Password</strong> is weak.
    </span>
</div>

<label for="rvt-error-state" class="rvt-m-top-md">Username</label>
<input type="text" id="rvt-error-state" class="rvt-validation-danger" aria-describedby="username-message" aria-invalid="true">
<div class="rvt-inline-alert rvt-inline-alert--danger">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
                <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z"/>
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="username-message">
        The <strong>Username</strong> you entered is taken.
    </span>
</div>

<label for="error-state" class="rvt-m-top-md">Description</label>
<input type="text" id="error-state" class="rvt-validation-info" aria-describedby="description-message">
<div class="rvt-inline-alert rvt-inline-alert--info">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
                <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z" />
                <circle cx="8" cy="5" r="1" />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="description-message">
        The
        <strong>Description</strong> tells users more about this stuff.
    </span>
</div>
{{< /example >}}

## Textarea example

{{< example lang="html" >}}<label for="demo-3">Textarea</label>
<textarea id="demo-3" class="rvt-m-bottom-md"></textarea>

<label for="demo-4">Textarea (disabled)</label>
<textarea id="demo-4" class="rvt-m-bottom-md" disabled></textarea>
{{< /example >}}

### Textarea inline validation states

{{< example lang="html" >}}<label for="textarea-success-state">Essay</label>
<textarea type="text" id="textarea-success-state" class="rvt-validation-success" aria-describedby="essay-message"></textarea>
<div class="rvt-inline-alert rvt-inline-alert--success">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z"/>
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" id="essay-message">
        Your <strong>Essay</strong> is valid!
    </span>
</div>

<label for="textarea-warning-state" class="rvt-m-top-md">Response</label>
<textarea type="text" id="textarea-warning-state" class="rvt-validation-warning" aria-describedby="response-message"></textarea>
<div class="rvt-inline-alert rvt-inline-alert--warning">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z" />
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" id="response-message">
        Your <strong>Response</strong> has some mispellings!
    </span>
</div>

<label for="textarea-error-state" class="rvt-m-top-md">Description</label>
<textarea type="text" id="textarea-error-state" class="rvt-validation-danger" aria-describedby="description-message" aria-invalid="true"></textarea>
<div class="rvt-inline-alert rvt-inline-alert--danger">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
                <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z"
                />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" id="description-message">
        Your <strong>Description</strong> has special characters that need to be replaced.
    </span>
</div>

<label for="textarea-info-state" class="rvt-m-top-md">Message</label>
<textarea type="text" id="textarea-info-state" class="rvt-validation-info" aria-describedby="message-message"></textarea>
<div class="rvt-inline-alert rvt-inline-alert--info">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
                <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z" />
                <circle cx="8" cy="5" r="1" />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" id="message-message">
        Add a <strong>Message</strong> to give users more information.
    </span>
</div>
{{< /example >}}

## When to use
Use a text input for information that will only take up one line: a name, phone number, city, etc. Use textareas for information that includes multiple sentences or lines: descriptions, issues, proposals, etc.

## When to consider something else
- Don’t ask the user to describe anything in a text input, which can hide text from view if the line is too long.
- Similarly, don’t ask users to copy large amounts of information from a document and paste it into a textarea. If possible, use a file input, and let them upload those documents instead.

## Microcopy notes
Keep labels clear and concise―around two to three words and never more than eight. But don’t be afraid to be descriptive or use a human voice. “Describe the problem you’re having” is clearer and kinder than “Problem description.”

## Accessibility notes
- Every text input must have a `<label>` element associated with it. Placeholder (`placeholder=`) text is not a substitute for using a label element and most browsers render placeholder text at inaccessible [contrast ratios](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).
- If you need to visually hide a label use the Rivet [screen reader only utility class](https://rivet.uits.iu.edu/components/utilities/display/#screen-reader-only). That way the label text will still be accessible to screenreaders.
- Avoid labeling text inputs implicitly i.e. wrapping inputs with label. Assistive technologies understand explicitly labeled (matching `for` and `id`) attributes elements better.

## Resources
[Use the copy as a guide, not a crutch](https://www.smashingmagazine.com/2013/06/five-ways-prevent-bad-microcopy/#3-use-copy-as-a-guide-not-a-crutch)
