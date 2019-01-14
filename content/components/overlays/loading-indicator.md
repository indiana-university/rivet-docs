---
title: "Loading indicator"
description: "The Rivet loading indicator helps notify users when their action is being processed"
status: "Alpha"
---
{{< alert variant="info" title="New in Rivet 1.2.0" >}}
The loading indicator is new as of 1.2.0. If you need help moving to 1.2.0, see our [instructions for updating Rivet](/components/#updating-the-rivet-npm-package").
{{< /alert >}}

## Default
{{< example lang="html" >}}<div class="rvt-loader" aria-label="Content loading"></div>
{{< /example >}}

The loading indicator can be used to indicate the loading of page content, such as when a single page application makes a request for new content. The loading indicator element does not come with any specific positioning styles, so you'll need to position it appropriately in the container where your content will eventually display once it’s loaded.

## Using the loading indicator inside buttons
It can be helpful to indicate that the submit button is in an inactive/loading state, such as when a user submits a form and the data is being sent to the server. The loading indicator can be used inside of buttons by applying the `.rvt-button--loading` modifier class.

### Button loading state
While the button is in the loading state, the `aria-busy="true"` and `disabled` attributes should be applied. This helps prevent users from trying to resubmit data while the current form is being submitted.

{{< example lang="html" >}}<button class="rvt-button rvt-button--loading" aria-busy="true" disabled>
  <span class="rvt-button__text">Update settings</span>
  <div class="rvt-loader rvt-loader--xs" aria-label="Content loading"></div>
</button>
{{< /example >}}

### Handling button text display while in the loading state
When using the loading indicator inside buttons, the visible button text should be wrapped in a `.rvt-button__text` class (see above example). This class visually hides the button text when the loading indicator is visible while maintaining the display width of the button.

## Loading indicator sizes
The loading indicator comes in multiple sizes that follow the standard Rivet size naming conventions used for [spacing]({{< ref "/components/layout/spacing.md" >}}) and [typography]({{< ref "components/layout/typography.md" >}}).

- `rvt-loader--xxs`
- `rvt-loader--xs` - The default size. Same as `rvt-loader` with no modifier. **NOTE**: This is the **only** size usable inside a button.
- `rvt-loader--sm`
- `rvt-loader--md`
- `rvt-loader--lg`
- `rvt-loader--xl`
- `rvt-loader--xxl`

{{< example lang="html" >}}<div class="rvt-loader rvt-loader--xxs" aria-label="Content loading"></div>
<div class="rvt-loader rvt-loader--xs" aria-label="Content loading"></div>
<div class="rvt-loader rvt-loader--sm" aria-label="Content loading"></div>
<div class="rvt-loader rvt-loader--md" aria-label="Content loading"></div>
<div class="rvt-loader rvt-loader--lg" aria-label="Content loading"></div>
<div class="rvt-loader rvt-loader--xl" aria-label="Content loading"></div>
<div class="rvt-loader rvt-loader--xxl" aria-label="Content loading"></div>
{{< /example >}}
