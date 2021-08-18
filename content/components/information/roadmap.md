---
title: "Roadmap"
description: "Our plans for Rivet in 2019–2020 and beyond"
excludeFromStatus: true
excludeFromNavigation: true
draft: true
weight: 1
aliases:
  - /roadmap/
---

<div class="rvt-alert rvt-alert--warning rvt-m-bottom-md" role="alertdialog" aria-labelledby="roadmap-outdated">
    <h1 class="rvt-alert__title rvt-m-bottom-sm" id="roadmap-outdated">This roadmap is out of date</h1>
    <p class="rvt-alert__message rvt-m-bottom-sm">Last year, members of the Rivet team were reassigned to emergency projects related to IU's coronavirus response and the milestones laid out in the roadmap below were put on hold.</p>
    <p class="rvt-alert__message">As Digital Campus resumes normal operations, we've begun to restart work on Rivet 2. See the Rivet blog for more information on our <a href="/blog/spring-2021/">development plans for spring 2021</a>.</p>
</div>

## Timeline
{{< roadmap-timeline >}}

## Q4 2019: Rivet 2.0-alpha release
By October 1 we’ll start to move the new components and patterns that have been designed during the pilot projects already underway into the Rivet codebase on a new dedicated development branch for version 2.

As a part of this Alpha phase launch, we will begin work on a Rivet 1.x end-of-life (EOL) plan. The first step of the EOL will be to create a new v2 URL (e.g. `v2.rivet.iu.edu`) where we can design and build the new version of the Rivet docs.

### Goals
- Have `v2.rivet.iu.edu` URL in place with an alpha version of documentation for newly added components. As a good first step this URL could be where we publish the component library development environment (Fractal)
- Complete new header pattern and configurations
- Complete new footer pattern and configurations
- Add new versions of content patterns (formerly known as chunks)
- Remove deprecated code
- Start to make any breaking changes

## Q1: Rivet site redesign
While we’re expanding on the components and patterns that currently exist in Rivet, we’ll be working to redesign the Rivet documentation site. The focus of the work on the updated version of the Rivet site will be [_building the onion_](https://clearleft.com/posts/systematised-design-glossing-over-confusion) structure of our design system.

By _building the onion_ we mean improving on the existing foundation of Rivet as a component library to include guidance on using the fundamentals of our brand (color, type, logos, voice) along with our components, page templates, and UX guidelines to create consistent and usable experiences that put our users first. 

### Goals
- Start to implement [updated IA (WIP)](https://www.figma.com/file/WSHuoiTdgK4RTsVsWD6xYx/2019-Rivet-site-IA-Copy?node-id=0%3A1)
- Add foundation docs (color, type, logos, voice)
- Create documentation for layouts
- Create documentation for new content patterns
- Work to update editorial & content guides

## Q2: 2.0 Launch
During this phase we’ll launch the new v2 docs, which will include publishing a migration guide. Our current plan for the v2 docs launch looks something like this:

1. Archive the 1.x documentation (the current Rivet site) at a new `v1.rivet.iu.edu`
1. Begin publishing the new v2 documentation site to permanent Rivet documentation site URL `rivet.iu.edu`
1. Promote v2 migration guide and new legacy/archive URL (`v1.rivet.iu.edu`)

### Goals
- Official release of `v2.0.0`
- Launch new official documentation site with revised information architecture in place (foundations, component library, templates and pages, UX guidance docs)
- Moving content from `v2.rivet.iu.edu` to the permanent URL `rivet.iu.edu`
- Permanent home for archived v1.x documentation
- Release Migration guide and tooling
