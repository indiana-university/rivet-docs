---
title: "Display"
description: "The Rivet display utility classes make it easy to control how elements display on screen and how they are presented to assistive technologies like screen readers."
status: "Alpha"
---

## Screen reader only
Use the `.sr-only` utility class to visually hide content, but still leave it accessible to screen readers.

{{< example lang="html" >}}<h1 class="ts-32">This text is visible <span class="sr-only">but, this text is visually hidden and still accessible to screen readers.</span></h1>
{{< /example >}}

## Visually hidden labels example
Another practical example of when to use the the `.sr-only` utility is when you need to hide a form label from visual users, but still want it to be available to those using assistive technology.

{{< example lang="html" >}}<label for="hidden-label" class="sr-only">Hidden label</label>
<input type="text" id="hidden-label">
{{< /example >}}

## Display property utilities
The Rivet `display-*` utilities can be used to easily change the css `display:` property. The display utilities included in Rivet are:

- `.display-inline`
- `.display-inline-block`
- `.display-block`
- `.display-flex`

{{< example lang="html" >}}<div class="display-inline bg-midnight">Display inline</div>
{{< /example >}}

{{< example lang="html" >}}<span class="display-block bg-green">Display block</span>
{{< /example >}}

{{< example lang="html" >}}<div class="display-flex">
    <div class="bg-orange m-right-sm">Flex child</div>
    <div class="bg-orange m-right-sm">Flex child</div>
    <div class="bg-orange m-right-sm">Flex child</div>
</div>
{{< /example >}}
