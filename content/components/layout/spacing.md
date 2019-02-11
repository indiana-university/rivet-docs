---
title: "Spacing"
description: "A robust set of responsive spacing utilities to help fine-tune your layout."
requiresJs: false
status: "Ready"
---
## About spacing
To maintain consistent spacing between components and to help create a sense of vertical rhythm, we have created a spacing system based on `.5rem` (8px) unit. Margins and padding can be applied using a set of CSS utility classes to add or remove margin and padding from any element.

### Spacing examples
{{< spacing >}}{{< /spacing >}}

## Spacing Sass variables
If you are using [Rivet's Sass](https://github.com/indiana-university/rivet-source/blob/develop/src/sass/core/_variables.scss#L325) files you can directly access any spacing unit by its variable name. The spacing unit variables follow the same naming conventions as all of Rivet's spacing utility classes.

{{< code >}}// Global spacing units

$spacing-unit: .5rem;        // 8px

$xxs: $spacing-unit/2;       // 4px
$xs: $spacing-unit;          // 8px
$sm: $spacing-unit * 2;      // 16px Base
$md: $spacing-unit * 3;      // 24px
$lg: $spacing-unit * 4;      // 32px
$xl: $spacing-unit * 5;      // 40px
$xxl: $spacing-unit * 8;     // 64px
{{</ code >}}

## Implementation
The CSS classes for the spacing system use the following conventions:

- `rvt` = namespace
- `m`, `p` = margin, padding
- `top`, `right`, `bottom`, `left` = the top, right, bottom, left side of the element
- `tb-` = **Top and bottom** of the element (e.g. `rvt-m-tb-xl`)
- `lr-` = **Left and right** of the element (e.g. `rvt-p-lr-md`)
- `xs` = Extra Small (8px/.5rem)
- `sm` = Small (16px/1rem)
- `md` = Medium (24px/1.5rem)
- `lg` = Large (32px/2rem)
- `xl` = Extra large (40px/2.5rem)
- `xxl` = Extra extra large (48px/3rem)

So the class `.rvt-m-top-sm` would add 16px/1rem of margin on all screen sizes to the top of the element it was applied to.

### Responsive spacing
Each spacing utility class also comes with a set of modifiers that allow you to adjust spacing at different screen sizes. Take the following `div`

{{< code >}}<div class="rvt-p-bottom-sm rvt-p-bottom-lg-lg-up">
    ...
</div>
{{< /code >}}

With these spacing classes applied, it would have 16px/1rem of bottom padding at all screen sizes and 32px/2rem of bottom padding on large screens (1080px wide) and up.

### Spacing modifiers
All spacing utilities described above have the following responsive modifiers available to them:

- `-sm-up` - screens **480–740px** and wider
- `-md-up` - screens **740–1080px** and wider
- `-lg-up` - screens **1080–1260px** and wider
- `-xl-up` - screens **1260–1400px** and wider
- `-xxl-up` - screens **1400px** and wider

{{< alert variant="info" title="Rivet breakpoints" >}}
See the documentation about Rivet's global breakpoints in [the grid documentation](../grid/#grid-breakpoints).
{{< /alert >}}

### All spacing
Using the size conventions above you could apply the class `.rvt-p-all-xl` to add an Extra large amount (40px/2.5rem) to both the top and bottom of an element.

### No spacing
If you want to remove all margin or padding from and element you could use the class `.rvt-m-all-remove`, or `.rvt-p-all-remove`.
