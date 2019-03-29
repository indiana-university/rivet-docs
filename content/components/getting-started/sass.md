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
[Read the documentation on typography]({{< relref "../layout/typography.md" >}}) to learn more about Rivet's responsive type scale CSS classes.

{{< sassdocs collection="typography" >}}{{< /sassdocs >}}

## Spacing
[Read the documentation on spacing]({{< relref "../layout/spacing.md" >}}) to learn more about Rivet's responsive spacing CSS classes.

{{< sassdocs collection="spacing" >}}{{< /sassdocs >}}

## Color
We encourage you to use Rivet to fit your needs, and sometimes that means adjusting the colors. We’ve include tints in Rivet for this very reason.

Tints are colors mixed with different degrees of white. They offer flexibility and a greater range of color to draw attention or indicate actions. (You’ll notice that we tint our secondary buttons to indicate a hover state, for example.) 

- **Do** use tints as accents in your custom components
- **Do** use tints sparingly
- **Don’t** use tints to replace colors of existing components

{{< sassdocs collection="colors" >}}{{< /sassdocs >}}

## Breakpoints
{{< sassdocs collection="breakpoints" >}}{{< /sassdocs >}}

## Shadows
{{< code lang="scss" >}}// Standard shadow(s)

$shadow-base: 0 1px 3px 2px rgba(0, 0, 0, .07);
{{< /code >}}