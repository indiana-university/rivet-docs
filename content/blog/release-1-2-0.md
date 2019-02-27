---
title: Rivet 1.2.0 release
description: Rivet 1.2.0 is now available. This release adds the box, media object, and loading indicator components, along with some improvements to the consistency of Sass color variables.
date: "2019-01-14"
tags:
    - "release"
    - "new component"
excludeFromIndex: true
author:
  email: "scanmurr@indiana.edu"
  name: "Scott Anthony Murray"
---
Rivet 1.2.0 is now available! This release adds the box, media object, and loading indicator components, along with some improvements to the consistency of Sass color variables.

## Box component

The new [box component]({{< ref "components/layout/box.md" >}}) can be used to help visually group related content. With a wide variety of display options—including styles for card-based layouts—the box component replaces the [now-deprecated panel component]({{< ref "components/layout/panels.md" >}}).

## Media object component

The new [media object component]({{< ref "components/page-content/media-object.md" >}}) makes it easier to display lists of complex content and their associated actions (such as records in a [<abbr title="Create, read, update, and delete">CRUD</abbr> application](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)) without using tables.

## Loading indicator component

The new [loading indicator component]({{< ref "components/overlays/loading-indicator.md" >}}) can be used to indicate the loading of page content, such as when a single page application makes a request for new content.

A loading indicator can also be placed inside a button to show that a form submission is being processed.

## Improved consistency of Sass color variables

We did a lot of work to standardize the use of color in Rivet. This includes creating a set of standard color variant Sass variables for each color used in Rivet (blue, green, orange, yellow, and black).

<div class="rvt-alert rvt-alert--info rvt-m-bottom-md rvt-m-top-sm">
    <p class="rvt-alert__message">You might notice a subtle difference in this release's alert colors compared to those in previous releases.</p>
</div>

We’re working on documentation for use of color in Rivet and will have more to share on that later this spring. In the meantime, you can check out this [pull request discussing Rivet color variables](https://github.iu.edu/UITS/rivet-source/pull/403) for more info.

## Change freeze

The Rivet source code will be migrated from GitHub@IU to GitHub.com on **Thursday, January 17**. Until the migration is complete, no new updates will be pushed to the Rivet source code repos, and no issues or pull requests can be opened.

We’ll let everyone know as soon as the migration is complete. If you come across any issues during the change freeze, please email them to [rivet@iu.edu](mailto:rivet@iu.edu) and we’ll make sure the issues are created on the new repo after the move is complete.

For more, see our [blog post about the migration to GitHub.com]({{< ref "blog/open-sourcing-rivet.md" >}}).

## Complete list of updates

For a complete breakdown of the 1.2.0 updates, see the [Rivet changelog](https://rivet.iu.edu/components/information/changelog/).
