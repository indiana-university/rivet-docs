---
title: "Select element"
description: "The select element creates a dropdown that allows users to choose one item from a list."
status: "Ready"
---
## Select Example
{{< example lang="html" >}}<label for="select-demo">Select input:</label>
<select id="select-demo">
    <option>Choose an option...</option>
    <option value="Option One">Option One</option>
    <option value="Option One">Option Two</option>
    <option value="Option One">Option Three</option>
    <option value="Option One">Option Four</option>
</select>
{{< /example >}}

### Inline validation examples
For more info on how to use the Rivet form input validation states, [see the examples in the text input section]({{< ref "components/forms/text-input.md#inline-validation-states" >}}).

{{< example lang="html" >}}<label for="select-info-state">Type</label>
<select name="" id="select-info-state" class="rvt-validation-info" aria-describedby="meats-select">
    <option value="Steak">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</select>
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
    <span class="rvt-inline-alert__message" role="alert" id="meats-select">
        You must pick a
        <strong>Type</strong> of meats.
    </span>
</div>

<label for="valid-state" class="rvt-m-top-md">Type</label>
<select name="" id="valid-state" class="rvt-validation-success" aria-describedby="type-message">
    <option value="Steak">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</select>
<div class="rvt-inline-alert rvt-inline-alert--success">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z"/>
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="type-message">
        You must pick a
        <strong>Type</strong> of meat.
    </span>
</div>

<label for="select-warning-state" class="rvt-m-top-md">Type</label>
<select name="" id="select-warning-state" class="rvt-validation-warning" aria-describedby="type-message-2">
    <option value="Steak">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</select>
<div class="rvt-inline-alert rvt-inline-alert--warning">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z" />
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="type-message-2">
        You must pick a <strong>Type</strong> of meats.
    </span>
</div>

<label for="select-error-state" class="rvt-m-top-md">Type</label>
<select name="" id="select-error-state" class="rvt-validation-danger" aria-describedby="state-message" aria-invalid="true">
    <option value="Steak">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</select>
<div class="rvt-inline-alert rvt-inline-alert--danger">
    <span class="rvt-inline-alert__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
                <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z"/>
            </g>
        </svg>
    </span>
    <span class="rvt-inline-alert__message" role="alert" id="state-message">
        You must pick a
        <strong>Type</strong> of meat.
    </span>
</div>
{{< /example >}}

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

## When to use
Use the select element when you need to present users with a list of mutually exclusive options and they can **only select one option**.

## When to consider something else
When you only need to present a user with three or less options, consider using a group of [radio buttons]({{< ref "components/forms/radio-buttons.md" >}}) instead.

## Select labels
- Write the label as a word or phrase, not as a sentence, and end it with a colon
- Use sentence-style capitalization

## Select options
- Don't make the content of the select list or combo box (or its units label) part of a sentence
- Write each option as a word or phrase, not as a sentence, and use no ending punctuation
- Use parallel phrasing, and try to keep the length about the same for all options
- Sort options in a logical order — names in alphabetical order, numbers in numeric order, and dates in chronological order. Lists with 12 or more items should be sorted alphabetically to make items easier to find.
  - **Exception:** One or more common items may be placed at the beginning of an otherwise sorted set of options, such as placing "United States" at the top of a country select. When placing items out of order, always place a non-selectable separator (---) between the unsorted and sorted items.

## Resources
- [MSDN Design Documentation](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742404.aspx)
