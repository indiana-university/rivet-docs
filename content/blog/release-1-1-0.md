---
title: Rivet 1.1.0 release
description: Rivet 1.1.0 is now available. This release fixes a lot of JavaScript-related issues, adds several new utility classes, and provides additional variations of the table component.
date: "2018-09-20"
tags:
    - "release"
    - "new component"
excludeFromIndex: true
---
Rivet 1.1.0 is now available! This release fixes a lot of JavaScript-related issues, adds several new utility classes, and provides additional variations of the [table component]({{< ref "components/page-content/tables.md" >}}).

<div class="rvt-alert rvt-alert--info rvt-m-bottom-md rvt-m-top-sm">
    <h3 class="rvt-alert__title" id="warning-alert-title">Changes in 1.1.0</h3>
    <p class="rvt-alert__message">This release makes significant changes to the underlying structure of Rivet's JavaScript. If you run into any problems updating to 1.1.0, please <a href="https://github.com/indiana-university/rivet-source/issues">file an issue on GitHub</a>.</p>
</div>

## JavaScript updates

This release updates the JavaScript that powers Rivet components to use the [event delegation pattern](https://davidwalsh.name/event-delegate). This allows you to add or remove elements from the DOM via JavaScript without breaking event listeners you've already set up.

Likewise, in an effort to give developers more flexibility over how they use Rivet's JavaScript in their own scripts, we've added the ability to pass callback functions to many component API methods.

This release also adds new API methods for several components:

- [Dropdown]({{< ref "components/navigation/dropdown.md" >}}): `open()`, `close()`
- [Drawer]({{< ref "components/navigation/header.md" >}}): `open()`, `close()`, `destroy()`
- [Tabs]({{< ref "components/page-content/tabs.md" >}}): `activateTab()`
- [Modal]({{< ref "components/overlays/modals.md" >}}): `focusModal()`, `focusTrigger()`

Finally, this release creates some new custom DOM events to help make it easier to handle certain component interactions:

- [Dropdown]({{< ref "components/navigation/dropdown.md" >}}): `dropdownOpen`, `dropdownClose`
- [Drawer]({{< ref "components/navigation/header.md" >}}): `drawerOpen`, `drawerClose`
- [Modal]({{< ref "components/overlays/modals.md" >}}): `modalOpen`, `modalClose`

## New type scale aliases

This release adds new [type scale utility classes]({{< ref "components/layout/typography.md" >}}) that follow the size naming conventions used by the [spacing utility classes]({{< ref "components/layout/spacing.md" >}}). These new aliases allow you to adjust the size of your text without having to remember specific font sizes.

- `.rvt-ts-xxs`
- `.rvt-ts-xs`
- `.rvt-ts-sm`
- `.rvt-ts-md`
- `.rvt-ts-lg`
- `.rvt-ts-xl`
- `.rvt-ts-xxl`

## New margin and padding utility classes

This release adds new vertical and horizontal [spacing utility classes]({{< ref "components/layout/spacing.md" >}}):

- `.rvt-m-tb-`: Top and bottom margin (ex. `.rvt-m-tb-xl`)
- `.rvt-m-lr-`: Left and right margin
- `.rvt-p-tb-`: Top and bottom padding
- `.rvt-p-lr-`: Left and right padding

## New table variants

This release adds two new variants of the [table component]({{< ref "components/page-content/tables.md" >}}):

- [Compact]({{< ref "components/page-content/tables.md" >}}): The `.rvt-table-compact` class decreases the amount of padding applied to each table cell. This variant can be useful in situations where you need to conserve space when displaying large amounts of data.
- [Cells]({{< ref "components/page-content/tables.md" >}}): The `.rvt-table-cells` class adds borders to all table cells, which can help make your table's content easier to scan.

## More consistent color names
In previous versions of Rivet the CSS class names we used to apply color to alerts and validation was inconsistent across components. In this release we've tried to standardize the way we refer to color in our CSS so that developers can consistently reference color names.

This mainly affects the CSS class names for [alerts]({{< ref "components/overlays/alerts.md" >}}), [form validation]({{< ref "components/forms/text-input.md#form-validation-tips" >}}), and [buttons]({{< ref "components/forms/buttons.md" >}}), which all use the same names to refer to their respective color variants. For example, the following all produce the danger/error (orange) version of these components:

{{< code lang="css" >}}.rvt-badge--danger
.rvt-button--danger
.rvt-alert--danger
.rvt-validation-danger
{{< /code >}}

The old CSS class names for alerts, and validation will still work as expected, but will be deprecated in future versions of Rivet and should be updated when possible. [See this thread on Github](https://github.iu.edu/UITS/rivet-source/pull/320) for more details.

## Complete list of updates

For a complete breakdown of the 1.1.0 updates, see the [changelog on the Rivet home page](../../#changelog).