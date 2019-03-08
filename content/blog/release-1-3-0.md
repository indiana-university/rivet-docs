---
title: Rivet 1.3.0 release
description: Rivet 1.3.0 is now available. This release adds new responsive spacing utility classes and a new set of flexbox utility classes for fine-tuning component layouts.
date: "2019-02-27"
tags:
    - "release"
    - "new component"
excludeFromIndex: true
author:
  email: "scanmurr@iu.edu"
  name: "Scott Anthony Murray"
---
Rivet 1.3.0 is now available! This release adds new responsive spacing utility classes and a new set of flexbox utility classes for fine-tuning component layouts.

## Responsive spacing utility classes

In this release, we've updated the [spacing utility classes]({{< ref "components/layout/spacing.md" >}}) to include responsive variants that can be used to apply margin and padding to elements at different breakpoints, such as `rvt-m-right-xl-md-up`.

Responsive spacing has been a common pain point for many developers using Rivet, so we hope these new utility class variants help make the process of building responsive layouts much smoother.

### Deprecation of "-remove"

In previous versions of Rivet, spacing utility classes used the `-remove` variant to clear a property from an element, such as `rvt-m-right-remove`. 

After listening to developer feedback, it was clear the `-none` modifier was more intuitive for people. On the back of your feedback, we've deprecated the `-remove` utility class variants in favor of the the new, fully-responsive spacing utility classes that use the `-none` modifier, like `rvt-m-right-none-md-up`. 

The old `-remove` utility class variants will still work, but all documentation moving forward will reference the new, unified `-none` format.

## Flexbox utility classes

We’ve added a [set of responsive flexbox utility CSS classes]({{< ref "components/utilities/flex.md" >}}) that can help you fine-tune layouts that previously would have required you to write custom CSS.

While we already have the [Rivet grid]({{< ref "components/layout/grid.md" >}}) for laying out pages at a high level, there are many situations in which developers need to make small adjustments to how elements are laid out at the individual component level.

## Bug fixes

This release fixes a few bugs related to [tab focus](https://github.com/indiana-university/rivet-source/pull/67), [keyboard functionality](https://github.com/indiana-university/rivet-source/pull/66), and [dropdown menus](https://github.com/indiana-university/rivet-source/pull/65).

## Complete list of updates

For a complete breakdown of the 1.3.0 updates, see the [Rivet changelog](https://rivet.iu.edu/components/information/changelog/).

## Getting help

If you have questions about the new spacing and flexbox utility classes, head over to the [Rivet Slack channel](https://iuwebcommunity.slack.com/messages/rivet) or send a message to the [Rivet mailing list](mailto:rivet-l@list.iu.edu).