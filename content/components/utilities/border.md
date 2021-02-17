---
title: "Border"
asOf: 1.0.0
description: "Add borders to or remove borders from an element"
status: "Ready"
---

## Add borders

Add borders to an element using the following utility classes:

- `.rvt-border-top`
- `.rvt-border-right`
- `.rvt-border-bottom`
- `.rvt-border-left`
- `.rvt-border-all`

All borders added using these utility classes have the value `1px solid #dddddd`.

{{< example lang="html" >}}<div class="rvt-border-top rvt-p-all-md">
    <span>Border top</span>
</div>
<div class="rvt-border-right rvt-m-top-md rvt-p-all-md">
    <span>Border right</span>
</div>
<div class="rvt-border-bottom rvt-m-top-md rvt-p-all-md">
    <span>Border bottom</span>
</div>
<div class="rvt-border-left rvt-m-top-md rvt-p-all-md">
    <span>Border left</span>
</div>
<div class="rvt-border-all rvt-m-top-md rvt-p-all-md">
    <span>Border all</span>
</div>
{{< /example >}}

## Add a border radius

Use the `.rvt-border-radius` utility class to add a subtle .25rem/4px border radius to an element.

{{< example lang="html" >}}<div class="rvt-border-all rvt-border-radius rvt-p-all-md">
    <span>Border radius</span>
</div>
{{< /example >}}

## Remove borders

Remove borders from an element using the following utility classes:

- `.rvt-border-top-none`
- `.rvt-border-right-none`
- `.rvt-border-bottom-none`
- `.rvt-border-left-none`
- `.rvt-border-all-none`

The examples below show how to use these utility classes to remove borders from a [box component]({{< ref "../layout/box.md" >}}).

{{< example lang="html" >}}<div class="rvt-box rvt-border-top-none rvt-p-all-md">
    <span>No top border</span>
</div>

<div class="rvt-box rvt-border-right-none rvt-m-top-md rvt-p-all-md">
    <span>No right border</span>
</div>

<div class="rvt-box rvt-border-bottom-none rvt-m-top-md rvt-p-all-md">
    <span>No bottom border</span>
</div>

<div class="rvt-box rvt-border-left-none rvt-m-top-md rvt-p-all-md">
    <span>No left border</span>
</div>

<div class="rvt-box rvt-border-all-none rvt-m-top-md rvt-p-all-md">
    <span>No border</span>
</div>
{{< /example >}}