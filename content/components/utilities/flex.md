---
title: "Flex"
description: "This set of responsive flexbox utilities can help you fine-tune layouts based on different screen sizes."
requiresJs: false
status: "Alpha"
newIn: 1.3.0
---
## Flex utilities example
The Rivet flexbox utilities provide a robust set of CSS classes you can use to lay out items in a container. These utilities take advantage of [CSS flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and are designed to be used when fine-tuning the layout of items at the individual component level. 

The flex utilities **are not intended for page layout**. You should use the [Rivet grid system]({{< ref "components/layout/grid.md" >}}) for page layout.

{{< example lang="html" >}}<div class="rvt-flex rvt-wrap">
  <div class="rvt-bg-blue rvt-m-right-sm">Item one</div>
  <div class="rvt-bg-blue rvt-m-right-sm">Item two</div>
  <div class="rvt-grow-1 rvt-bg-blue rvt-m-right-sm">Item three</div>
  <div class="rvt-bg-blue rvt-m-right-sm">Item four</div>
  <div class="rvt-bg-blue rvt-m-right-sm">Item five</div>
</div>
{{< /example >}}

## Available flex utilities
The flex utilities come with CSS classes for most [flex properties](https://developer.mozilla.org/en-US/docs/Web/CSS/flex), but not all.

Because we have designed these utilities to be generic, we have intentionally left out flex properties that require specific knowledge of how many items live in a given flex container (e.g. `order`), as we'd be unable to create utility classes that would cover every likely combination. We've left out properties that set widths of flex children (e.g. `flex-basis`) for similar reasons.

{{< alert variant="info" title="Help with flexbox" >}}
The specifics of how the various flexbox properties work is beyond the scope of this documentation. If you need help with flexbox, we recommend checking out this [Complete Guide to Flexbox on CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
{{< /alert >}}

### Responsive flex utilities
All of the flex utilities have responsive variants that correspond to [Rivet's standard breakpoints]({{< ref "components/layout/grid.md#grid-breakpoints" >}}). Adding the breakpoint suffix `-<breakpoint name>-up` will cause the flex utility to start working at that breakpoint screen size and larger, similar to how Rivet's [spacing]({{< ref "components/layout/spacing.md" >}}) and [typography]({{< ref "components/layout/typography.md" >}}) classes work.

{{< example lang="html" >}}<div class="rvt-flex-md-up rvt-justify-space-between-lg-up">
  <div class="rvt-bg-blue rvt-m-right-sm-md-up">Item one</div>
  <div class="rvt-bg-blue rvt-m-right-sm-md-up">Item two</div>
  <div class="rvt-bg-blue rvt-m-right-sm-md-up">Item three</div>
</div>
{{< /example >}}

### Flex container utilities
A flex container is generally the parent element to which you would apply the `display: flex;` property. The flex utilities have CSS classes for most of the flex container properties available in the flexbox model.

The following flex **container** CSS utility classes are available:

#### [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex), [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction), and [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
- `.rvt-flex`
- `.rvt-inline-flex`
- `.rvt-row`
- `.rvt-row-reverse`
- `.rvt-column`
- `.rvt-column-reverse`
- `.rvt-wrap`
- `.rvt-no-wrap`
- `.rvt-wrap-reverse`

#### [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- `.rvt-justify-start`
- `.rvt-justify-end`
- `.rvt-justify-center`
- `.rvt-justify-space-between`
- `.rvt-justify-space-around`
- `.rvt-justify-space-evenly`

#### [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
- `.rvt-content-start`
- `.rvt-content-end`
- `.rvt-content-center`
- `.rvt-content-stretch`
- `.rvt-content-baseline`

#### [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- `.rvt-items-start`
- `.rvt-items-end`
- `.rvt-items-center`
- `.rvt-items-stretch`
- `.rvt-items-baseline`

### Flex item utilities
A flex item is generally the direct child of any flex container. The flex utilities have CSS classes for most of the flex item properties in the flexbox model.

The following flex **item** CSS utility classes are available:

#### [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) and [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
- `.rvt-shrink-1`
- `.rvt-shrink-0`
- `.rvt-grow-1`
- `.rvt-grow-0`

#### [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
- `.rvt-self-start`
- `.rvt-self-end`
- `.rvt-center-end`
- `.rvt-stretch-end`
- `.rvt-baseline-end`
