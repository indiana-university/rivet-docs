---
title: Rivet 2.0.0-alpha.7 release
description: The latest Rivet 2 alpha release adds web application layouts and introduces the empty state component.
date: "2021-08-26"
tags:
    - "minor release"
excludeFromIndex: true
author:
  email: "scanmurr@iu.edu"
  name: "Scott Anthony Murray"
hideToc: true
---
Last week, we published [Rivet 2.0.0-alpha.7](https://github.com/indiana-university/rivet-source/releases/tag/v2.0.0-alpha.7) to GitHub. This release adds web application layouts and introduces the empty state component.

[Learn more about alpha releases](https://v2.rivet.iu.edu/docs/getting-started/alpha/)

## Web application layouts
In our previous alpha release, we [introduced the concept of layouts]({{< ref "../blog/introducing-layouts.md" >}}): prebuilt IU-branded HTML templates you can use for your websites or applications. Layouts are designed to help give you a head start in creating many of the page types commonly used across IU’s web space.

Rivet `2.0.0-alpha.7` expands on the initial set of marketing-focused layouts by adding several new layouts designed for use with web applications.

![Web application index page with sidebar](/img/app-layout-ss.jpg)

<small>Screenshot of the <a href="https://v2.rivet.iu.edu/docs/layouts/app-index-page/">app index page layout</a>.</small>

You can [view the new web application layouts](https://v2.rivet.iu.edu/docs/layouts/) on the Rivet 2 alpha website.

## Empty state component
Rivet `2.0.0-alpha.7` also introduces the new [empty state component](https://v2.rivet.iu.edu/docs/components/empty-state/). This component can be used in a web application as a placeholder when there's no data to show the user.

An empty state can also contain buttons that suggest next steps to the user, such as creating their first record or reading the application's documentation.

![Empty state component with placeholder text and action buttons](/img/empty-state-ss.jpg)

## Rivet 1.8.2 release
Rivet version `1.8.2` is also now available.

This small patch update fixes an issue with the [tabs component]({{< ref "../components/page-content/tabs.md" >}}) that prevented the up and down arrow keys from functioning in an accessible way when the tabs were in focus.

## Complete list of updates
See the Rivet changelog for a complete list of updates in Rivet versions `2.0.0-alpha.7` and `1.8.2`.

- [Rivet 2 alpha changelog](https://v2.rivet.iu.edu/docs/getting-started/changelog/)
- [Rivet 1 changelog]({{< ref "../components/information/changelog.md" >}})

## Leaving feedback

The new version of Rivet is still in development and we plan to continue iterating on the code, components, layouts, and documentation. We welcome your suggestions during this process.

To leave feedback on the latest alpha, [post a comment to our GitHub Discussions thread](https://github.com/indiana-university/rivet-source/discussions/467) or send a message to [rivet@iu.edu](mailto:rivet@iu.edu).