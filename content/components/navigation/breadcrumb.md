---
title: "Breadcrumb"
asOf: 1.0.0
description: A navigation component that indicates the user's current location in the nav hierarchy
status: "Ready"
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. [View the breadcrumbs documentation on the Rivet 2 website](https://v2.rivet.iu.edu/docs/components/breadcrumbs/).
{{< /alert >}}

## Default breadcrumb
{{< example lang="html" >}}<nav role="navigation" aria-label="Breadcrumbs">
    <ol class="rvt-breadcrumbs">
        <li><a href="#"> Home </a></li>
        <li><a href="#"> Files </a></li>
        <li aria-current="page">my-file.txt</li>
    </ol>
</nav>
{{< /example >}}

## When to use
Use breadcrumbs when your application has multiple levels in the navigation hierarchy. Breadcrumbs can help users navigate quickly between these levels.

## When to consider something else
Avoid using the breadcrumb nav when your application only has one level of navigation.

## Implementation notes
The default breadcrumb is minimally styled with CSS-generated content (/) used as separators.

### Callout example
There is also a `.rvt-breadcrumbs--call-out` modifier class that adds a small amount of padding and a light gray background. This is useful for when you need to draw more attention to the breadcrumb.

{{< example lang="html" >}}<nav role="navigation" aria-label="Breadcrumbs call out">
    <ol class="rvt-breadcrumbs rvt-breadcrumbs--call-out">
        <li><a href="#"> Home </a></li>
        <li><a href="#"> Files </a></li>
        <li aria-current="page">my-file.txt</li>
    </ol>
</nav>
{{< /example >}}

## Accessibility
The breadcrumb component is wrapped in a `nav` element so that it is announced to assistive technologies. It is also a good idea to add `aria-label` attributes to the `nav` element and current page `li` that describes the navigation.

## Resources
- [NN Group on the benefits of breadcrumb navigation](https://www.nngroup.com/articles/breadcrumb-navigation-useful/)
- [ARIA authoring practices example of accessible breadcrumb nav](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html)
