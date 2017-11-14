---
title: Why we built Rivet
description: Some thoughts about why we built Rivet, a new design system for software at IU.
navTitle: "Learn"
weight: 2
---
<figure class="rvtd-article-figure rvt-p-left-xxl rvt-p-right-xxl p-bottom-xxl">
    <img src="/img/homepage-hero.png" alt=" ">
</figure>

From the time students enroll in and graduate from IU, they encounter dozens of apps and software titles that are unique to the university. Often these apps don’t look, feel, or function the same way - so they must relearn how to navigate new systems each time they encounter them.

While we recognize these challenges within UITS, we believe they are symptoms of larger software industry problems. Software development is rarely constrained, which means a variety of solutions can be applied to any given challenge. But it also leads to disjointed user experiences. Often developers must start from scratch when they build new software simply because there is no standard way of handling it.

People need consistent, familiar, and accessible software experiences, and developers need a standardized system that also responds to IU’s evolving needs. In other words, IU needs a design system.

## IU needs a design system
A design system contains assets that developers can use to create patterns across software titles. It includes guidelines for contribution, so anyone in the IU development community can make suggestions for improvements. And it makes the job of maintaining software much easier.

### Collective Efforts
Typically a design system has input from many developers and designers. Problems and solutions are addressed by an entire team. That helps both designers and developers avoid reinventing designs and code each time they start on a new project. And because it offers a single source of assets, it also helps standardize their work.

### Maintenance
Software is considered a product, but it doesn’t wear out or get replaced (unlike traditional consumer goods). Code and designs created years ago still exist in many places, demanding constant maintenance and upgrading.

A design system strips assets down to their barest essentials. These lightweight pieces rely on simplified code - so they are much easier to update or upgrade. Dan Cedarholm, author of _Bulletproof Web Design_, said it best: “Breaking interfaces down into patterns has been immensely helpful in learning and re-evaluating the best possible code to implement.”

## Why not bootstrap
Bootstrap is just one of many front-end frameworks used in software development. It’s fast and easy to implement. But it’s also full of rarely used extras, leading to bloated code. Teams using Bootstrap often build additional layers of customization above the base code. This means design patterns and styles are often different from those of the organization. Further, original designs can be difficult to implement in Bootstrap’s structured environment, particularly within tight timelines.

> “How do we create a consistent visual library and unified patterns across a range of systems?"

While Bootstrap offers developers much in the way of markup and CSS, there are some major disadvantages:

- Bootstrap is not designed for the Indiana University experience
- Bootstrap does not document good user experience patterns or interface practices
- Bootstrap does not meet the university’s Web Accessibility policy out of the box

But it’s difficult to ignore Bootstrap’s benefits: It offers a starting place for developers and designers and a consistent visual library, which is why so many teams use it (especially at the enterprise level). So at this point, the question becomes: How do we create something similar that also addresses IU’s needs?

## Rivet — a sustainable, responsive design system for IU
With familiarity being a key component of usability, IU needs a toolset of its own for creating web applications. Rivet is a lightweight, intentional, and focused set of front-end components and tools that allow people at IU to have a familiar experience on all IU web applications. By having our own design system we can INCLUDE everyone and address everyone's needs.. When there are accessibility issues, we fix them right away.

> “Rivet is not just a set of UI components, it is a place for documenting good UX, accessibility, and design practices. It is a guide of when and how to use certain patterns and implement them in an accessible way."

We want people to reach out to us with requests and suggestions — that way, we’re making decisions about IU software together. By using a system designed by members of the university, university developers can worry less about whether stylings match the IU brand, and focus more on actual product creation.
