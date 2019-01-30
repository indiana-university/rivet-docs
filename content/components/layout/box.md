---
title: "Box"
description: "The box component can be used to help visually group related content"
status: "Alpha"
---
{{< alert variant="info" title="New in Rivet 1.2.0" >}}
The box is new as of 1.2.0. If you need help moving to 1.2.0, see our [instructions for updating Rivet](/components/#updating-the-rivet-npm-package").
{{< /alert >}}

## Default box
The most basic version of the box component includes a subtle rounded border and a white background. Padding and margins should be applied with [Rivet's spacing utility classes]({{< ref "/components/layout/spacing.md" >}}).

Additional variants of the box component can be created using the elements described in the following sections.

{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  This is basic box
</div>
{{< /example >}}

## Box body
Nesting an element with the `.rvt-box__body` class inside the box will add equal amounts of padding to each side of the box.

{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  <div class="rvt-box__body">
    This is a basic box
  </div>
</div>
{{< /example >}}

## Box header and footer
Optional header and footer elements can be nested inside the box to create more complex layouts.

In this example, we are using the `.rvt-box__header`, `.rvt-box__body`, and `.rvt-box__footer` elements to visually group content.

{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  <div class="rvt-box__header">
    Header text
  </div>
  <div class="rvt-box__body">
    <p class="rvt-m-all-remove">This is a box with a header, a footer, and some content with <a href="#">a
        link</a>.</p>
  </div>
  <div class="rvt-box__footer rvt-text-right">
    Footer text
  </div>
</div>
{{< /example >}}

## Light box variant
You can remove the subtle gray header and footer background by using the `.rvt-box--light` variant. This can be helpful in reducing visual clutter when using multiple box components on the same page.

{{< example lang="html" spacious="true" >}}<div class="rvt-box rvt-box--light">
  <div class="rvt-box__header">
    Header text
  </div>
  <div class="rvt-box__body">
    <p class="rvt-m-all-remove">This is a box with a header, a footer, and some content with <a href="#">a
        link</a>.</p>
  </div>
  <div class="rvt-box__footer rvt-text-right">
    Footer text
  </div>
</div>
{{< /example >}}

## Box rows
The `.rvt-box__row` class adds a small amount of padding and a subtle top border. This works particularly well for displaying lists of content within a Box.

### Box rows with a list
In the following example, we're using Rivet's plain list utility class along with the `.rvt-box__row` class to style the list items.

{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  <ul class="rvt-plain-list">
    <li class="rvt-box__row">
      <a href="#" class="rvt-link-bold">A link in a row</a>
    </li>
    <li class="rvt-box__row rvt-box__row--selected">
      Some text in a row
    </li>
    <li class="rvt-box__row">
      Some text in a row
    </li>
  </ul>
</div>
{{< /example >}}

### Box rows with generic elements
Box rows can also be created using `div` elements if lists do not make sense semantically.

{{< example lang="html" spacious="true" >}}
<div class="rvt-box">
  <div>
    <div class="rvt-box__row">
      Plain box row one
    </div>
    <div class="rvt-box__row">
      Plain box row two
    </div>
    <div class="rvt-box__row">
      Plain box row three
    </div>
  </div>
</div>
{{< /example >}}

{{< alert variant="warning" title="Box rows must be wrapped in a parent element" >}}
To ensure correct styling, a series of box rows must be wrapped in a parent element, such as a `ul` or `div`. Do not wrap box rows in an element with the `.rvt-box__body` class applied, as the extra padding will prevent the rows from filling the full width of the box.
{{< /alert >}}

## Compact box variant
The compact variant of the box component reduces the amount of padding applied to a box's header, footer, and content. This variant can be useful in situations where you are displaying large amounts of data and need to conserve vertical space.

{{< example lang="html" spacious="true">}}<div class="rvt-box rvt-box--compact">
  <div class="rvt-box__header">
    A box with rows
  </div>
  <ul class="rvt-plain-list">
    <li class="rvt-box__row">
      Some text in a row
    </li>
    <li class="rvt-box__row">
      Some text in a row
    </li>
    <li class="rvt-box__row">
      Some text in a row
    </li>
  </ul>
</div>
{{< /example >}}

## Colored box variant
The box component also supports colored variants based on [Rivet's alert color naming conventions]({{< ref "/components/overlays/alerts.md" >}}).

The colored box variants should be used sparingly and only to indicate some sort of state (error, warning, success, etc.) or call out important information in your application.

There are four colored box variants that follow Rivet's alert color naming convention:

- `.rvt-box--info`
- `.rvt-box--success`
- `.rvt-box--warning`
- `.rvt-box--danger`

{{< example lang="html" spacious="true">}}<div class="rvt-box rvt-box--danger">
  <div class="rvt-box__header">
    A box with rows
  </div>
  <ul class="rvt-plain-list">
    <li class="rvt-box__row">
      Some text in a row
    </li>
    <li class="rvt-box__row">
      Some text in a row
    </li>
    <li class="rvt-box__row">
      Some text in a row
    </li>
  </ul>
</div>
{{< /example >}}

### Colored box row variants
Colors can also be applied to individual rows to call out state changes or important information:

- `.rvt-box__row--info`
- `.rvt-box__row--success`
- `.rvt-box__row--warning`
- `.rvt-box__row--danger`

The row variant modifier classes add a subtle background color and left border that matches each of Rivet's alert styles.

{{< example lang="html" spacious="true">}}<div class="rvt-box">
  <div class="rvt-box__header">
    A box with rows
  </div>
  <div>
    <div class="rvt-box__row">
      Default row
    </div>
    <div class="rvt-box__row rvt-box__row--info">
      Info row variant
    </div>
    <div class="rvt-box__row rvt-box__row--success">
      Success row variant
    </div>
    <div class="rvt-box__row rvt-box__row--warning">
      Warning row variant
    </div>
    <div class="rvt-box__row rvt-box__row--danger">
      Danger row variant
    </div>
  </div>
</div>
{{< /example >}}

## Card variant
The card variant of the box component can be used along with Rivet's [type scale utilities]({{< ref "/components/layout/typography.md" >}}) and [spacing utilities]({{< ref "/components/layout/spacing.md" >}}) to create basic card layouts. Adding the `.rvt-box--card` modifier class adds a subtle shadow to help visually separate the the box content from the background.

{{< example lang="html" spacious="true" >}}<div class="rvt-box rvt-box--card">
  <div class="rvt-box__body">
    This is the card variant of a box with a body element
  </div>
</div>
{{< /example >}}

### Card image
The card variant can include an optional image. Nesting an `img` inside an element with the `.rvt-box__image` class will apply the proper sizing, cropping, and border radius.

{{< example lang="html" spacious="true">}}<div class="rvt-box rvt-box--card">
  <div class="rvt-box__image">
    <img src="http://www.fillmurray.com/g/800/450" alt="">
  </div>
  <div class="rvt-box__body">
    <h2 class="rvt-ts-20 rvt-text-bold">Card title</h2>
    <p class="rvt-m-top-xxs">This is the card variant of a box with a body element</p>
    <a href="#" class="rvt-link-bold">Card link</a>
  </div>
</div>
{{< /example >}}

{{< alert variant="warning" title="Card images must be the first child" >}}
The element with the `.rvt-box__image` class must be the first child of `.rvt-box` so that the image sits flush with the sides of the box (see above example). It should not be used inside elements with the `.rvt-box__body` or `.rvt-box__row` classes.
{{< /alert >}}
