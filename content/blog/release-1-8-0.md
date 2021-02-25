---
title: Rivet 1.8.0 release
description: Rivet 1.8.0 is now available. This release adds border removal utility classes and fixes bugs related to the button, dropdown, and collapsible components.
date: "2021-02-25"
tags:
    - "minor release"
excludeFromIndex: true
author:
  email: "scanmurr@iu.edu"
  name: "Scott Anthony Murray"
---
Rivet version `1.8.0` is now available! This release adds border removal utility classes and fixes bugs related to the button, dropdown, and collapsible components.

## Border removal utility classes
This release adds utility classes that allow you to remove borders from any or all sides of an element. For more information about these new classes, see the [border utilities documentation]({{< ref "../components/utilities/border.md" >}}).

## Button focus outline colors
This release fixes an issue where a button component's outline color when focused did not match the overall button color if the danger or success variants were used.

## Dropdown error handling
This releases fixes an issue that caused Rivet to throw an error if a dropdown component was opened or closed programmatically after it had been removed from the DOM.

## Collapsible icon width
This release fixes an issue where long text in a collapsible component's title would cause the open/closed arrow icon to shrink.

## Complete list of updates
For a complete list of updates made in version `1.8.0`, see the [Rivet changelog]({{< ref "components/information/changelog.md" >}}).

## Getting help
If you need help using Rivet, post your question to [GitHub Discussions](https://github.com/indiana-university/rivet-source/discussions/categories/questions) or head over to our [Enterprise Systems](https://iu-uits-es.slack.com/messages/rivet-design-system) or [Web Community of Practice](https://iuwebcommunity.slack.com/messages/rivet) Slack channels.

You can also send a message to the [Rivet mailing list](mailto:rivet-l@list.iu.edu).