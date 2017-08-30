+++
title = "Grid"
description = "A 12 column responsive grid with support for automatic columns that makes it easy to lay out your application."
status = "Alpha"
+++

## About the grid
The Rivet grid is a mobile-first grid system based on [flexbox](https://www.w3.org/TR/css-flexbox-1/). It is based on five screen sizes and uses CSS classes to specify how many columns the grid should have at each of these screen sizes.

## The container
The `.rvt-container` is the basic layout unit in Rivet. A basic `.rvt-container` element is fluid by default. It will take up the full width of the viewport with a default of `1.5rem` of padding on the left and right sides.

The container is meant to be a generic wrapper to add enough padding to the content of your application so that it doesn't bump up against the sides of the viewport. The container can be used as is without any other grid items inside, but it is required to wrap all other grid elements.

{{< example "html" >}}<div class="rvt-container">
    <div class="rvt-grid">
        <div class="rvt-grid__item">
            <span>Grid item</span>
        </div>
    </div>
</div>
{{< /example >}}

### Container sizes
If you need to constrain the `.rvt-container` to a fixed size there are four modifier classes that will set a `max-width` on the container.

They are:

- `.rvt-container--freshman` = 640px
- `.rvt-container--sophomore` = 1024px
- `.rvt-container--junior` = 1140px
- `.rvt-container--senior` = 1380px