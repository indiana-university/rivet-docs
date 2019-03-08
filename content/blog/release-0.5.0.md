---
title: Rivet 0.5.0 release
description: Rivet 0.5.0 is now available. This release adds a lot of new components and improves existing ones.
date: "2018-03-21"
tags:
    - "release"
    - "new component"
aliases:
    - "/learn/release-0.5.0"
excludeFromIndex: true
author:
  email: "lmcgrana@iu.edu"
  name: "Levi McGranahan"
---
0.5.0 brings a handful of pretty significant changes that will require updating some markup in a few places mainly isolated to the header. We've update the documentation to reflect all of the new additions and created a guide to help you update from any of the pre-0.5.0 versions.

## New components
Here's a list of the new components we've added for this release.

- [Segmented buttons]({{< ref "components/forms/buttons-segmented.md" >}})
- [Input groups]({{< ref "components/forms/input-group.md" >}})
- [Tabs]({{< ref "components/page-content/tabs.md" >}})
- [Dropdown menus]({{< ref "components/navigation/dropdown.md" >}})
- [Custom File input]({{< ref "components/forms/file-input.md" >}})

## Features
We've also spent some time improving existing components.

- Visual updates to buttons, form inputs, and icons
- Redesigned inline form validation errors and messaging
- Responsive header sizing
- `init()` methods now accept a context DOM element within which to initialize components

## Bug fixes
Thanks to some of the folks piloting Rivet we've found a few bugs that have also been fixed.

- Alerts dynamically added to the DOM after `init()` has run will now dismiss correctly
- Improved accessibility of header components
- Fixed `Modal.open()` not opening a modal
- Increased color contrast on some button states to meet WCAG 2.0
- Improved accessibility on dropdowns
- Focus-trapping in modals works correctly when there is only one focusable element
- DOM queries moved in to `init()` methods to allow components to be re-initialized
- The background of the drawer will now extend to the bottom of the browser when the contents of the drawer are longer than the viewport

## Approaching 1.0.0
As we mentioned above this will be the **last release before we move to 1.0.0**. We'll make any necessary changes based on feedback and testing as well as some documentation improvements, but any updates between now and 1.0.0 should be **additive, non-breaking changes**. The migration guide below outlines all the updates and includes code examples that will help you make the necessary updates.

{{< button url="../0.5" variant="secondary" analytics-category="click">}}View the guide{{< /button >}}

## Feedback & Questions
We'd appreciate any feedback you have and would be happy to answer any questions. The best way to submit feedback is by creating an issue on Github:

https://github.com/indiana-university/rivet-source/issues/new/choose

Thanks!