---
title: CDN
description: Use the centrally-hosted version of Rivet
weight: 30
---
The easiest way to get started using Rivet is to link to the centrally hosted version of the Rivet CSS and JavaScript.

### CSS
Copy and paste this `<link>` element to `<head>` of your document. Make sure it is placed **before** any other stylesheets.

{{< code lang="html" >}}<link rel="stylesheet" href="https://assets.uits.iu.edu/css/rivet/0.2.0/rivet.min.css">{{< /code >}}

### JavaScript
Rivet has a minimal amount of JavaScript that is required for some components, like the [header](../components/navigation/header). Copy and paste this link and add to the end of your document, just before the closing `</body>` tag.

{{< code lang="html" >}}<script src="https://assets.uits.iu.edu/javascript/rivet/0.2.0/rivet.min.js"></script>{{< /code >}}