---
title: "Components"
description: "The Rivet components are a well-documented set of HTML, CSS, and JavaScript assets."
url: "components"
---
## Stay up to date
Join the email list to get updates on releases, new features, examples, and how-to guides.

<div class="rvt-button-group">
{{< button url="https://list.iu.edu/sympa/subscribe/rivet-l" variant="secondary" analytics-category="click">}}Subscribe{{< /button >}}
{{< button url="https://list.iu.edu/sympa/sigrequest/rivet-l" variant="plain" analytics-category="click">}}Manage your settings{{< /button >}}
</div>

## Get started
The Rivet components documentation contains examples, code snippets, and guidance on UX best-practices. There are several ways you can use Rivet in your project. The following instructions will help you get started.

## Download Rivet
You can download a ZIP file that contains the compiled and minified CSS and JavaScript, images, and a starter HTML file.

{{< button url="https://github.com/indiana-university/rivet-source/releases/download/v1.4.0/rivet.zip" variant="secondary" analytics-action="download" analytics-category="click">}}
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <g fill="currentColor">
        <path d="M14.25,11a1,1,0,0,0-1,1v1H2.75V12a1,1,0,0,0-2,0v1.75A1.25,1.25,0,0,0,2,15H14a1.25,1.25,0,0,0,1.25-1.25V12A1,1,0,0,0,14.25,11Z"/>
        <path d="M7.29,10.71a1,1,0,0,0,1.41,0l4-4a1,1,0,0,0-1.41-1.41L9,7.59V1A1,1,0,0,0,7,1V7.59L4.71,5.29A1,1,0,0,0,3.29,6.71Z"/>
      </g>
    </svg>
    <span class="rvt-m-left-xs">Download Rivet</span>
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

## Axure UI and Wireframe kit
<div class="rvt-grid rvt-m-top-xl">
    <div class="rvt-grid__item-4-md-up">
        <img src="../img/docs/rvtd-htu-example-axure.png" alt="Rivet components on a screen">
    </div>
    <div class="rvt-grid__item-7-md-up rvt-grid__item--last">
        <p>We've created an Axure wireframe kit with accurate representations of all the Rivet components. Download the Axure
            kit to help you create prototypes that will translate to Rivet components.</p>
        <a
            href="https://github.iu.edu/UITS/rivet/releases/download/v1.0.0/rivet-axure-1.0.rp"
            class="rvt-button rvt-button--secondary rvt-m-top-md"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
              <path d="M14.25,11a1,1,0,0,0-1,1v1H2.75V12a1,1,0,0,0-2,0v1.75A1.25,1.25,0,0,0,2,15H14a1.25,1.25,0,0,0,1.25-1.25V12A1,1,0,0,0,14.25,11Z"/>
              <path d="M7.29,10.71a1,1,0,0,0,1.41,0l4-4a1,1,0,0,0-1.41-1.41L9,7.59V1A1,1,0,0,0,7,1V7.59L4.71,5.29A1,1,0,0,0,3.29,6.71Z"/>
            </g>
          </svg>
          <span class="rvt-m-left-xs">Download Axure kit</span>
        </a>
    </div>
</div>

## Hosted CSS and JavaScript
{{< alert variant="warning" title="Production applications" >}}
The hosted CSS and JavaScript assets are a good solution for prototyping ideas, early stages of development, and small apps that don't get heavy traffic. **We recommend managing Rivet as a dependency with NPM** as a long-term solution for production apps with a large number of regular users.
{{< /alert >}}

The quickest way to get started with Rivet is using the centrally-hosted CSS and JavaScript files. Copy and paste this `<link>` element to `<head>` of your document. Make sure it is placed **before** any other stylesheets.

{{< code lang="html" analytics-label="assets.uits.iu.edu/css link tag">}}<link rel="stylesheet" href="https://assets.uits.iu.edu/css/rivet/1.4.0/rivet.min.css">{{< /code >}}

Rivet has a minimal amount of JavaScript that is required for some components, like the [header](../components/navigation/header). Copy and paste this link and add to the end of your document, just before the closing `</body>` tag.

{{< code lang="html" analytics-label="assets.uits.iu.edu/js script tag">}}<script src="https://assets.uits.iu.edu/javascript/rivet/1.4.0/rivet.min.js"></script>{{< /code >}}

## Starter template
Here's a basic starter template with the hosted CSS and JavaScript hooked up. Copy and paste into your favorite editor to start using Rivet.

{{< code lang="html" analytics-label="starter template" >}}<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://assets.uits.iu.edu/css/rivet/1.4.0/rivet.min.css">
    <title>Rivet starter file</title>
</head>
<body>
    <header class="rvt-header" role="banner">
        <a class="rvt-skip-link" href="#main-content">Skip to content</a>
        <div class="rvt-header__trident">
            <svg class="rvt-header__trident-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48" aria-describedby="iu-logo" aria-hidden="true">
                <title id="iu-logo">Indiana University Logo</title>
                <rect width="41" height="48" fill="#900"/>
                <polygon points="24.59 12.64 24.59 14.98 26.34 14.98 26.34 27.78 22.84 27.78 22.84 10.9 24.59 10.9 24.59 8.57 16.41 8.57 16.41 10.9 18.16 10.9 18.16 27.78 14.66 27.78 14.66 14.98 16.41 14.98 16.41 12.64 8.22 12.64 8.22 14.98 9.97 14.98 9.97 30.03 12.77 33.02 18.16 33.02 18.16 36.52 16.41 36.52 16.41 39.43 24.59 39.43 24.59 36.52 22.84 36.52 22.84 33.02 28 33.02 31.01 30.03 31.01 14.98 32.78 14.98 32.78 12.64 24.59 12.64" fill="#fff"/>
            </svg>
        </div>
        <span class="rvt-header__title">
            <a href="#0">Application Title</a>
        </span>
    </header>
    <main role="main" id="main-content">

        <!-- **************************************************************
            Start building here!
        *************************************************************** -->

    </main>
    <footer class="rvt-footer m-top-xxl" role="contentinfo">
        <div class="rvt-footer__trident">
            <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25">
                <polygon points="13.33 3.32 13.33 5.21 14.76 5.21 14.76 15.64 11.9 15.64 11.9 1.9 13.33 1.9 13.33 0 6.67 0 6.67 1.9 8.09 1.9 8.09 15.64 5.24 15.64 5.24 5.21 6.67 5.21 6.67 3.32 0 3.32 0 5.21 1.43 5.21 1.43 17.47 3.7 19.91 8.09 19.91 8.09 22.76 6.67 22.76 6.67 25.13 13.33 25.13 13.33 22.76 11.9 22.76 11.9 19.91 16.1 19.91 18.56 17.47 18.56 5.21 20 5.21 20 3.32 13.33 3.32" fill="#900"/>
            </svg>
        </div>
        <ul class="rvt-footer__aux-links">
            <li class="rvt-footer__aux-item">
                <a href="https://accessibility.iu.edu/assistance/">Accessibility</a>
            </li>
            <li class="rvt-footer__aux-item">
                <!-- You can learn more about privacy policies and generate one
                    for your site here:
                    https://protect.iu.edu/online-safety/tools/privacy-notice/index.html -->
                <a href="#0">Privacy Notice</a>
            </li>
            <li class="rvt-footer__aux-item">
                <a href="https://www.iu.edu/copyright/index.html">Copyright</a> &copy; 2019 The Trustees of <a href="https://www.iu.edu/">Indiana University</a>
            </li>
        </ul>
    </footer>
    <script src="https://assets.uits.iu.edu/javascript/rivet/1.4.0/rivet.min.js"></script>
</body>
</html>
{{< /code >}}

## Using Rivet with other frameworks
Currently Rivet does not support the use of additional CSS frameworks like Bootstrap, Foundation, etc.  If you choose to use one of these frameworks alongside Rivet it is up to you to resolve any conflicts that arise.
