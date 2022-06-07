---
title: "Visibility"
asOf: 1.0.0
description: "Use Rivet's visibility utilities to hide content in a responsive and accessible way."
status: "Ready"
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. [View the visibility utilities documentation on the Rivet 2 website](https://v2.rivet.iu.edu/docs/utilities/visibility/).
{{< /alert >}}

## Screen reader only
Use the `.rvt-sr-only` utility class to visually hide content, but still leave it accessible to screen readers.

{{< example lang="html" >}}<h1 class="rvt-ts-32">This text is visible <span class="rvt-sr-only">but, this text is visually hidden and still accessible to screen readers.</span></h1>
{{< /example >}}

### Visually hidden labels example
Another practical example of when to use the the `.rvt-sr-only` utility is when you need to hide a form label from visual users, but still want it to be available to those using assistive technology. This can be helpful when you are implementing patterns like a search bar and need to conserve space.

{{< example lang="html" >}}<label for="search" class="rvt-sr-only">Search</label>
<div class="rvt-input-group">
    <input class="rvt-input-group__input" type="text" id="search">
    <div class="rvt-input-group__append">
        <button class="rvt-button">Search</button>
    </div>
</div>
{{< /example >}}

{{< alert variant="info" title="Other ways to hide content" >}}
Visit the User Experience Office website to learn more about [other ways to hide page content](https://ux.iu.edu/accessibility/hiding-content/) beyond those described on this page.
{{< /alert >}}

## Hide down responsive utilities
The `rvt-hide-*-down`responsive display utilities start out visible on any screen size above the largest breakpoint (1400px) and will **hide content as the screen size becomes smaller**.

Resize your browser window to see how the `rvt-hide-*-down` utilities work.

{{< example lang="html" >}}<dl>
    <dt>.rvt-hide-sm-down</dt>
    <dd class="rvt-hide-sm-down">Hidden at <strong>small breakpoint</strong> down</dd>
    <dt>.rvt-hide-md-down</dt>
    <dd class="rvt-hide-md-down">Hidden at <strong>medium breakpoint</strong> down</dd>
    <dt>.rvt-hide-lg-down</dt>
    <dd class="rvt-hide-lg-down">Hidden at <strong>large breakpoint</strong> down</dd>
    <dt>.rvt-hide-xl-down</dt>
    <dd class="rvt-hide-xl-down">Hidden at <strong>extra large breakpoint</strong> down</dd>
    <dt>.rvt-hide-xxl-down</dt>
    <dd class="rvt-hide-xxl-down">Hidden at <strong>extra extra large breakpoint</strong> down</dd>
</dl>
{{< /example >}}

## Hide up responsive utilities
The `rvt-hide-*-up` responsive display utilities start out visible on small screens and will hide content as the screen **size becomes larger**.
{{< example lang="html" >}}<dl>
    <dt class="color-midnight">.rvt-hide-sm-up</dt>
    <dd class="rvt-hide-sm-up">Hidden at <strong>small breakpoint</strong> up</dd>
    <dt class="color-midnight">.rvt-hide-md-up</dt>
    <dd class="rvt-hide-md-up">Hidden at <strong>medium breakpoint</strong> up</dd>
    <dt class="color-midnight">.rvt-hide-lg-up</dt>
    <dd class="rvt-hide-lg-up">Hidden at <strong>large breakpoint</strong> up</dd>
    <dt class="color-midnight">.rvt-hide-xl-up</dt>
    <dd class="rvt-hide-xl-up">Hidden at <strong>extra large breakpoint</strong> up</dd>
    <dt class="color-midnight">.rvt-hide-xxl-up</dt>
    <dd class="rvt-hide-xxl-up">Hidden at <strong>extra extra large breakpoint</strong> up</dd>
</dl>
{{< /example >}}