---
title: "Box"
description: "The box component can be used to help visually group related content"
status: "Alpha"
---
## Default Box
The most basic version of the Box component includes a subtle border, a border radius, and a white background.
Padding and margins should be applied with utility classes and additional layouts variants of the Box can be created
using the Box elements described in the following sections.

{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  This is basic box
</div>
{{< /example >}}

## Box body
Nesting the `.rvt-box__body` element inside the Box will add equal amounts of padding to all sides.

{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  <div class="rvt-box__body">
    This is a basic box
  </div>
</div>
{{< /example >}}

## Box header and footer
The optional header and footer elements can be nested inside the box to create more complex layouts.

In this example, we are using the `.rvt-box__header`, `.rvt-box__body`, and `.rvt-box__footer` elements to visually group content.

{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  <div class="rvt-box__header">
    Header text
  </div>
  <div class="rvt-box__body">
    <p class="rvt-m-all-remove">This is a Box with a header, footer, and and some content with <a href="#">a
        link</a>.</p>
  </div>
  <div class="rvt-box__footer rvt-text-right">
    Footer text
  </div>
</div>
{{< /example >}}

## Box light variant
By default, the box header and footer have a subtle gray background, but you can remove the subtle header and footer shading by using the `.rvt-box--light` variant. This can be helpful in reducing visual weight when using multiple box components on the same page.

{{< example lang="html" spacious="true" >}}<div class="rvt-box rvt-box--light">
  <div class="rvt-box__header">
    Header text
  </div>
  <div class="rvt-box__body">
    <p class="rvt-m-all-remove">This is a Box with a header, footer, and and some content with <a href="#">a
        link</a>.</p>
  </div>
  <div class="rvt-box__footer rvt-text-right">
    Footer text
  </div>
</div>
{{< /example >}}

## Box rows
The Box Row element adds a small amount of padding and a subtle top border to all elements it is applied to. The `.rvt-box__row` element works particularly well for displaying lists of content within a Box.

### Box rows with a list
In the following example we're using Rivet's plain list utility class along with the `.rvt-box__row` class to style the list items, however the `.rvt-box__row` class can be used on regular `div` elements as well.

{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  <!--
    Box rows must be wrapped in a parent element for styling purposes.
  -->
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

## Box rows with generic elements
It is not required to create box rows using lists. Box rows can also be created using regular `div` elements if lists do not make sense semantically.

{{< alert variant="warning" title="Box rows must be wrapped in a parent element" >}}
For styling purposes box rows must be wrapped in a parent element. Here we are using a generic div to wrap the box rows.
{{< /alert >}}

{{< example lang="html" spacious="true" >}}
<div class="rvt-box">
  <!--
    Box rows must be wrapped in a parent element for styling purposes.
  -->
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

## Card variant
The Card variant of the Box component can be used along with Rivet's type scale and spacing utilities to create basic card layouts. Adding the `.rvt-box--card` modifier adds a subtle box-shadow to help visually separate the the Box content from the background.

{{< example lang="html" spacious="true" >}}<div class="rvt-box rvt-box--card">
  <div class="rvt-box__body">
    This is the Card variant of a Box with a body element
  </div>
</div>
{{< /example >}}

## Card image element
The card variant also includes and options Image element that can be used when you need to display an image as a part of you card layout. Wrapping and image in the `.rvt-box__image` class will apply the proper border-radius and hide the image overflow.

**NOTE**: The Image element should be the first child of the Box element when using so that it sets flush with the sides of the box. It should not be used inside of the Body or Row elements.

{{< example lang="html" spacious="true">}}<div class="rvt-box rvt-box--card" style="max-width: 300px;">
  <div class="rvt-box__image">
    <img src="http://www.fillmurray.com/g/800/450" alt="">
  </div>
  <div class="rvt-box__body">
    <h2 class="rvt-ts-20 rvt-text-bold">Card title</h2>
    <p class="rvt-m-top-xxs">This is the Card variant of a Box with a body element</p>
    <a href="#" class="rvt-link-bold">Card link</a>
  </div>
</div>
{{< /example >}}

## Compact Box
The compact version of the Box component reduces the amount of padding on the various Box elements. This variant can be
useful in situations where you are displaying large amounts of data and need to conserve vertical space.

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

## Box Variants
The Box component also supports colored variants based on Rivet's alert color naming conventions.

### Box variant usage
The colored Box variants should be used sparingly and **only to indicate some sort of state** (error, warning, success, etc.) or call out important information in your application.

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

## Box Row Variants
The Box Row element also supports colored variants that can be used to call out state changes or important information on individual rows.

The Box Row variants follow the same naming conventions:

- `.rvt-box__row--info`
- `.rvt-box__row--success`
- `.rvt-box__row--warning`
- `.rvt-box__row--danger`

The row variant modifier classes add a subtle background color and 4px left border (box-shadow) that matches each of Rivet's alert styles.

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