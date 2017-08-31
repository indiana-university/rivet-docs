+++
title = "Buttons"
description = "Buttons are used to signal actions, submit forms, or trigger new content within the current context."
requiresJs = false
status = "Alpha"
+++

## Button examples
{{< example "html" >}}<div class="button-group">
    <button class="button">Primary</button>
    <button class="button button--success">Success</button>
    <button class="button button--danger">Danger</button>
    <button class="button button--plain">Plain</button>
</div>
{{< /example >}}

### Secondary variations
{{< example "html" >}}<div class="button-group">
    <button class="button button--secondary">Secondary</button>
    <button class="button button--success-secondary">Success</button>
    <button class="button button--danger-secondary">Danger</button>
</div>
{{< /example >}}

### Small buttons
You can create smaller buttons by adding the `.button--small` modifier class. The small button modifier can be used together with the other button modifier classes to make any variation of small buttons.

{{< example "html" >}}<div class="button-group">
    <button class="button button--small">Primary</button>
    <button class="button button--success button--small">Success</button>
    <button class="button button--danger button--small">Danger</button>
    <button class="button button--plain button--small">Plain</button>
</div>
{{< /example >}}

## When to use
- Opening or closing a modal or dialog
- Triggering a dropdown menu
- Submitting data to the server

## When to consider something else
- Navigating to a new page or view in your application
- Navigating to different web page, e.g. external documentation

## Implementation notes
There are a number of button styles and sizes that can be achieved using a handful of modifier CSS classes.

### Contextual button modifiers
Certain contexts may require alternate button styles. For example, when a user is about to take a destructive action it may be advisable to use a different color button to alert them. In this case, adding the class `.button--danger` will create an orange button that matches the [error alert color](link-to-alerts).

The available button color modifiers are:

- `.button--success`
- `.button--success-secondary`
- `.button--danger`
- `.button--danger-secondary`

### Link and input buttons
The `.button button--*` classes are meant to be used on the `<button>` elements, but they will work if you need to make an `<a>` tag or an `<input>` look like a button. If you're not sure whether to use a `<button>` or an `<a>` tag, you can reference the [documentation on links](/components/detail/links).

### Button groups
When you need to display a group of buttons you can wrap them in a `div` with the class `.button-group` applied to it. The `.button-group` class will add an equal amount of margin to the right side of every button in the group except the last one.

{{< example "html" >}}<div class="button-group">
    <button class="button">Ok</button>
    <button class="button button--secondary">Cancel</button>
</div>
{{< /example >}}

If you need to right align your buttons, you can add the `.button-group--right` modifier class to the `.button-group` div.

{{< example "html" >}}<div class="button-group button-group--right">
    <button class="button">Ok</button>
    <button class="button button--secondary">Cancel</button>
</div>
{{< /example >}}

In the example above, the buttons would be aligned to the right edge of the `.button-group`'s parent container.

## Resources
- [Links vs. Buttons in Modern Web Applications](https://marcysutton.com/links-vs-buttons-in-modern-web-applications/)
