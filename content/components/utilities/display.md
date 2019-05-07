---
title: "Display"
asOf: 1.0.0
description: "Use Rivet's display utilities to make content containers behave like block or inline elements."
status: "Ready"
---
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

{{< alert variant="warning" title="Class deprecation" >}}
In previous versions of Rivet, we used the `.rvt-display-flex` and `.rvt-vertical-center` classes to lay out items in a container. These classes are now deprecated in favor of the new [Rivet flex utility classes](https://rivet.iu.edu/components/utilities/flex/). 

If you are using `.rvt-display-flex` or `.rvt-vertical-center`, please update your application to use the new flex utility classes.
{{< /alert >}}

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
