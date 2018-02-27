---
title: "Components"
description: "The Rivet components are a well-documented set of HTML, CSS, and JavaScript assets."
navTitle: "Components"
weight: 2
sectionNav: true
---
## Stay up to date

Rivet is new and we're quickly adding components and features as we work toward the official version 1.0 release. Join the email list to get updates on new features, examples, and how-to guides.

<div class="rvt-button-group">
{{< button url="https://list.iu.edu/sympa/subscribe/rivet-l" variant="secondary" analytics-category="click">}}Subscribe{{< /button >}}
{{< button url="https://list.iu.edu/sympa/sigrequest/rivet-l" variant="plain" analytics-category="click">}}Manage your settings{{< /button >}}
</div>

## Get started
The Rivet components documentation contains examples, code snippets, and guidance on UX best-practices. Visit the [**How to use**](../how-to-use) section to see all the ways you can use Rivet in your project and see some example implementations of Rivet.

## Download Rivet
You can download a ZIP file that contains the compiled and minified CSS and JavaScript, images, and a starter HTML file.

{{< button url="https://github.iu.edu/UITS/rivet/archive/v0.4.2.zip" variant="secondary" analytics-action="download" analytics-category="click">}}
    <span class="rvt-m-right-xxs">Download Rivet</span>
    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g fill="currentColor">
            <path d="M14.25,11a1,1,0,0,0-1,1v1H2.75V12a1,1,0,0,0-2,0v1.75A1.25,1.25,0,0,0,2,15H14a1.25,1.25,0,0,0,1.25-1.25V12A1,1,0,0,0,14.25,11Z"/>
            <path d="M7.29,10.71a1,1,0,0,0,1.41,0l4-4a1,1,0,0,0-1.41-1.41L9,7.59V1A1,1,0,0,0,7,1V7.59L4.71,5.29A1,1,0,0,0,3.29,6.71Z"/>
        </g>
    </svg>
{{< /button >}}

### Download contents
The download contains the following files:

- Compiled CSS (expanded and minified versions)
- Compiled JavaScript (expanded and minified versions)
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
index.html
{{< /code >}}

## NPM dependency
Rivet is also available to include in as a dependency in your app via NPM. To use Rivet as a NPM package you'll need to configure a `.npmrc` file that points to the IU NPM registry. These instructions assume that you are already using NPM in your project. If not, you can [read these instructions](https://docs.npmjs.com/cli/init) on the NPM website about how to start.

1. Create a file in the root of your project at the same level as your `package.json` called `.npmrc`.
2. Add the following snippet to your newly created `.npmrc` and save the file.

{{< code >}}registry=https://npmjs.iu.edu/public/registry
{{< /code >}}

### Installing via NPM
Once you have the `.npmrc` file configured in the root of your project, you can run the following command to install Rivet.

{{< code >}}npm install rivet-uits --save-dev
{{< /code >}}

<h4 class="m-top-lg">Installation troubleshooting <span class="rvt-badge rvt-badge--warning m-right-xs">NOTE</span></h4>

**Before you run the install command**:

- Be sure you have installed NPM on your local computer by running `npm --v`
- Make sure that you have configured a `.npmrc` using the instructions above

### Updating the Rivet NPM package
When there is a new version of Rivet released it will be publish to the NPM registry. You can check for updates by running the `npm outdated` command. To acutally update your NPM dependency you can run the following command at the same level as your project's `package.json`.

{{< code >}}npm install rivet-uits@latest --save-dev
{{< /code >}}

## Using Sass
If you are using Sass in your project you can import the Rivet Sass files directly:

{{< code lang="css" >}}@import "./node_modules/rivet-uits/sass/rivet.scss"
{{< /code >}}

## Hosted CSS and JavaScript
The quickest way to get started with Rivet is using the centrally-hosted CSS and JavaScript files. Copy and paste this `<link>` element to `<head>` of your document. Make sure it is placed **before** any other stylesheets.

{{< code lang="html" analytics-label="assets.uits.iu.edu/css link tag">}}<link rel="stylesheet" href="https://assets.uits.iu.edu/css/rivet/0.4.2/rivet.min.css">{{< /code >}}

Rivet has a minimal amount of JavaScript that is required for some components, like the [header](../components/navigation/header). Copy and paste this link and add to the end of your document, just before the closing `</body>` tag.

{{< code lang="html" analytics-label="assets.uits.iu.edu/js script tag">}}<script src="https://assets.uits.iu.edu/javascript/rivet/0.4.2/rivet.min.js"></script>{{< /code >}}

<h3 class="m-top-lg">Production applications <span class="rvt-badge rvt-badge--warning m-right-xs">NOTE</span></h3>

The hosted CSS and JavaScript assets are a good solution for prototyping ideas, early stages of development, and for small apps that don't get heavy traffic. **We recommend managing Rivet as a dependency with NPM** as a long-term solution for production apps.

## Starter template
Here's a basic starter template with the hosted CSS and JavaScript hooked up. Copy and paste into your favorite editor to start using Rivet.

{{< code lang="html" analytics-label="starter template" >}}<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://assets.uits.iu.edu/css/rivet/0.4.2/rivet.min.css">
    <title>Rivet starter file</title>
</head>
<body>
    <header class="rvt-header" role="banner">
    <a class="rvt-skip-link" href="#main-content">Skip to content</a>
    <div class="rvt-header__trident">
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="60" height="70" viewBox="0 0 60 70" aria-labelledby="iu-logo">
            <title id="iu-logo">Indiana University</title>
            <rect width="60" height="70" fill="#900"/>
            <polygon points="35.96 18.44 35.96 21.84 38.52 21.84 38.52 40.51 33.41 40.51 33.41 15.9 35.96 15.9 35.96 12.5 24.04 12.5 24.04 15.9 26.58 15.9 26.58 40.51 21.48 40.51 21.48 21.84 24.04 21.84 24.04 18.44 12.09 18.44 12.09 21.84 14.65 21.84 14.65 43.79 18.72 48.15 26.58 48.15 26.58 53.26 24.04 53.26 24.04 57.5 35.96 57.5 35.96 53.26 33.41 53.26 33.41 48.15 40.93 48.15 45.33 43.79 45.33 21.84 47.91 21.84 47.91 18.44 35.96 18.44" fill="#fff"/>
        </svg>
    </div>
    <span class="rvt-header__title">
        <a href="#">Application Title</a>
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
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" aria-labelledby="footer-trident">
                    <title id="footer-trident">IU Trident Logo</title>
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
                <a href="#">Privacy Policy</a>
            </li>
            <li class="rvt-footer__aux-item">
                <a href="https://accessibility.iu.edu/">Accessibility help</a>
            </li>
        </ul>
    </footer>
    <script src="https://assets.uits.iu.edu/javascript/rivet/0.4.2/rivet.min.js"></script>
</body>
</html>
{{< /code >}}

## Using Rivet with other frameworks
Currently Rivet does not support the use of addiotional CSS frameworks like Bootstrap, Foundation, etc.  If you choose to use one of these frameworks alongside Rivet it is up to you to resolve any conflicts that arise.
