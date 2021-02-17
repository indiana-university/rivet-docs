---
title: "Border"
asOf: 1.0.0
description: "Use Rivet's border utilities to add a border to any or all sides of an element"
status: "Ready"
---
## Border utility examples
Easily add borders to any element using the following utility classes. All borders applied via utility classes will have the value `1px solid #dddddd`. We've also included an extra border utility class to add the default border-radius (.25rem/4px) to an element.

{{< example lang="html" >}}<ul class="rvt-plain-list">
    <li class="rvt-m-top-md">
        <!--
            Using some padding utilities here for demo purposes,
            but they are not required to use with border utilities
        -->
        <div class="rvt-border-top rvt-p-all-md">
            <span>Border top</span>
        </div>
    </li>
    <li class="rvt-m-top-md">
        <div class="rvt-border-right rvt-p-all-md">
            <span>Border right</span>
        </div>
    </li>
    <li class="rvt-m-top-md">
        <div class="rvt-border-bottom rvt-p-all-md">
            <span>Border bottom</span>
        </div>
    </li>
    <li class="rvt-m-top-md">
        <div class="rvt-border-left rvt-p-all-md">
            <span>Border left</span>
        </div>
    </li>
    <li class="rvt-m-top-md">
        <div class="rvt-border-all rvt-p-all-md">
            <span>Border all</span>
        </div>
    </li>
    <li class="rvt-m-top-md">
        <div class="rvt-border-all rvt-border-radius rvt-p-all-md">
            <span>Border radius</span>
        </div>
    </li>
</ul>
{{< /example >}}

## Border utility CSS classes

- `rvt-border-top`
- `rvt-border-right`
- `rvt-border-bottom`
- `rvt-border-left`
- `rvt-border-all`
- `rvt-border-radius`