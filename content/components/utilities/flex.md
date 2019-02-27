---
title: "Flex"
description: "This set of responsive flexbox utilities can help you fine-tune layouts based on different screen sizes."
requiresJs: false
status: "Alpha"
newIn: 1.3.0
---
## Flex utilities example
The Rivet flexbox utilities provide a robust set of CSS classes you can use to layout items in a container. They should be used to layout items at the component level, **not for page layout**. You should use [the Rivet grid system]({{< ref "components/layout/grid.md" >}}) for page layout.

{{< example lang="html" >}}<div class="rvt-flex rvt-wrap">
  <div class="rvt-bg-blue rvt-m-right-sm">Item one</div>
  <div class="rvt-bg-blue rvt-m-right-sm">Item two</div>
  <div class="rvt-grow-1 rvt-bg-blue rvt-m-right-sm">Item three</div>
  <div class="rvt-bg-blue rvt-m-right-sm">Item four</div>
  <div class="rvt-bg-blue rvt-m-right-sm">Item five</div>
</div>
{{< /example >}}

## Available flex utilities
The flex utilities come with CSS classes for most flex properties, but not all. We have intentionally left out flex properties that deal with specific numbers of items (e.g. `order`) in a flex container, and properties that set widths of flex children (e.g. `flex-basis`).

### Responsive flex utilities
All of the flex utilities have responsive variants that correspond to [Rivet's standard breakpoints]({{< ref "components/utilities/flex.md##grid-breakpoints" >}}). Adding the breakpoint suffix `-<breakpoint name>-up`, will cause the flex utility to start working at that breakpoint screen size and larger, similar to how Rivet's [spacing]({{< ref "components/layout/spacing.md" >}}) and [typography]({{< ref "components/layout/typography.md" >}}) classes work.

{{< example lang="html" >}}<div class="rvt-flex-md-up rvt-justify-space-between-lg-up">
  <div class="rvt-bg-blue rvt-m-right-sm-md-up">Item one</div>
  <div class="rvt-bg-blue rvt-m-right-sm-md-up">Item two</div>
  <div class="rvt-bg-blue rvt-m-right-sm-md-up">Item three</div>
</div>
{{< /example >}}

{{< alert variant="info" title="Help with flexbox" >}}
The specifics of how the various flexbox properties work is out of the scope of this documentation. If you need help with flexbox we recommend checking out this ["Complete Guide to Flexbox" article on CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
{{< /alert >}}

### Flex container utilities
A flex container is generally the parent element to which you would apply the `display: flex;` property. The flex utilities have CSS classes for most of the flex container properties available in the flexbox model.

The following flex **container** CSS utility classes are available:

#### flex, flex-direction, and flex-wrap
- `.rvt-flex`
- `.rvt-inline-flex`
- `.rvt-row`
- `.rvt-row-reverse`
- `.rvt-column`
- `.rvt-column-reverse`
- `.rvt-wrap`
- `.rvt-no-wrap`
- `.rvt-wrap-reverse`

#### justify-content
- `.rvt-justify-start`
- `.rvt-justify-end`
- `.rvt-justify-center`
- `.rvt-justify-space-between`
- `.rvt-justify-space-around`
- `.rvt-justify-space-evenly`

#### align-content
- `.rvt-content-start`
- `.rvt-content-end`
- `.rvt-content-center`
- `.rvt-content-stretch`
- `.rvt-content-baseline`

#### align-items
- `.rvt-items-start`
- `.rvt-items-end`
- `.rvt-items-center`
- `.rvt-items-stretch`
- `.rvt-items-baseline`

### Flex item utilities
A flex item is generally the direct child of any flex container. The flex utilities have CSS classes for most of the flex item properties in the flexbox model, except for the ones listed in [**Available flex utilities**]({{< ref "components/utilities/flex.md#available-flex-utilities" >}}) section.

The following flex **item** CSS utility classes are available:

#### flex-shrink and flex-grow
- `.rvt-shrink-1`
- `.rvt-shrink-0`
- `.rvt-grow-1`
- `.rvt-grow-0`

#### align-self
- `.rvt-self-start`
- `.rvt-self-end`
- `.rvt-center-end`
- `.rvt-stretch-end`
- `.rvt-baseline-end`
