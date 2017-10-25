---
title: "Buttons"
description: "Buttons are used to signal actions, submit forms, or trigger new content within the current context."
requiresJs: false
status: "Beta"
---

## Button examples
{{< example lang="html" >}}<div class="rvt-button-group">
    <button class="rvt-button">Primary</button>
    <button class="rvt-button rvt-button--success">Success</button>
    <button class="rvt-button rvt-button--danger">Danger</button>
    <button class="rvt-button rvt-button--plain">Plain</button>
</div>
{{< /example >}}

### Secondary variations
{{< example lang="html" >}}<div class="rvt-button-group">
    <button class="rvt-button rvt-button--secondary">Secondary</button>
    <button class="rvt-button rvt-button--success-secondary">Success</button>
    <button class="rvt-button rvt-button--danger-secondary">Danger</button>
</div>
{{< /example >}}

### Small buttons
You can create smaller buttons by adding the `.rvt-button--small` modifier class. The small button modifier can be used together with the other button modifier classes to make any variation of small buttons.

{{< example lang="html" >}}<div class="rvt-button-group">
    <button class="rvt-button rvt-button--small">Primary</button>
    <button class="rvt-button rvt-button--success rvt-button--small">Success</button>
    <button class="rvt-button rvt-button--danger rvt-button--small">Danger</button>
    <button class="rvt-button rvt-button--plain rvt-button--small">Plain</button>
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
Certain contexts may require alternate button styles. For example, when a user is about to take a destructive action it may be advisable to use a different color button to alert them. In this case, adding the class `.rvt-button--danger` will create an orange button that matches the [error alert color]({{< ref "components/overlays/alerts.md" >}}).

The available button color modifiers are:

- `.rvt-button--success`
- `.rvt-button--success-secondary`
- `.rvt-button--danger`
- `.rvt-button--danger-secondary`

### Link and input buttons
The `.rvt-button rvt-button--*` classes are meant to be used on the `<button>` elements, but they will work if you need to make an `<a>` tag or an `<input>` look like a button. If you're not sure whether to use a `<button>` or an `<a>` tag, you can reference the [documentation on links]({{< ref "components/page-content/links.md" >}}).

### Button groups
When you need to display a group of buttons you can wrap them in a `div` with the class `.rvt-button-group` applied to it. The `.rvt-button-group` class will add an equal amount of margin to the right side of every button in the group except the last one.

{{< example lang="html" >}}<div class="rvt-button-group">
    <button class="rvt-button">Ok</button>
    <button class="rvt-button rvt-button--secondary">Cancel</button>
</div>
{{< /example >}}

If you need to right align your buttons, you can add the `.rvt-button-group--right` modifier class to the `.rvt-button-group` div.

{{< example lang="html" >}}<div class="rvt-button-group rvt-button-group--right">
    <button class="rvt-button">Ok</button>
    <button class="rvt-button rvt-button--secondary">Cancel</button>
</div>
{{< /example >}}

In the example above, the buttons would be aligned to the right edge of the `.rvt-button-group`'s parent container.

## Resources
- [Links vs. Buttons in Modern Web Applications](https://marcysutton.com/links-vs-buttons-in-modern-web-applications/)
