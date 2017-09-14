---
title: "Download Rivet"
description: Download the compiled Rivet CSS and JavaScript
weight: 15
---
## Rivet Download
You can download a ZIP file that contains the compiled and minified CSS and JavaScript, images, and a starter HTML file.

{{< button url="https://github.iu.edu/UITS/rivet/archive/v0.2.0.zip" >}}Download Rivet{{< /button >}}

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

