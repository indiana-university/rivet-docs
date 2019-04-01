---
title: "Rivet Sass"
description: "Use Rivet's Sass source files in your project"
url: "/getting-started/sass/"
excludeFromStatus: true
---
## Using Sass
Rivet's CSS is built using the [Sass (SCSS) CSS preprocessor](https://sass-lang.com/).

Both the Rivet `.zip` download and [the NPM package]({{< relref "npm.md" >}}) include the `.scss` source files that you can use in your Rivet project.

If you are using the Rivet npm package and have a build process in place for Sass already, you can import Rivet into your project directly:

{{< code lang="scss" >}}@import "node_modules/rivet-uits/sass/rivet.scss"
{{< /code >}}

Once you have imported `rivet.scss` into your project, you will be able to use the variables listed on this page in your own Sass stylesheets.

## Typography
Read the [documentation on typography]({{< relref "../layout/typography.md" >}}) to learn more about Rivet's responsive type scale CSS classes.

{{< sassdocs collection="typography" >}}

## Spacing
Read the [documentation on spacing]({{< relref "../layout/spacing.md" >}}) to learn more about Rivet's responsive spacing CSS classes.

{{< sassdocs collection="spacing" >}}

## Color
We encourage you to modify Rivet to fit your needs, and sometimes that means adjusting the colors. We’ve included tints in Rivet to make it easier to adjust colors in a way that's consistent with other Rivet applications and with IU's brand guidelines.

Tints are colors mixed with different degrees of white. They offer flexibility and a greater range of color to draw attention to or indicate actions. (You’ll notice that we tint our secondary buttons to indicate a hover state, for example.) 

- **Do** use tints as accents in your custom components
- **Do** use tints sparingly
- **Don’t** use tints to replace colors of existing components

{{< sassdocs collection="colors" >}}

## Breakpoints
{{< sassdocs collection="breakpoints" >}}

## Shadows
{{< code lang="scss" >}}// Standard shadow(s)

$shadow-base: 0 1px 3px 2px rgba(0, 0, 0, .07);
{{< /code >}}