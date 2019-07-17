---
title: Rivet 1.0.0 release
description: The official Rivet 1.0.0 release is now available!
date: "2018-04-16"
tags:
    - "release"
    - "new component"
excludeFromIndex: true
author:
  email: "lmcgrana@iu.edu"
  name: "Levi McGranahan"
---
Rivet 1.0.0 is now available. We've made a few updates since the last release (0.5.0). We'll go over the additions and updates in this post.

## Migration guide (0.5.0 – 1.0.0)
The [last pre-release of Rivet]({{< ref "blog/release-0.5.0.md" >}}) was the most significant to date. We made a handful of breaking changes in 0.5.0 that are documented in the [0.5.0 migration guide]({{< ref "blog/0.5.0-migration-guide.md" >}}). If you have already updated to 0.5.0, you can safely update to 1.0.0 without breaking changes.

<div class="rvt-alert rvt-alert--info rvt-m-bottom-md rvt-m-top-sm">
    <h3 class="rvt-alert__title" id="warning-alert-title">Changes in 1.0.0</h3>
    <p class="rvt-alert__message">The updates we've made since the last release (0.5.0) were all additive and shouldn't be breaking changes. If you do run into any problems updating, <a href="https://github.com/indiana-university/rivet-source/issues/new/choose">please open an issue on Github.iu</a>.</p>
</div>

## 1.0.0 Additions
Here's a quick list of the additions in this release:

- New styles to [indicate the current page]({{< ref "components/navigation/header.md#navigation-current-state" >}}) in the main navigation
- Improved documentation around [dropdown menu markup]({{< ref "components/navigation/dropdown.md#dropdown-example" >}}) that will help improve accessibility including better use of ARIA roles and attributes
- Improved [checkbox]({{< ref "components/forms/checkboxes.md#alternate-markup-with-hidden-fields" >}}) and [radio button]({{< ref "components/forms/radio-buttons.md#alternate-markup-with-hidden-fields" >}}) styles so they can now be used with adjacent hidden inputs that are require by some framework templating engines
- Improved modal controls styling to work better on smaller screens
- Improved legibility of focus state on inline links

For a more detailed breakdown of the 1.0.0 updates you can [view the changelog on the Rivet home page](../../#changelog).

## What's next?
This quarter we'll be working on more documentation and training around using Rivet and a model for extending Rivet with additional plugins and widgets. [Read the Roadmap](../../#roadmap) for more details about what we'll be working on the rest of this year.

We would appreciate any feedback you have and be happy to answer any questions. The best way to submit feedback is by creating an issue on Github.IU, or email uxo@iu.edu:

https://github.com/indiana-university/rivet-source/issues/new/choose

Thanks!