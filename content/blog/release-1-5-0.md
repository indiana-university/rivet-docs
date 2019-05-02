---
title: Rivet 1.5.0 release
description: Rivet 1.5.0 is now available. This release introduces a datepicker add-on, adds responsive width utility classes, and squashes a few bugs.
date: "2019-05-01"
tags:
    - "release"
    - "new component"
excludeFromIndex: true
author:
  email: "scanmurr@iu.edu"
  name: "Scott Anthony Murray"
---
Rivet `1.5.0` is now available! This release introduces a datepicker add-on, adds responsive width utility classes, and squashes a few bugs.

## Datepicker add-on

One of the most frequently requested components is finally here: a [Rivet datepicker]({{< ref "add-ons/rivet-datepicker.md" >}}).

This add-on component allows developers to add calendar datepicker fields to their applications in an accessible way.

Datepicker usability and accessibility can be tricky, and for that reason we've kept the datepicker as an add-on until we can get more feedback on how folks use datepickers in their own applications. We invite you to share your datepicker implementations with us as you start using it in your apps.

## Responsive width utility classes

We recognized that developers often need to constrain the width of certain elements in an interface, especially form fields. Previously, a developer could only accomplish this via custom CSS or a cumbersome nested grid.

This release introduces new [responsive width utility classes]({{< ref "components/utilities/width.md" >}}) that allow developers to further fine-tune their layouts, especially when combined with Rivet's [flex utilities]({{< ref "components/utilities/flex.md" >}}).

## Bug fixes

Recently, the [layout of the IU-branded footer for websites was updated](https://github.com/indiana-university/rivet-source/issues/87). The `1.4.0` release of Rivet updated the footer to reflect these changes, but the new footer elements [didn't wrap cleanly on smaller screens](https://github.com/indiana-university/rivet-source/issues/96).

This release updates the Rivet footer's breakpoints to allow cleaner wrapping of elements.

In addition, this release fixes an issue with the background color of active small secondary buttons [making the button text unreadable](https://github.com/indiana-university/rivet-source/issues/102).

## Getting help

If you have questions about the datepicker add-on or width utility classes, head over to the [Rivet Slack channel](https://iu-uits-es.slack.com/messages/rivet-design-system) or send a message to the [Rivet mailing list](mailto:rivet-l@list.iu.edu).
