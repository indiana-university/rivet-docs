---
title: Rivet 1.4.0 release
description: Rivet 1.4.0 is now available. This release makes some updates to the Rivet footer and deprecates classes related to alerts and the loading indicator.
date: "2019-03-26"
tags:
    - "release"
    - "new component"
excludeFromIndex: true
author:
  email: "scanmurr@iu.edu"
  name: "Scott Anthony Murray"
---
Rivet 1.4.0 is now available! This release makes some updates to the Rivet footer and deprecates classes related to alerts and the loading indicator.

## Updates to the Rivet footer

Recently, the [layout of the IU-branded footer for websites was updated](https://github.com/indiana-university/rivet-source/issues/87). This release updates the Rivet footer to reflect these changes, including the removal of markup and CSS classes no longer needed in the new footer.

You can see the [updated Rivet footer markup]({{< ref "components/navigation/footer.md" >}}) in the Rivet component documentation.

## Alert class deprecation

In previous versions of Rivet, alerts were dismissed by clicking a `button` element with the `.rvt-alert__dismiss` class.

In an effort to [decouple CSS classes from JavaScript behavior](https://github.com/indiana-university/rivet-source/issues/85) and be more consistent with how other JavaScript-powered Rivet components are implemented, the `.rvt-alert__dismiss` class has been deprecated in favor of the `data-alert-close` attribute.

The examples in the [alert component documentation]({{< ref "components/overlays/alerts.md" >}}) have been updated to reflect this new approach.

## Loading indicator class deprecation

This release deprecates the `.rvt-button__text` class used by the [loading indicator component]({{< ref "components/overlays/loading-indicator.md" >}}) in favor of the `.rvt-button__content` class.

We realized it wasn't clear to developers that [button icons](https://github.com/indiana-university/rivet-icons) should be included in the element with the `.rvt-button__text` class, so the loading indicator wasn't hiding these icons when busy.

The `.rvt-button__content` class more clearly communicates that both text and icons should be included so that they'll be hidden properly when the loading indicator appears.

## Complete list of updates

For a complete breakdown of the `1.4.0` updates, see the [Rivet changelog](https://rivet.iu.edu/components/information/changelog/).

## Getting help

If you have questions about the changes to the footer, alert, or loading indicator components, head over to the [Rivet Slack channel](https://iuwebcommunity.slack.com/messages/rivet) or send a message to the [Rivet mailing list](mailto:rivet-l@list.iu.edu).