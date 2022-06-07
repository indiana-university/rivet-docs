---
title: "Menu"
asOf: 1.6.0
description: "Provide additional navigation outside of the main header"
status: "Ready"
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. The menu component has been replaced by the [subnav component](https://v2.rivet.iu.edu/docs/components/subnav/) in Rivet 2.
{{< /alert >}}

{{< alert variant="info" title="New in Rivet 1.6.0" >}}
The menu component is new as of `1.6.0`. If you need help updating to `1.6.0`, see our [instructions for updating Rivet](/components/#updating-the-rivet-npm-package").
{{< /alert >}}

Use the menu component to provide users with additional navigation beyond that included in the main application header. 

Menu navigation is useful when you need to allow users to jump between pages in a specific subsection of your application.

## Basic menu

{{< example lang="html" >}}<nav class="rvt-menu" aria-label="Section navigation">
  <ul class="rvt-menu__list">
    <li class="rvt-menu__item">
      <a href="#" aria-current="page">Item one</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item two</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item three</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item four</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item five</a>
    </li>
  </ul>
</nav>
{{< /example >}}

### Badges in menu items

Use [badges]({{< ref "/components/page-content/badges.md" >}}) to highlight menu items that need attention:

{{< example lang="html" >}}<nav class="rvt-menu" aria-label="Section navigation">
  <ul class="rvt-menu__list">
    <li class="rvt-menu__item">
      <a href="#" aria-current="page">Item one</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item two</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item three</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">
        <span>Item four</span>
        <span class="rvt-badge rvt-badge--success rvt-m-left-xxs">3</span>
      </a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item five</a>
    </li>
  </ul>
</nav>
{{< /example >}}

### Icons in menu items

You can use [icons](https://github.com/indiana-university/rivet-icons) to emphasize the content of each menu item:

{{< example lang="html" >}}<nav class="rvt-menu" aria-label="Section navigation">
  <ul class="rvt-menu__list">
    <li class="rvt-menu__item">
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <g fill="currentColor">
            <path d="M8,8a4,4,0,1,1,4-4A4,4,0,0,1,8,8ZM8,2a2,2,0,1,0,2,2A2,2,0,0,0,8,2Z" />
            <path
              d="M12.75,16H3.25A1.25,1.25,0,0,1,2,14.75V13A4,4,0,0,1,6,9h4a4,4,0,0,1,4,4v1.75A1.25,1.25,0,0,1,12.75,16ZM4,14h8V13a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2Z" />
          </g>
        </svg>
        <span class="rvt-m-left-xs">Profile</span>
      </a>
    </li>
    <li class="rvt-menu__item">
      <a href="#" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor"
            d="M14.57,12.06,13,9.7V6A5,5,0,0,0,3,6V9.7L1.43,12.06a1.25,1.25,0,0,0,1,1.94H6a2,2,0,0,0,4,0h3.53a1.25,1.25,0,0,0,1-1.94ZM8,12H3.87L5,10.3V6a3,3,0,0,1,6,0v4.3L12.13,12Z" />
        </svg>
        <span class="rvt-m-left-xs">Notifications</span>
      </a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor"
            d="M12.29,2H12V1a1,1,0,0,0-2,0V2H6V1A1,1,0,0,0,4,1V2H3.71A2.78,2.78,0,0,0,1,4.83v7.33A2.78,2.78,0,0,0,3.71,15h8.57A2.78,2.78,0,0,0,15,12.17V4.83A2.78,2.78,0,0,0,12.29,2ZM3.71,4H4V5H6V4h4V5h2V4h.29a.78.78,0,0,1,.71.83V7H3V4.83A.78.78,0,0,1,3.71,4Zm8.57,9H3.71A.78.78,0,0,1,3,12.17V9H13v3.17A.78.78,0,0,1,12.29,13Z" />
        </svg>
        <span class="rvt-m-left-xs">Schedule</span>
      </a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor"
            d="M13.94,8.78A6,6,0,0,0,14,8a6,6,0,0,0-.07-.9L15.73,6a7.94,7.94,0,0,0-.92-2.15l-2.06.52a6,6,0,0,0-1.2-1.18L12,1.1A7.94,7.94,0,0,0,9.87.23L8.78,2.06A6,6,0,0,0,8,2a6,6,0,0,0-.9.07L6,.27a7.94,7.94,0,0,0-2.15.92l.52,2.06a6,6,0,0,0-1.18,1.2L1.1,4A7.94,7.94,0,0,0,.23,6.13L2.06,7.22A6,6,0,0,0,2,8a6,6,0,0,0,.07.9L.27,10a7.94,7.94,0,0,0,.92,2.15l2.06-.52a6,6,0,0,0,1.2,1.18L4,14.9a7.94,7.94,0,0,0,2.17.87l1.09-1.83A6,6,0,0,0,8,14a6,6,0,0,0,.9-.07L10,15.73a7.94,7.94,0,0,0,2.15-.92l-.52-2.06a6,6,0,0,0,1.18-1.2L14.9,12a7.94,7.94,0,0,0,.87-2.17ZM8,11a3,3,0,1,1,3-3A3,3,0,0,1,8,11Z" />
        </svg>
        <span class="rvt-m-left-xs">Settings</span>
      </a>
    </li>
  </ul>
</nav>
{{< /example >}}

## Vertical menu

On wider screens, navigation links in a default menu component are arranged horizontally to fill the width of the menu's container.

To force the menu to always display links vertically (such as when placed in a sidebar), use the `.rvt-menu--vertical` modifier class:

{{< example lang="html" >}}<nav class="rvt-menu rvt-menu--vertical" aria-label="Section navigation">
  <ul class="rvt-menu__list">
    <li class="rvt-menu__item">
      <a href="#" aria-current="page">Item one</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item two</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item three</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item four</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item five</a>
    </li>
  </ul>
</nav>
{{< /example >}}

## Horizontal menu

You can force a menu to always display links horizontally regardless of screen size with the `.rvt-menu--horizontal` modifier class:

{{< example lang="html" >}}<nav class="rvt-menu rvt-menu--horizontal" aria-label="Section navigation">
  <ul class="rvt-menu__list">
    <li class="rvt-menu__item">
      <a href="#" aria-current="page">Item one</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item two</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item three</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item four</a>
    </li>
    <li class="rvt-menu__item">
      <a href="#">Item five</a>
    </li>
  </ul>
</nav>
{{< /example >}}

## When to use
- To allow users to move between pages in a specific subsection of your application

## When to consider something else
- For top-level navigation, use components like the [header]({{< ref "/components/navigation/header.md" >}}) and [breadcrumb navigation]({{< ref "/components/navigation/breadcrumb.md" >}})
- For navigation between steps of a process that's been split across multiple pages, use the [step indicator]({{< ref "/components/page-content/step-indicator.md" >}})
- To allow users to switch between chunks of related content without having to leave the current page, use [tabs]({{< ref "/components/page-content/tabs.md" >}})

## Implementation notes
- Keep navigation labels short (1-2 words)

## Accessibility notes
- Add the `aria-current="page"` attribute to a navigation link to indicate the current page
