---
title: "Switch"
description: An accessible switch component for Rivet
thumbnail: "switches-thumbnail.png"
packageName: rivet-switch
npm: true
repo: https://github.com/indiana-university/rivet-switch
demo: https://indiana-university.github.io/rivet-switch/
status: Alpha
addOnTags:
  - All
  - Forms
---
## Getting started
The Rivet switch add-on requires the use of the core Rivet CSS. You can find out more about how to get started in [the Rivet documentation](https://rivet.iu.edu/components/). Once you are using Rivet, you can download the Rivet switch source files and include them in your project.

### 1. Include the CCS and JavaScript in your page
{{< code lang="html" >}}<link rel="stylesheet" href="dist/css/rivet-switch.min.css">
<script src="dist/js/rivet-switch.min.js"></script>
{{< /code >}}

### 2. Add the markup to your HTML
The Rivet switch markup uses a HTML `<button>` element. To use the switch add the following markup to your page.

{{< code lang="html" >}}<button class="rvt-switch" data-switch="email-switch" role="switch" aria-checked="false">
  <span class="rvt-switch__on">On</span>
  <span class="rvt-switch__off">Off</span>
</button>
{{< /code >}}

### 3. Initialize the add-on
Lastly, you'll need to initialize somewhere right before the closing `</body>` tag of you page.

{{< code lang="html" >}}<script>
  Switch.init();
</script>
{{< /code >}}

## JavaScript API
The Rivet switch component exposes a handful of methods you can use to programmatically control the component. The `.init()` method must be called somewhere in your document after the `rivet-switch.js` script is included. The `init()` method attaches and event listener to the document that listens for clicks on buttons with the `data-switch` attribute. With that in mind you should be able to dynamically add switches to the DOM without having the re-initialize the component.

### Methods

| Method| Description|
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Switch.init()` | Initializes the switch component |
| `Switch.on(button, callback)` | Accepts a switch button element `[data-switch]` and an optional callback function that is run after the switch is toggled on. |
| `Switch.off(button, callback)` | Accepts a switch button element `[data-switch]` and an optional callback function that is run after the switch is toggled off. |

### Custom events
The switch component emmits custom events when it is toggled on or off. You can listen for these events in your own scripts and respond to them as needed.

|Event|Description|
|----|------|
|`switchOn`|Emitted when the switch is toggled on via the `Switch.on()` method. The value of the switch `data-switch` attibute is also passed along via the custom event's `detail` property and is available to use in your scripts as `event.detail.name()`|
|`switchOff`|Emitted when the switch is toggled on via the `Switch.off()` method. The value of the switch `data-switch` attibute is also passed along via the custom event's `detail` property and is available to use in your scripts as `event.detail.name()`|

#### Custom event example
{{< code lang="javascript" >}}// Listen for a custom "switchOn" event
document.addEventListener('switchOn', event => {
  if (event.detail.name() == 'email-switch') {
    alert('Okay, we\'ll send you some emails!')
  }
  // Maybe send some data via an AJAX request, etc...
}, false);
{{< /code >}}

