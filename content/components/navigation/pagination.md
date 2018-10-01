---
title: "Pagination"
description: "The pagination component is used to break up large sets of data across multiple pages."
requiresJs: false
status: "Ready"
---
## Pagination Example
{{< example lang="html" >}}<nav role="navigation" aria-label="Default results pages">
    <ul class="rvt-pagination">
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Previous set of pages">Previous</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Page 4">4</a>
        </li>
        <li class="rvt-pagination__item is-active" aria-current="true">
            <a href="#" aria-label="Page 5, current page">5</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Page 6">6</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Next set of pages">Next</a>
        </li>
    </ul>
</nav>
{{< /example >}}

## When to use
Use when a user's action returns a large data set such as search results, or a large number of rows in a data table to break results into multiple pages to help with load times.

## When to consider something else
With smaller amounts of data consider displaying the whole dataset in one page that users can scroll through instead of breaking it into pages.

## Accessibility
The pagination component is wrapped in a `nav` element so that it is announced to assistive technologies. Use an `aria-label` attribute to describe the purpose of your pagination. This will help assistive technologies distinguish between navigation sections on pages that use more than one `<nav>` element.

### Accessible dynamic pagination
This [article on a11ymatters.com](http://www.a11ymatters.com/pattern/pagination/) has some really good tips on implementing dynamic `aria-label`(s) on pagination items based on how many pages are returned.

## Implementation
When using the `.is-disabled` classes to create pagination links that appear to be disabled, add a `tabindex="-1"` attribute to the `<a>` tag so that it removes the disabled link from the tab order. It's also advisable to use JavaScript to disable the link's default functionality with the `.preventDefault()` method.

### Positioning
The pagination component is left-aligned by default, but you can easily center or right-align it using the `rvt-pagination--center` or `rvt-pagination--right` modifier classes.

{{< example lang="html" >}}<nav role="navigation" aria-label="Right-aligned results pages">
    <ul class="rvt-pagination rvt-pagination--right">
        <li class="rvt-pagination__item is-disabled">
            <a href="#" aria-label="Previous pages" tabindex="-1">Previous</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Page 1">1</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Page 2">2</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Page 3">3</a>
        </li>
        <li class="rvt-pagination__item is-active" aria-current="true">
            <a href="#" aria-label="Page 4, current page">4</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" arial-label="Nex set of pages">Next</a>
        </li>
    </ul>
</nav>
{{< /example >}}

### Small pagination
Add the CSS modifier class `.rvt-pagination--small` if you need to display the pagination component at a smaller size.

{{< example lang="html" >}}<nav role="navigation" aria-label="Small results pages">
    <ul class="rvt-pagination rvt-pagination--small">
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Previous set of pages">Previous</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Page 4">4</a>
        </li>
        <li class="rvt-pagination__item is-active" aria-current="true">
            <a href="#" aria-label="Page 5, current page">5</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Page 6">6</a>
        </li>
        <li class="rvt-pagination__item">
            <a href="#" aria-label="Next set of pages">Next</a>
        </li>
    </ul>
</nav>
{{< /example >}}
