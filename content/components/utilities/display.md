---
title: "Display"
description: "The Rivet display utility classes make it easy to control how elements display on screen and how they are presented to assistive technologies like screen readers."
status: "Ready"
---

## Screen reader only
Use the `.rvt-sr-only` utility class to visually hide content, but still leave it accessible to screen readers.

{{< example lang="html" >}}<h1 class="rvt-ts-32">This text is visible <span class="rvt-sr-only">but, this text is visually hidden and still accessible to screen readers.</span></h1>
{{< /example >}}

## Visually hidden labels example
Another practical example of when to use the the `.rvt-sr-only` utility is when you need to hide a form label from visual users, but still want it to be available to those using assistive technology. This can be helpful when you are implementing patterns like a search bar and need to conserve space.

{{< example lang="html" >}}<label for="search" class="rvt-sr-only">Search</label>
<div class="rvt-input-group">
    <input class="rvt-input-group__input" type="text" id="search">
    <div class="rvt-input-group__append">
        <button class="rvt-button">Search</button>
    </div>
</div>
{{< /example >}}

## Display property utilities
The Rivet `rvt-display-*` utilities can be used to easily change the css `display:` property. The display utilities included in Rivet are:

- `.rvt-display-inline`
- `.rvt-display-inline-block`
- `.rvt-display-block`
- `.rvt-display-flex`
    - `.rvt-vertical-center` (only works with `.rvt-display-flex`)

{{< example lang="html" >}}<div class="rvt-display-inline bg-midnight">Display inline</div>
{{< /example >}}

{{< example lang="html" >}}<span class="rvt-display-block bg-green">Display block</span>
{{< /example >}}

{{< example lang="html" >}}<div class="rvt-display-flex">
    <div class="bg-orange rvt-m-right-sm">Flex child</div>
    <div class="bg-orange rvt-m-right-sm">Flex child</div>
    <div class="bg-orange rvt-m-right-sm">Flex child</div>
</div>
{{< /example >}}

### Vertically centered flex children
You can use the `.rvt-vertical-center` along with `.rvt-display-flex` to vertically center child elements. This sets the `align-items` property to `center`.
{{< example lang="html" >}}<div class="rvt-display-flex rvt-vertical-center" style="height: 200px; background-color: #ddd;">
    <div class="bg-orange rvt-m-right-sm">Flex child</div>
    <div class="bg-orange rvt-m-right-sm">Flex child</div>
    <div class="bg-orange rvt-m-right-sm">Flex child</div>
</div>
{{< /example >}}
