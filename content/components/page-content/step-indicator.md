---
title: "Step Indicator"
asOf: 1.6.0
description: "Show the user the current step in a multi-step process"
status: "Beta"
---

{{< alert variant="info" title="New in Rivet 1.6.0" >}}
The step indicator is new as of `1.6.0`. If you need help updating to `1.6.0`, see our [instructions for updating Rivet](/components/#updating-the-rivet-npm-package").
{{< /alert >}}

Use the step indicator component to help users keep track of their progress in a multi-step process, such as an application form.

## Basic step indicator

{{< example lang="html" >}}<ol class="rvt-steps">
  <li class="rvt-steps__item">
    <a href="#" class="rvt-steps__item-content">
      <span class="rvt-steps__label">Personal information</span>
      <span class="rvt-steps__indicator">
        <span class="rvt-sr-only">Step</span> 1
      </span>
    </a>
  </li>
  <li class="rvt-steps__item">
    <span class="rvt-steps__item-content" aria-current="step">
      <span class="rvt-steps__label">Records &amp; transcripts</span>
      <span class="rvt-steps__indicator">
        <span class="rvt-sr-only">Step</span> 2
      </span>
    </span>
  </li>
  <li class="rvt-steps__item">
    <span class="rvt-steps__item-content">
      <span class="rvt-steps__label">Confirmation</span>
      <span class="rvt-steps__indicator">
        <span class="rvt-sr-only">Step</span> 3
      </span>
    </span>
  </li>
</ol>
{{< /example >}}

## Vertical step indicator

Add the `.rvt-steps--vertical` class to display the steps as a column rather than a row.

{{< example lang="html" >}}<ol class="rvt-steps rvt-steps--vertical">
  <li class="rvt-steps__item">
    <a href="#" class="rvt-steps__item-content">
      <span class="rvt-steps__label">Personal information</span>
      <span class="rvt-steps__indicator">
        <span class="rvt-sr-only">Step</span> 1
      </span>
    </a>
  </li>
  <li class="rvt-steps__item">
    <span class="rvt-steps__item-content" aria-current="step">
      <span class="rvt-steps__label">Records &amp; transcripts</span>
      <span class="rvt-steps__indicator">
        <span class="rvt-sr-only">Step</span> 2
      </span>
    </span>
  </li>
  <li class="rvt-steps__item">
    <span class="rvt-steps__item-content">
      <span class="rvt-steps__label">Confirmation</span>
      <span class="rvt-steps__indicator">
        <span class="rvt-sr-only">Step</span> 3
      </span>
    </span>
  </li>
</ol>
{{< /example >}}

## When to use
- To break up a long form or interaction into three or more steps
- To communicate how many total steps there are in a process
- To reassure the user they're making progress in a long process
- To communicate the success or failure of each step in a process

## When to consider something else
- Navigation for situations when users do not need to complete all steps of a process
- For general page-to-page navigation, use components like the [header]({{< ref "/components/navigation/header.md" >}}) or [breadcrumb navigation]({{< ref "/components/navigation/breadcrumb.md">}})
- For normal lists, use [ordered or unordered lists]({{< ref "/components/page-content/lists.md" >}})

## Implementation notes
- Use `aria-hidden` to hide `.rvt_steps__indicator` elements from screen readers if the `.rvt_steps__label` element already has the number of step in it
- Add the `aria-current="step"` attribute to a `.rvt-steps__item-content` element to indicate the current step
- Keep labels short (1-2 words)
- Step markers for completed steps should function as links to those completed steps
- Avoid providing users with links to future steps before they have completed the current step