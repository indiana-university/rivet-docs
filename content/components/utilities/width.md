---
title: "Width"
description: "Use Rivet's width utilities to constrain the width of interface elements, particularly form fields."
requiresJs: false
status: "Ready"
asOf: 1.5.0
---
{{< alert variant="info" title="New in Rivet 1.5.0" >}}
The width utilities were introduced in Rivet 1.5.0. If you need help updating to 1.5.0, see our [instructions for updating Rivet](/components/#updating-the-rivet-npm-package").
{{< /alert >}}

## Width utility CSS classes
You can constrain the width of a block-level element by applying one of the classes listed below.

{{< widths >}}{{< /widths >}}

{{< alert variant="warning" title="Not intended for layout" >}}
The width utility classes are intended for use when fine-tuning the appearance of individual elements on a page and should not be used for high-level page layout. To lay out pages, use the [Rivet grid]({{< ref "/components/layout/grid.md" >}}) instead.
{{< /alert >}}

## Width utility examples

Width utility classes are especially useful for form inputs, which should [have their widths constrained to match the expected length of the information](https://www.nngroup.com/articles/web-form-design/) you're asking someone to give you.

For example, a form field asking someone for their ZIP code should be much smaller than one asking for their street address.

{{< example lang="html" >}}<div class="rvt-width-xxs">
  <label for="input-1">xxs</label>
  <input type="text" id="input-1">
</div>

<div class="rvt-width-xs rvt-m-top-lg">
  <label for="input-2">xs</label>
  <input type="text" id="input-2">
</div>

<div class="rvt-width-sm rvt-m-top-lg">
  <label for="input-3">sm</label>
  <input type="text" id="input-3">
</div>

<div class="rvt-width-md rvt-m-top-lg">
  <label for="input-4">md</label>
  <input type="text" id="input-4">
</div>

<div class="rvt-width-lg rvt-m-top-lg">
  <label for="input-5">lg</label>
  <input type="text" id="input-5">
</div>

<div class="rvt-width-xl rvt-m-top-lg">
  <label for="input-6">xl</label>
  <input type="text" id="input-6">
</div>

<div class="rvt-width-xxl rvt-m-top-lg">
  <label for="input-7">xxl</label>
  <input type="text" id="input-7">
</div>
{{< /example >}}

### Responsive widths
Each width utility class comes with a set of modifiers that allow you to specify the screen size at which the constrained width should take effect.

{{< code >}}<div class="rvt-width-sm-lg-up">
    <!-- markup -->
</div>
{{< /code >}}

With these spacing classes applied, the `div` would have a width of 192px/12rem only on large screens (1080px wide) and up.

All width utility classes have the following responsive modifiers available to them:

- `-sm-up` - screens **480–740px** and wider
- `-md-up` - screens **740–1080px** and wider
- `-lg-up` - screens **1080–1260px** and wider
- `-xl-up` - screens **1260–1400px** and wider
- `-xxl-up` - screens **1400px** and wider

{{< alert variant="info" title="Rivet breakpoints" >}}
See the documentation about Rivet's global breakpoints in the [grid documentation](../grid/#grid-breakpoints).
{{< /alert >}}

## Combining width and flex utilities
The width utility classes can be combined with [Rivet's flex utilities]({{< ref "/components/utilities/flex.md" >}}) to position elements next to one another horizontally.

{{< example lang="html" >}}<div class="rvt-display-flex">
  <div class="rvt-width-xl rvt-m-right-md">
    <label for="input-8">Flex inputs</label>
    <input type="text" id="input-8">
  </div>
  
  <div class="rvt-width-sm">
    <label for="input-9">Flex inputs</label>
    <input type="text" id="input-9">
  </div>
</div>
{{< /example >}}

## Width Sass variables
If you are using [Rivet's Sass](https://github.com/indiana-university/rivet-source/blob/develop/src/sass/core/_variables.scss#L325) files, you can directly access any width unit by its variable name.

See the documentation on getting started with Rivet for a [complete list of Rivet's Sass variables]({{< relref "sass.md" >}}).

{{< sassdocs collection="widths" >}}
