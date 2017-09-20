---
title: "Components"
description: "The Rivet components are a well-documented set of HTML, CSS, and JavaScript assets."
navTitle: "Components"
weight: 2
---
## Get started
The Rivet components documentation contains examples, code snippets, and guidance on UX best-practices. Visit the [**How to use**](../how-to-use) section to see all the ways you can use Rivet in your project and see some example implementations of Rivet.

## Download Rivet
You can download a ZIP file that contains the compiled and minified CSS and JavaScript, images, and a starter HTML file.

{{< button url="https://github.iu.edu/UITS/rivet/archive/v0.2.0.zip" variant="secondary" >}}Download Rivet{{< /button >}}

### Download contents
The download contains the following files:
- Compiled CSS (expanded and minified versions)
- Compiled JavaScript (expanded and minified versions)
- Images folder with all required images
- Sass source files
- Starter `index.html` file

{{< code lang="html" >}}css/
  |—— rivet.css
  |—— rivet.min.css
js/
  |—— rivet.js
  |—— rivet.min.js
sass/
  |—— components/
  |—— core/
  |—— libs/
  |—— utilities/
  |—— rivet.scss
img/
  |—— ...
index.html
{{< /code >}}

## Using Sass
If you are using Sass in your project you can import the Rivet Sass files directly:

{{< code lang="css" >}}@import "./your-path-to-rivet/sass/rivet.scss"
{{< /code >}}

## Hosted CSS and JavaScript
The quickest way to get started with Rivet is using the centrally-hosted CSS and JavaScript files. [Read the Quick start guide](../how-to-use/quick-start) for more information.

Copy and paste this `<link>` element to `<head>` of your document. Make sure it is placed **before** any other stylesheets.

{{< code lang="html" >}}<link rel="stylesheet" href="https://assets.uits.iu.edu/css/rivet/0.2.0/rivet.min.css">{{< /code >}}

Rivet has a minimal amount of JavaScript that is required for some components, like the [header](../components/navigation/header). Copy and paste this link and add to the end of your document, just before the closing `</body>` tag.

{{< code lang="html" >}}<script src="https://assets.uits.iu.edu/javascript/rivet/0.2.0/rivet.min.js"></script>{{< /code >}}

## NPM dependency
Rivet is also available to include in as a dependency in your app via NPM. To use the Rivet as a npm package you'll need to configure an `.npmrc` file using your IU credentials. Once your `.npmrc` config file is configured you can run `npm install rivet-uits --save-dev` in your terminal to use in your project.

### Configuring NPM
Coming soon...


