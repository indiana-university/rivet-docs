---
title: "Step Indicator"
asOf: 1.6.0
description: "Show the user the current step in a multi-step process"
status: "Alpha"
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

## Step indicator icons

You can show an icon in the `.rvt-steps__indicator` element instead of a number.

Make sure the `svg` element has the `aria-hidden="true"` attribute to hide it from screen readers.

{{< example lang="html" >}}<ol class="rvt-steps">
  <li class="rvt-steps__item">
    <a href="#" class="rvt-steps__item-content">
      <span class="rvt-steps__label">Personal information</span>
      <span class="rvt-steps__indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" d="M6.72,13l-.48-.36-3-3A1,1,0,0,1,4.71,8.29l2.11,2.12,4.33-6.94a1,1,0,0,1,1.7,1.06L7.64,12.87Z"/>
        </svg>
      </span>
    </a>
  </li>
  <li class="rvt-steps__item">
    <span class="rvt-steps__item-content" aria-current="step">
      <span class="rvt-steps__label">Records &amp; transcripts</span>
      <span class="rvt-steps__indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" d="M14.62,4.19,11.74,1.34a1.1,1.1,0,0,0-1.55,0L0,11.62,0,16l4.45,0L14.64,5.73A1.1,1.1,0,0,0,14.62,4.19ZM3.62,14H2V12.44l6-6L9.58,8ZM11,6.57,9.4,5,11,3.4,12.57,5Z"/>
        </svg>
      </span>
    </span>
  </li>
  <li class="rvt-steps__item">
    <span class="rvt-steps__item-content">
      <span class="rvt-steps__label">Confirmation</span>
      <span class="rvt-steps__indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" d="M13.5,3H2.5A1.5,1.5,0,0,0,1,4.5v8A1.5,1.5,0,0,0,2.5,14h11A1.5,1.5,0,0,0,15,12.5v-8A1.5,1.5,0,0,0,13.5,3ZM11.41,5,8,7.77,4.59,5ZM3,12V6.29L7.11,9.62l.12.08a1.5,1.5,0,0,0,1.54,0L13,6.29V12Z"/>
        </svg>
      </span>
    </span>
  </li>
</ol>
{{< /example >}}

## Step status colors

To help communicate to the user the status of each step in the process, you can add the following modifier classes to a `.rvt-steps__indicator` element:

- `.rvt-steps__indicator--success`
- `.rvt-steps__indicator--warning`
- `.rvt-steps__indicator--danger`

Put text hidden by the `.rvt-sr-only` class inside the `.rvt-steps__indicator` element to communicate a step's status to users of assistive technologies who may not be able to see the color cue.

{{< example lang="html" >}}<ol class="rvt-steps">
  <li class="rvt-steps__item">
    <a href="#" class="rvt-steps__item-content">
      <span class="rvt-steps__label">Personal information</span>
      <span class="rvt-steps__indicator rvt-steps__indicator--success">
        <span class="rvt-sr-only">Step completed</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" d="M6.72,13l-.48-.36-3-3A1,1,0,0,1,4.71,8.29l2.11,2.12,4.33-6.94a1,1,0,0,1,1.7,1.06L7.64,12.87Z"/>
        </svg>
      </span>
    </a>
  </li>
  <li class="rvt-steps__item">
    <a href="#" class="rvt-steps__item-content">
      <span class="rvt-steps__label">Records &amp; transcripts</span>
      <span class="rvt-steps__indicator rvt-steps__indicator--warning">
        <span class="rvt-sr-only">Step has errors that need to be corrected</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" d="M14.62,4.19,11.74,1.34a1.1,1.1,0,0,0-1.55,0L0,11.62,0,16l4.45,0L14.64,5.73A1.1,1.1,0,0,0,14.62,4.19ZM3.62,14H2V12.44l6-6L9.58,8ZM11,6.57,9.4,5,11,3.4,12.57,5Z"/>
        </svg>
      </span>
    </a>
  </li>
  <li class="rvt-steps__item">
    <span class="rvt-steps__item-content" aria-current="step">
      <span class="rvt-steps__label">Confirmation</span>
      <span class="rvt-steps__indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" d="M13.5,3H2.5A1.5,1.5,0,0,0,1,4.5v8A1.5,1.5,0,0,0,2.5,14h11A1.5,1.5,0,0,0,15,12.5v-8A1.5,1.5,0,0,0,13.5,3ZM11.41,5,8,7.77,4.59,5ZM3,12V6.29L7.11,9.62l.12.08a1.5,1.5,0,0,0,1.54,0L13,6.29V12Z"/>
        </svg>
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
- For general page-to-page navigation, use components like the [header]({{< ref "/components/navigation/header.md" >}}) and [breadcrumb navigation]({{< ref "/components/navigation/breadcrumb.md">}})
- For navigation between the pages of a specific subsection, use a [menu]({{< ref "/components/navigation/menu.md" >}})
- For normal lists, use [ordered or unordered lists]({{< ref "/components/page-content/lists.md" >}})

## Implementation notes
- Keep labels short (1-2 words)
- Step markers for completed steps should function as links to those completed steps
- Avoid providing users with links to future steps before they have completed the current step

## Accessibility notes
- A step marker must always have a `.rvt-steps__label` element that contains plain text, regardless of the contents of the `.rvt-steps__indicator` element
- Add the `aria-current="step"` attribute to a `.rvt-steps__item-content` element to indicate the current step
- Use the `aria-hidden="true"` attribute to hide `.rvt_steps__indicator` elements from screen readers if the `.rvt_steps__label` element already has the number of step in it, like "Step 3"
- Put text hidden by the `.rvt-sr-only` class inside the `.rvt-steps__indicator` element to communicate a step's status to users of assistive technologies
