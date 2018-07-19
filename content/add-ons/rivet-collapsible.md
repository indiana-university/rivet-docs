---
title: "Collapsible"
description: "An expand-and-collapse widget for Rivet"
thumbnail: "collapsible-thumbnail.png"
packageName: rivet-collapsible
npm: true
repo: https://github.com/indiana-university/rivet-collapsible
demo: https://indiana-university.github.io/rivet-collapsible/
status: Alpha
addOnTags:
  - All
  - Page content
---
## Getting started
The Rivet collapsible Add-on requires the use of the core Rivet CSS. You can find out more about how to get started in [the Rivet documentation](../../components). Once you are using Rivet, you can download the Rivet collapsible source files and include them in your project.

### Note: `closest()` polyfill
The Rivet Collapsible uses the `.closest()` JavaScript method which works in all modern web browsers, but requires a small polyfill to add support for Internet Explorer 11. The main Rivet JavaScript file (`rivet.js`) already includes the `closest()` polyfill so if you are using it on your page there is no need to add it.

{{< code lang="js" >}}/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  Element.prototype.closest = function (s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);
    return null;
  };
}
{{< /code >}}

### 1. Include the CSS and JavaScript in your page
{{< code lang="html" >}}
<link rel="stylesheet" href="dist/css/rivet-collapsible.min.css">
<script src="dist/js/rivet-collapsible.min.js"></script>
{{< /code >}}

### 2. Add the markup to your HTML
It is possible to either show or hide the collapsible content by default. To hide the the content by default set the `aria-expanded` attribute on the `<button>` element inside the `.rvt-collapsible__title` element to `false`, then set the `aria-hidden` attribute on the `.rvt-collapsible__content` element to "true". You can hide the collapsible content by default by doing the opposite and setting `aria-exapnded` to a value of `true` and `aria-hidden` to a value of `false`.

#### Using headings
The button that toggles the collapsible is wrapped in a heading element in the examples that follow. Any heading level can be used based on the heading structure of your app. Or, if a heading element doesn't make sense semantically it can be replaced with a generic `<div>` element.

Lastly, you need to make sure to add the `[data-collapsible]` attribute to the button toggle element with a value that matches the `id` attribute of the content that you want to expand/collapse.

{{< code lang="html" >}}<div class="rvt-collapsible">
  <h1 class="rvt-collapsible__title">
    <button data-collapsible="users" aria-expanded="false">
      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path fill="currentColor" d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"/>
      </svg>
      <span>Default Rivet collapsible</span>
    </button>
  </h1>
  <div class="rvt-collapsible__content" id="users" aria-hidden="true">
    <p class="rvt-m-all-remove">Nostrum fugit a natus. Corporis voluptates ut odio omnis nobis voluptas. Est dolor et eum quis deleniti explicabo autem est magnam. Unde expedita ab quia maxime quia. Qui voluptas distinctio ipsa laborum laboriosam.</p>
  </div>
</div>
{{< /code >}}

### 3. Initialize the Add-on
Lastly, you'll need to initialize somewhere right before the closing `</body>` tag of you page.

{{< code lang="html" >}}<script>
  Collapsible.init();
</script>
{{< /code >}}

## Accordion configuration
It is possible to group two or more collapsibles into an accordion configuration by wrapping them in a containing `div` then adding the following attributes to it:

- `class="rvt-collapsible-accordion"`
- `data-accordion`
- `role="group"`

{{< code lang="html" >}}
<div class="rvt-collapsible-accordion" data-accordion role="group">
  <div class="rvt-collapsible">
    <!-- Collapsible 1 markup -->
  </div>
  <div class="rvt-collapsible">
    <!-- Collapsible 2 markup -->
  </div>
  <div class="rvt-collapsible">
    <!-- Collapsible 3 markup -->
  </div>
</div>
{{< /code >}}

The `rvt-collapsible-accordion` class will add a small amount of margin between each collapsible and the `data-accordion` attribute is used as a JavaScript hook to handle keyboard navigation inside the accordion.

## Installing with NPM
The collapsible is available to install as a dependency in your project. To install via NPM run the following in your terminal:

{{< code >}}npm install rivet-collapsible --save-dev
{{< /code >}}

If you are using a module bundler, you can include the collapsible in your project like so:

{{< code >}}const collapsible = require('rivet-collapsible');

// Initialize the plugin
Collapsible.init();
{{< /code >}}

## JavaScript API
The Rivet collapsible component exposes a handful of methods you can use to programmatically control the component. The `.init()` method must be called somewhere in your document after the `rivet-collapsible.js` script is included. The `init()` method attaches and event listener to the document that listens for clicks on buttons with the `data-collapsible` attribute. With that in mind you should be able to dynamically add collapsibles to the DOM without having the re-initialize the component.

### Methods

| Method| Description                                                                                                                                                       |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Collapsible.init()` | Initializes the collapsible component |
| `Collapsible.open(button, callback)` | Accepts a collapsible toggle button element `[data-collapsible]` and an optional callback function that is run after the collapsible is toggled opened. |
| `Collapsible.close(button, callback)` | Accepts a collapsible toggle button element `[data-collapsible]` and an optional callback function that is run after the collapsible is toggled closed. |
| `Collapsible.destroy()` | Destroys the current initialization of the collapsible component and removes it's event listener.|
