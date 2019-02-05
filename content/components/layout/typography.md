---
title: "Typography"
description: "Use the Rivet type scale to apply consistent typographic design to your application."
requiresJs: false
status: "Ready"
---

## About the type scale
Typography is the core component of any interface. Rivet uses a defined [Major Second](http://type-scale.com/?size=16&scale=1.125&text=A%20Visual%20Type%20Scale&webfont=Libre+Baskerville&font-family=%27Libre%20Baskerville%27,%20serif&font-weight=400&font-family-headers=&font-weight-headers=inherit&background-color=white&font-color=#333) type scale that has been rounded to the nearest whole pixel value. Using sizes from this scale will help create a hierarchy and consistency throughout your application.

## Type scale examples
{{< typescale data="tokens" >}}{{< /typescale >}}

## Type scale Sass variables
If you are using [Rivet's Sass][type-variables] files you can directly access any value in the Rivet type scale by its variable name. All of the type scale values are stored in a [Sass map][sass-maps] that we use to produce the type [scale utility classes](./#type-scale-examples), including the [aliases listed in the following documentation](./#type-scale-aliases).

{{< code >}}// Main Sass map

$type-sizes: (
  12: .75rem,
  xxs: .75rem,
  14: .875rem,
  xs: .875rem,
  16: 1rem,
  base: 1rem,
  18: 1.125rem,
  20: 1.25rem,
  sm: 1.25rem,
  23: 1.4375rem,
  26: 1.625rem,
  md: 1.625rem,
  29: 1.8125rem,
  32: 2rem,
  lg: 2rem,
  36: 2.25rem,
  41: 2.5625rem,
  xl: 2.5625rem,
  46: 2.875rem,
  52: 3.25rem,
  xxl: 3.25rem,
)
{{< /code >}}

From the main Sass map we then create shortcut variables for each type size, as well as a set of memorable alias variables e.g. `-xxs`, `-xs`, `-sm`, `-md`, `-lg`, `-xl`, `-xxl`.

{{< code >}}// Type Size variables

$ts-12: map-get($type-sizes, 12);
$ts-14: map-get($type-sizes, 14);
$ts-16: map-get($type-sizes, 16);
$ts-18: map-get($type-sizes, 18);
$ts-20: map-get($type-sizes, 20);
$ts-23: map-get($type-sizes, 23);
$ts-26: map-get($type-sizes, 26);
$ts-29: map-get($type-sizes, 29);
$ts-32: map-get($type-sizes, 32);
$ts-36: map-get($type-sizes, 36);
$ts-41: map-get($type-sizes, 41);
$ts-46: map-get($type-sizes, 46);
$ts-52: map-get($type-sizes, 52);

// Type scale aliases

$ts-xxs: $ts-12;
$ts-xs: $ts-14;
$ts-base: $ts-16;
$ts-sm: $ts-20;
$ts-md: $ts-26;
$ts-lg: $ts-32;
$ts-xl: $ts-41;
$ts-xxl: $ts-52;
{{< /code >}}

### Using typography Sass variables
Here's an example of how you might use the type scale Sass variables when customizing Rivet:

{{< code >}}.custom-heading {
  font-size: $ts-26; // Font size = 26px/1.625rem
  font-weight: 700;
}
{{< /code >}}

## Typeface
Benton Sans is an official IU font and is available for free to all IU schools, departments, offices, and affiliated units.

## Font weight
Font weight can be used to emphasize different parts of your interface and help enforce visual hierarchy. Rivet uses Benton Sans Regular and Benton Sans Bold font weights.

## Implementation notes
Type scale classes should only be applied to typographic elements such as headings, paragraphs, and list items containing text. Rivet uses `rem` to express font sizes, so adding type scale classes to block-level container elements may cause unexpected results.

Try to keep the number of different font sizes you use in your application to a minimum. The size of fonts depends on the design of you application, but picking a handful of font sizes and sticking to them makes it easier to maintain consistency throughout the interface.

### Type scale aliases
To make it easier to keep type sizes to a minimum we have create a few CSS utility classes that follow the same naming convention as the [Rivet spacing utilities](../spacing). These type scale alias utilities are mapped directly to type sizes in the the Rivet type scale [shown in the table above](#type-scale-examples).

- `.rvt-ts-xxs`
- `.rvt-ts-xs`
- `.rvt-ts-sm`
- `.rvt-ts-md`
- `.rvt-ts-lg`
- `.rvt-ts-xl`
- `.rvt-ts-xxl`

{{< example lang="html" >}}<h1 class="rvt-ts-xxs">Fulfilling the promise</h1>
<h1 class="rvt-ts-xs">Fulfilling the promise</h1>
<h1 class="rvt-ts-sm">Fulfilling the promise</h1>
<h1 class="rvt-ts-md">Fulfilling the promise</h1>
<h1 class="rvt-ts-lg">Fulfilling the promise</h1>
<h1 class="rvt-ts-xl">Fulfilling the promise</h1>
<h1 class="rvt-ts-xxl">Fulfilling the promise</h1>
{{< /example >}}

### Responsive type scale
Each type scale helper class comes with a set of modifiers that allow you to adjust font-size at different screen sizes. Here's an example.

{{< example lang="html" >}}<h1 class="rvt-ts-20 rvt-ts-32-md-up">Profile page</h1>
<p class="rvt-ts-14">The profile page is where you can select your personal settings.</p>
{{< /example >}}

Given the markup above, the `h1` would have a font size of 1.25rem/20px on all screens small and larger, and 2.25rem/36px on medium screens(740px wide) and larger.

The responsive type scale CSS classes use the following conventions:

- `-sm-up` - screens **480–740px** and wider
- `-md-up` - screens **740–1080px** and wider
- `-lg-up` - screens **1080–1260px** and wider
- `-xl-up` - screens **1260–1400px** and wider
- `-xxl-up` - screens **1400px** and wider

[type-variables]: https://github.com/indiana-university/rivet-source/blob/develop/src/sass/core/_variables.scss
[sass-maps]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps
