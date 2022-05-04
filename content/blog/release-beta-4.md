---
title: Rivet 2.0.0-beta.4 release
description: The fourth Rivet 2 beta release introduces design updates to several components and a new responsive table wrapper element.
date: "2022-05-04"
tags:
    - "minor release"
excludeFromIndex: true
author:
  email: "lmcgrana@iu.edu"
  name: "Levi McGranahan"
hideToc: true
---
This week, we published the [fourth beta release of Rivet 2](https://github.com/indiana-university/rivet-source/releases/tag/v2.0.0-beta.4) to GitHub. This release introduces design updates to several components and a new responsive table wrapper element.

## Hero component updates

Based on feedback we got from several pilot projects using Rivet 2 we have updated the design of the [hero component](https://v2.rivet.iu.edu/docs/components/hero/) to cover a wider range of use cases.

{{< alert variant="warning" title="Manual update required" >}}
This will require a manual update to your HTML if you are currently using the hero component in your project.
{{< /alert >}}

Updates include:

- Updated `rvt-hero__image` CSS class name element to `rvt-hero__media` and reworked element so that in addition to image elements video elements, both native HTML5 and embedded `iframe`s (YouTube, Vimeo, etc.) can be used in the hero component
- Added ability you use hero component without the `rvt-hero__media` element
- Added new `rvt-hero--bg-dark` variant that makes it possible to change the background of the hero component using Rivet's [color utility classes](https://v2.rivet.iu.edu/docs/utilities/color/)

## Call to action updates

This release includes a new `rvt-cta--button` variant of the call to action component that creates a call to action with a large touch/click area that is styled similar to a button.

## Pagination updates

This release also updates the pagination component HTML markup to fix some accessibility issues.

{{< alert variant="warning" title="Manual update required" >}}
This will require a manual update to your HTML if you are currently using the pagination component in your project.
{{< /alert >}}

## Responsive table wrapper

We've added a new table wrapper element that can be used to help make tables more mobile friendly. Read [table component documentation](https://v2.rivet.iu.edu/docs/components/table/) for more details.


## Complete list of changes

To see all updates made in this release, visit the [Rivet 2 changelog](https://v2.rivet.iu.edu/docs/getting-started/changelog/).

## Leaving feedback

The new version of Rivet is still in development and we welcome your suggestions during this process.

To leave feedback on the beta, [post a comment to our GitHub Discussions thread](https://github.com/indiana-university/rivet-source/discussions/568), [file a bug report](https://github.com/indiana-university/rivet-source/issues), or send a message to [rivet@iu.edu](mailto:rivet@iu.edu).

## Get updates about Rivet 2

To receive updates about Rivet 2's development, [join the Rivet mailing list](https://list.iu.edu/sympa/subscribe/rivet-l).