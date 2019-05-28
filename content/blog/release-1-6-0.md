---
title: Rivet 1.6.0 release
description: Rivet 1.6.0 is now available. This release introduces the step indicator and menu components along with a Rivet icons add-on.
date: "2019-05-28"
tags:
    - "release"
    - "new component"
excludeFromIndex: true
author:
  email: "scanmurr@iu.edu"
  name: "Scott Anthony Murray"
---
Rivet `1.6.0` is now available! This release introduces the step indicator and menu components along with a Rivet icons add-on.

## Step indicator component

This release introduces the new [step indicator component]({{< ref "/components/page-content/step-indicator.md" >}}), which allows you to show a user the current step in a multi-step process such an application or purchasing form. 

The step indicator can also be configured to indicate the status of each step (such as "completed" or "has errors") and provide a user with a link back to previous steps.

Huge thanks to Clinton McKay, Lane Bowman, Matt Berry, and Steve Templeton, who worked as a team to develop this component during the Rivet Community Workshop in April. 🙌

## Menu component

In addition to the step indicator, this release introduces the new [menu component]({{< ref "/components/navigation/menu.md" >}}).

In previous versions of Rivet, your options for navigation beyond the page header were limited, forcing many developers to write custom styles for sidebar and section navigation.

The menu gives you a simple, flexible way to add sidebar or section navigation to your application without the need for custom markup or CSS.

## Icons add-on

Icons have been available for use in Rivet for a while, but they weren't very easy for developers to use.

This release includes an [icons add-on]({{< ref "/add-ons/rivet-icons.md" >}}) that simplifies the process of using SVG icons in your application. The Rivet icon set has also been bundled into an npm package for those of you writing Node applications.

## Complete list of updates

For a complete breakdown of the `1.6.0` updates, see the [Rivet changelog]({{< ref "components/information/changelog.md" >}}).

## Getting help

If you have questions about the step indicator, menu, or icons add-on, head over to the Rivet Slack channels for [Enterprise Systems](https://iu-uits-es.slack.com/messages/rivet-design-system) or the [Web Community of Practice](https://iuwebcommunity.slack.com/messages/rivet).

You can also send a message to the [Rivet mailing list](mailto:rivet-l@list.iu.edu).
