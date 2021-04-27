---
title: Rivet 1.8.1 release
description: Rivet 1.8.1 is now available. This release fixes bugs related to the header, modal, table, and loading indicator components.
date: "2021-04-27"
tags:
    - "minor release"
excludeFromIndex: true
author:
  email: "scanmurr@iu.edu"
  name: "Scott Anthony Murray"
---
Rivet version `1.8.1` is now available! This release fixes bugs related to the header, modal, table, and loading indicator components.

## Header accessibility

This releases fixes an accessibility-related issue resulting from the Rivet header's use of the `role="menu"` attribute. The [header documentation]({{< ref "../components/navigation/header.md" >}}) has been updated with the correct markup.

{{< alert variant="info" title="Updating your applications" >}}
To make this fix in your own applications, remove all instances of the `role="menu"` attribute from your header markup.
{{< /alert >}}

## Modal error handling

This releases fixes an issue that caused Rivet to throw an error if a modal was opened or closed programmatically after it had been removed from the DOM.

## Table borders

This release fixes an issue where columns in tables styled with the `.rvt-table-cells` class would be missing their top border if no `thead` element was used.

## Loading indicator vertical centering

This release corrects the vertical centering of the XXS loading indicator within a small button.

The [loading indicator documentation]({{< ref "../components/overlays/loading-indicator.md#loading-indicator-sizes" >}}) has been updated to make explicit that only the XSS loading indicator can be used in small buttons.

## Complete list of updates
For a complete list of updates made in version `1.8.1`, see the [Rivet changelog]({{< ref "components/information/changelog.md" >}}).

## Getting help
If you need help using Rivet, post your question to [GitHub Discussions](https://github.com/indiana-university/rivet-source/discussions/categories/questions) or head over to our [Enterprise Systems](https://iu-uits-es.slack.com/messages/rivet-design-system) or [Web Community of Practice](https://iuwebcommunity.slack.com/messages/rivet) Slack channels.

You can also send a message to the [Rivet mailing list](mailto:rivet-l@list.iu.edu).