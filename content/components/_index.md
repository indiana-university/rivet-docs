---
title: "Components"
description: "The Rivet components are a well-documented set of HTML, CSS, and JavaScript assets."
navTitle: "Components"
weight: 2
sectionNav: true
---
## Get started
The Rivet components documentation contains examples, code snippets, and guidance on UX best-practices. Visit the [**How to use**](../how-to-use) section to see all the ways you can use Rivet in your project and see some example implementations of Rivet.

## Download Rivet
You can download a ZIP file that contains the compiled and minified CSS and JavaScript, images, and a starter HTML file.

{{< button url="https://github.iu.edu/UITS/rivet/archive/v0.3.1.zip" variant="secondary" analytics-action="download" analytics-category="click">}}Download Rivet{{< /button >}}

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

## NPM dependency
Rivet is also available to include in as a dependency in your app via NPM. Once your `.npmrc` config file is configured you can run `npm install rivet-uits --save-dev` in your terminal to use in your project. To use the Rivet as a npm package you'll need to configure an `.npmrc` file using your IU credentials.

{{< button url="https://github.iu.edu/UITS/rivet-source/wiki/Configuring-NPM" variant="small" analytics-category="click" analytics-action="Read NPM instructions">}}Read instructions{{< /button >}}

### Exclude NPM config from version control
If you use version control, you'll want to **make sure this file isn't included** since it contains an `_auth` to access the npm registry. **Make sure to add your .npmrc file to your .gitignore file**

### Installing via NPM
Once you have this file in your project you can run:
```bash
npm install rivet-uits
```

## Using Sass
If you are using Sass in your project you can import the Rivet Sass files directly:

{{< code lang="css" >}}@import "./your-path-to-rivet/sass/rivet.scss"
{{< /code >}}

## Hosted CSS and JavaScript
The quickest way to get started with Rivet is using the centrally-hosted CSS and JavaScript files. Copy and paste this `<link>` element to `<head>` of your document. Make sure it is placed **before** any other stylesheets.

{{< code lang="html" analytics-label="assets.uits.iu.edu/css link tag">}}<link rel="stylesheet" href="https://assets.uits.iu.edu/css/rivet/0.3.1/rivet.min.css">{{< /code >}}

Rivet has a minimal amount of JavaScript that is required for some components, like the [header](../components/navigation/header). Copy and paste this link and add to the end of your document, just before the closing `</body>` tag.

{{< code lang="html" analytics-label="assets.uits.iu.edu/js script tag">}}<script src="https://assets.uits.iu.edu/javascript/rivet/0.3.1/rivet.min.js"></script>{{< /code >}}

### Starter template
Here's a basic starter template with the hosted CSS and JavaScript hooked up. Copy and paste into your favorite editor to start using Rivet.

{{< code lang="html" analytics-label="starter template" >}}<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://assets.uits.iu.edu/css/rivet/0.3.1/rivet.min.css">
    <title>Rivet starter file</title>
</head>
<body>
    <header class="rvt-header" role="banner">
        <div class="rvt-header__trident">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="70" viewBox="0 0 60 70" aria-labelledby="iu-logo">
                <title id="iu-logo">Indiana University</title>
                <rect width="60" height="70" fill="#900"/>
                <polygon points="35.96 18.44 35.96 21.84 38.52 21.84 38.52 40.51 33.41 40.51 33.41 15.9 35.96 15.9 35.96 12.5 24.04 12.5 24.04 15.9 26.58 15.9 26.58 40.51 21.48 40.51 21.48 21.84 24.04 21.84 24.04 18.44 12.09 18.44 12.09 21.84 14.65 21.84 14.65 43.79 18.72 48.15 26.58 48.15 26.58 53.26 24.04 53.26 24.04 57.5 35.96 57.5 35.96 53.26 33.41 53.26 33.41 48.15 40.93 48.15 45.33 43.79 45.33 21.84 47.91 21.84 47.91 18.44 35.96 18.44" fill="#fff"/>
            </svg>
        </div>
        <span class="rvt-header__title">
            <a href="#0">Application Title</a>
        </span>
    </header>
    <main role="main">

        <!-- **************************************************************
            Start building here!
        *************************************************************** -->

    </main>
    <footer class="rvt-footer m-top-xxl" role="contentinfo">
        <div class="rvt-footer__copyright-lockup">
            <div class=rvt-footer__trident>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25">
                    <polygon points="13.33 3.32 13.33 5.21 14.76 5.21 14.76 15.64 11.9 15.64 11.9 1.9 13.33 1.9 13.33 0 6.67 0 6.67 1.9 8.09 1.9 8.09 15.64 5.24 15.64 5.24 5.21 6.67 5.21 6.67 3.32 0 3.32 0 5.21 1.43 5.21 1.43 17.47 3.7 19.91 8.09 19.91 8.09 22.76 6.67 22.76 6.67 25.13 13.33 25.13 13.33 22.76 11.9 22.76 11.9 19.91 16.1 19.91 18.56 17.47 18.56 5.21 20 5.21 20 3.32 13.33 3.32" fill="#900"/>
                </svg>
            </div>
            <p><a href="https://www.iu.edu/copyright/index.html">Copyright</a> &copy; 2017 The Trustees of <a href="https://www.iu.edu/">Indiana University</a></p>
        </div>
        <ul class="rvt-footer__aux-links">
            <li class="rvt-footer__aux-item">
                <!-- You can learn more about privacy policies and generate one
                     for your site here:
                     https://protect.iu.edu/online-safety/tools/privacy-notice/index.html -->
                <a href="#0">Privacy Policy</a>
            </li>
            <li class="rvt-footer__aux-item">
                <a href="https://accessibility.iu.edu/">Accessibility help</a>
            </li>
        </ul>
    </footer>
    <script src="https://assets.uits.iu.edu/javascript/rivet/0.3.1/rivet.min.js"></script>
</body>
</html>
{{< /code >}}
