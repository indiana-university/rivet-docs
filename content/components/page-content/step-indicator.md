---
title: "Step Indicator"
asOf: 1.6.0
description: "Show the user the current step in a multi-step process"
status: "Beta"
---

{{< alert variant="info" title="New in Rivet 1.6.0" >}}
The step indicator is new as of `1.6.0`. If you need help updating to `1.6.0`, see our [instructions for updating Rivet](/components/#updating-the-rivet-npm-package").
{{< /alert >}}

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