---
title: "Segmented Buttons"
asOf: 1.0.0
description: "Use the segmented button to display a group of related controls in a single line. Combine them with the dropdown to create complex menu controls."
requiresJs: false
status: "Ready"
weight: 2
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. [View the button documentation on the Rivet 2 website](https://v2.rivet.iu.edu/docs/components/button/).
{{< /alert >}}

## Segmented button examples
{{< example lang="html" >}}<div class="rvt-button-segmented" role="group" aria-label="Primary controls">
    <button type="button" class="rvt-button">Primary one</button>
    <button type="button" class="rvt-button">Primary two</button>
    <button type="button" class="rvt-button">Primary three</button>
</div>
{{< /example >}}

### Secondary modifier
The segmented buttons can be used with any of Rivet's button modifiers.
{{< example lang="html" >}}<div class="rvt-button-segmented" role="group" aria-label="Secondary controls">
    <button type="button" class="rvt-button rvt-button--secondary">Secondary one</button>
    <button type="button" class="rvt-button rvt-button--secondary">Secondary two</button>
    <button type="button" class="rvt-button rvt-button--secondary">Secondary three</button>
</div>
{{< /example >}}

### Accessibility notes
When using the segmented button, it’s important to apply the ARIA attribute `role="group"` to the `<div>` container. This conveys two things to assistive technologies (AT):

- The buttons are related to one another
- AT should announce that the buttons are part of a group

In addition to the ARIA group role, use the `aria-label` attribute to provide more information to AT. This is especially important if you are using more than one set of segmented buttons on a page.

As an alternative, you could also use an `aria-labelledby` attribute. Its value should correspond to the `id` of text that labels what the segmented button controls.

### Fitted modifier
Adding the `.rvt-button-segmented--fitted` modifier to the segmented buttons' `<div>` container will make the buttons fill the entire width of their parent container.

{{< example lang="html" >}}<div class="rvt-button-segmented rvt-button-segmented--fitted" role="group" aria-label="Fitted group">
    <button type="button" class="rvt-button rvt-button--secondary">Left</button>
    <button type="button" class="rvt-button rvt-button--secondary">Middle</button>
    <button type="button" class="rvt-button rvt-button--secondary">Right</button>
</div>
{{< /example >}}

## Using with anchor tags
It _is_ possible to use segmented buttons with anchor tags if the situation calls for it (e.g., if you are using them as navigation elements that will take a user to a different URL). However, for most uses in modern web applications (e.g., triggering or toggling the visibility of content), the HTML `<button>` element is the appropriate choice.

[See this article on Links vs. Buttons](https://marcysutton.com/links-vs-buttons-in-modern-web-applications/) in modern web applications for more information.

## Using segmented buttons with dropdowns
You can use the segmented button along with Rivet's dropdown component to create more complex controls like in the example below. Here we are also using some [padding utility classes]({{< ref "components/layout/spacing.md" >}}) to slightly decrease the width of the secondary action dropdown toggle.

{{< example lang="html" >}}<div class="rvt-button-segmented" role="group" aria-label="Dropdown group">
    <button type="button" class="rvt-button">Primary action</button>
    <div class="rvt-dropdown">
        <button type="button" class="rvt-button rvt-p-right-xs rvt-p-left-xs" data-dropdown-toggle="segmented-example">
            <span class="rvt-sr-only">Toggle options menu</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
            </svg>
        </button>
        <div class="rvt-dropdown__menu" id="segmented-example" role="menu" aria-hidden="true">
            <button type="button" role="menuitemradio">Notify all</button>
            <button type="button" role="menuitemradio" aria-checked="true">Notify admins</button>
            <button type="button" role="menuitemradio">Notify contributors</button>
            <div class="rvt-dropdown__menu-heading" aria-hidden="true">Personal settings</div>
            <div role="group" aria-label="Personal settings">
                <button type="button" role="menuitem">Profile Settings</button>
                <button type="button" role="menuitem">Logout</button>
            </div>
        </div>
    </div>
</div>
{{< /example >}}
