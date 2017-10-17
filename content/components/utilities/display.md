---
title: "Display"
description: "The Rivet display utility classes make it easy to control how elements display on screen and how they are presented to assistive technologies like screen readers."
status: "Beta"
---

## Screen reader only
Use the `.rvt-sr-only` utility class to visually hide content, but still leave it accessible to screen readers.

{{< example lang="html" >}}<h1 class="rvt-ts-32">This text is visible <span class="rvt-sr-only">but, this text is visually hidden and still accessible to screen readers.</span></h1>
{{< /example >}}

## Visually hidden labels example
Another practical example of when to use the the `.rvt-sr-only` utility is when you need to hide a form label from visual users, but still want it to be available to those using assistive technology.

{{< example lang="html" >}}<label for="hidden-label" class="rvt-sr-only">Hidden label</label>
<input type="text" id="hidden-label">
{{< /example >}}

## Display property utilities
The Rivet `rvt-display-*` utilities can be used to easily change the css `display:` property. The display utilities included in Rivet are:

- `.rvt-display-inline`
- `.rvt-display-inline-block`
- `.rvt-display-block`
- `.rvt-display-flex`

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
