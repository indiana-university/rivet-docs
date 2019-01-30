---
title: Deprecating the Rivet panel component
description: The panel component has been deprecated in favor of the new box and media object components.
date: "2019-01-30"
draft: false
excludeFromIndex: true
---
We've deprecated the [Rivet panel component]({{< ref "/components/layout/panels.md" >}}) and will be removing it in the next major release of Rivet (`2.0.0`) in favor of two new components: the **box** and **media object**.

These new components give developers more flexibility when grouping content, and they make it easier to build layouts they previously had to assemble from panels, grids, and spacing utility classes

## Box component
Rivet `1.2.0` introduces the [box component]({{< ref "/components/layout/box.md" >}}), which you can use to visually group related pieces of content. This new component has several display, sizing, and color variations, including a `.rvt-box--card` variant you can use as a drop-in replacement for panels.

The box component is much more flexible than the panel component, providing developers and designers more options for grouping or displaying lists of related content.

## Media object component
In addition to the box component, Rivet `1.2.0` features the new [media object component]({{< ref "/components/page-content/media-object.md" >}}). Like the box component, the media object component makes it easier to display lists of complex content and their associated controls without the use of tables.

## Getting help
If you have questions about the deprecated panel component or the new box and media object components, head over to the [Rivet Slack channel](https://iuwebcommunity.slack.com/messages/rivet).
