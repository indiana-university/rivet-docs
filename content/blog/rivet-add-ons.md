---
title: Announcing Rivet Add-ons
description: A collection of Rivet plugins, templates, and other helpful resources
date: "2018-07-06"
tags:
    - "new component"
excludeFromIndex: true
---
Rivet Add-ons are additional plugins that are built to work along with the [Rivet core components][components-docs]. They provide a way to add new design patterns and functionality to Rivet in a modular way. Unlike new components added to the Rivet core, add-ons can be used alongside Rivet’s core components on an as-needed basis.

## Why Add-ons?
When we created Rivet we set out to build the simplest system we could. We put our focus on creating the basic building blocks used to create user interfaces and making them as flexible as possible.

We know that as a design system Rivet won't necessarily have a prebuilt solution for every design problem. We know that sometimes teams at IU will need to build their own solution to solve problems specific to their app, **and that's OK**.

We created this new concept of Add-ons for a few reasons:

1. To make it easier to build custom or app-specific components that can then be shared back with others using Rivet
2. To be able to release components separate from the Rivet core that are _opt-in_. This helps keep the Rivet core CSS and JavaScript small in file sizes and low in complexity.
3. To help foster a Rivet _ecosystem_ and increase collaboration across teams in UITS.

## Using Rivet Add-ons
We've added a new section to the Rivet documentation where you can find a current list of available Add-ons and how to use them in your project.

Each documentation page has links to download code needed to use the Add-on, a link to the Github repository that hosts the source code, and a demo page. If you have questions, want to report a bug, or have a feature request we ask that you create a Gtihub issue on the Add-on source repository to help us track development work.

To create an issue for a Rivet Add-on:

1. Got to the [Rivet Add-ons page][add-ons-page] and navigate to the documentation page for the Add-on by clicking on it in the list
2. Click the _Source_ link in the toolbar. This will take you to the Add-ons Github repository
3. Click the "Issues" tab and create your new issue (this will require a Github.com account)

## Have an idea for an Add-on?
If you or your team has created a custom solution for an app you are working on that uses Rivet and you think it might be useful to share with other teams, we've created a Rivet [Add-on boilerplate repository][boilerplate] to help you develop your own Add-on in a standard way that will match existing Add-on design and development patterns.

The Rivet core team is also happy to work with you with visual design, front-end development, and accesibiblity if you need help developing an Add-on. If you have a need for an Add-on you can create an issue in the [Rivet source Github repository][rivet-source] to get a conversation started about your idea.

[components-docs]: ../../components
[rivet-source]: https://github.iu.edu/UITS/rivet-source/issues
[add-ons-page]: ../../add-ons
[boilerplate]: https://github.com/indiana-university/rivet-add-on-boilerplate