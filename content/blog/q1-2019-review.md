---
title: Rivet quarter in review — Q1 2019
description: A summary of the Rivet team's progress toward our goals for the first quarter of 2019.
date: "2019-04-01"
excludeFromIndex: true
author:
  email: "scanmurr@iu.edu"
  name: "Scott Anthony Murray"
---

Levi McGranahan, design system lead, hosted a call last week in which he summarized the progress the Rivet team has made toward the [goals we laid out for Q1 2019 in the roadmap]({{< ref "components/information/roadmap.md" >}}).

This blog post recaps the key takeaways from Levi's Q1 progress report.

{{< blog-media-object
      type="audio-video"
      title="Watch or listen to the quarterly review"
      subtitle="Kaltura video"
      url="https://iu.mediaspace.kaltura.com/media/Rivet+Quarterly+Review+-+Q1+2019/1_7btvoo82" >}}

{{< blog-media-object
      type="slides"
      title="View the quarterly review slide deck"
      subtitle="Google Slides presentation"
      url="https://docs.google.com/presentation/d/19u3hH_KHBO-aeKxjZrYdwGtCGR4rDk1Sq9nQ7RZ0hEY/edit?usp=sharing" >}}

## Goal: Hire a new front-end developer
**Status**: <span class="rvt-badge rvt-badge--success">Done</span>

Rachel O'Connor, formerly of the User Experience Office engineering team, has transitioned into the role of front-end developer for Rivet.

Rachel is still getting up to speed, but since joining the team she has closed a significant number of bugs and maintenance issues. Next quarter, she hopes to shift her focus to the [feature requests in the backlog](https://github.com/indiana-university/rivet-source/issues?q=is%3Aissue+is%3Aopen+label%3Arequest+sort%3Areactions-%2B1-desc).

## Goal: Establish a team project management process
**Status**: <span class="rvt-badge rvt-badge--success">Done</span>

Last year, developers made it clear that Rivet needed a consistent release schedule that they could plan their own workflows around. We resolved to implement a monthly release process, and we're happy to say that we've done so — the end of March saw our [third monthly release of 2019](https://github.com/indiana-university/rivet-source/releases).

In addition, we've created a comprehensive new wiki that lays out our [development](https://github.com/indiana-university/rivet-source/wiki/Development-process), [release](https://github.com/indiana-university/rivet-source/wiki/Release-process), and [issue tracking](https://github.com/indiana-university/rivet-source/wiki/Issue-tracking) processes.

## Goal: Increase backlog visibility and engagement
**Status**: <span class="rvt-badge rvt-badge--success">Done</span>

The new project management processes and [contribution guidelines](https://github.com/indiana-university/rivet-source/wiki/) we put into place all center around the [Rivet public backlog](https://github.com/orgs/indiana-university/projects/2).

A new part of our process this year is [soliciting upvotes from the community on feature requests in the backlog](https://github.com/indiana-university/rivet-source/wiki/Development-process). We were encouraged to see more engagement with the backlog than we were expecting when we put out the first call for upvotes, and we hope engagement continues to increase as people become accustomed to this part of the process.

## Goal: Establish and document a QA process
**Status**: <span class="rvt-badge rvt-badge--warning">Ongoing</span>

On the back of [Rivet's migration to GitHub.com]({{< ref "blog/open-sourcing-rivet.md" >}}) and Rachel's hiring, we've been exploring ways we can leverage continuous integration (CI) tools to run automated tests on any code pushed to Rivet repos. 

We're currently testing a repeatable CI process with Rivet add-on repos like [Rivet collapsible](https://github.com/indiana-university/rivet-collapsible/wiki/About-the-CircleCI-Setup).

We're also continuing to work on documentation on how we carry out manual testing of new or updated components. This documentation will be added to the [Rivet wiki](https://github.com/indiana-university/rivet-source/wiki/) when completed.
