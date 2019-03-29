---
title: "Rivet Sass"
description: "Use Rivet's Sass source files in your project"
url: "/getting-started/sass/"
excludeFromStatus: true
---
## Using Sass
The Rivet CSS is built using the Sass (SCSS) CSS preprocessor. Both the Rivet `.zip` download and [the npm package]({{< relref "npm.md" >}}) include the SCSS source files that you can use in your app.

If you are using the Rivet npm package and have a build process in place for Sass already, you can import Rivet into your project directly:

{{< code lang="scss" >}}@import "node_modules/rivet-uits/sass/rivet.scss"
{{< /code >}}

Once you have imported the `rivet.scss` into your project you will then have access to all the same Sass variables to use in your project.

## Typography
{{< code lang="scss" >}}// Main type sizes map.

$key = pixel size, $value = relational units

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
);

// Type Size variables

$ts-12: map-get($type-sizes, 12); // .75rem (12px)
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

// Font weight variables 

$font-weight-bold: 700;
$font-weight-regular: 400;
{{< /code >}}

## Spacing

{{< code lang="scss" >}}$spacing-unit: .5rem      // 8px

$xxs: $spacing-unit/2;       // 4px
$xs: $spacing-unit;          // 8px
$sm: $spacing-unit * 2;      // 16px Base
$md: $spacing-unit * 3;      // 24px
$lg: $spacing-unit * 4;      // 32px
$xl: $spacing-unit * 5;      // 40px
$xxl: $spacing-unit * 8;     // 64px
{{< /code >}}

## Color

{{< code lang="scss" >}}$color-black--050: #fafafa;
$color-black--100: #eeeeee;

// NOTE: This black variant is an outlier. We don't include a "--150"
// variant with the other colors, but this color has worked really well
// for border colors on components like the header, etc.
// We could revisit and see if it makes sense to remove and replace any
// references moving forward.

$color-black--150: #eaeaea;
$color-black--200: #dddddd;
$color-black--300: #cccccc;
$color-black--400: #aaaaaa;
$color-black--500: #999999;
$color-black--600: #777777;
$color-black--700: #666666;
$color-black--800: #555555;
$color-black--900: #444444;

// Use this when you need a default (darkest) black.
$color-black--rich: #000000;

$color-blue--050: #edf1f6;
$color-blue--100: #dce3ee;
$color-blue--200: #b8c8dc;
$color-blue--300: #95adcb;
$color-blue--400: #7194ba;
$color-blue--500: #497ba9;
$color-blue--600: $color-blue;
$color-blue--700: #134a71;
$color-blue--800: #16324b;
$color-blue--900: #121c28;

// Green variants

$color-green: #008a28;

$color-green--050: #eaf3e8;
$color-green--100: #d4e8d2;
$color-green--200: #aad1a7;
$color-green--300: #7eb97c;
$color-green--400: #50a253;
$color-green--500: $color-green;
$color-green--600: #116d23;
$color-green--700: #16521d;
$color-green--800: #153717;
$color-green--900: #111f0f;

// Yellow variants

$color-yellow: #f5bb17;

$color-yellow--050: #ffeecd;
$color-yellow--100: #ffdd9b;
$color-yellow--200: $color-yellow;
$color-yellow--300: #d6a31a;
$color-yellow--400: #b58a1b;
$color-yellow--500: #94721b;
$color-yellow--600: #765a19;
$color-yellow--700: #584416;
$color-yellow--800: #3c2e13;
$color-yellow--900: #221b0c;

// Orange variants

$color-orange: #df3603;

$color-orange--050: #ffece5;
$color-orange--100: #ffd9cc;
$color-orange--200: #ffb49a;
$color-orange--300: #fa8e6b;
$color-orange--400: #ef663c;
$color-orange--500: $color-orange;
$color-orange--600: #b02f0a;
$color-orange--700: #82270d;
$color-orange--800: #571e0c;
$color-orange--900: #2f1407;
{{< /code >}}

## Breakpoints

{{< code lang="scss" >}}// Global breakpoints

$breakpoints: (
  sm: (480em/16),
  md: (740em/16),
  lg: (1080em/16),
  xl: (1260em/16),
  xxl: (1400em/16)
);

$breakpoint-sm: map-get($breakpoints, 'sm');
$breakpoint-md: map-get($breakpoints, 'md');
$breakpoint-lg: map-get($breakpoints, 'lg');
$breakpoint-xl: map-get($breakpoints, 'xl');
$breakpoint-xxl: map-get($breakpoints, 'xxl');
{{< /code >}}

## Shadows

{{< code lang="scss" >}}// Standard shadow(s)

$shadow-base: 0 1px 3px 2px rgba(0, 0, 0, .07);
{{< /code >}}