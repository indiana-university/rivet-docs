---
title: Badges
description: Use badges to call out or label important information in your UI.
status: "Beta"
---
## When to use
- To label new content on a page
- To help users discover important information changes in your UI

## When to consider something else
- When there is a critical error that requires the users attention to fix use an page-level alert instead
- Avoid using more than one badge per page as it will dimiss the affect of calling out important parts of the UI

## Default Badges
{{< example lang="html" >}}<span class="rvt-badge">Base</span>
<span class="rvt-badge rvt-badge--action">Action</span>
<span class="rvt-badge rvt-badge--success">Success</span>
<span class="rvt-badge rvt-badge--warning">Warning</span>
<span class="rvt-badge rvt-badge--error">Error</span>
{{< /example >}}

## Badge sizing
The font size of the Rivet badges is set using a percentage value so that they will inherit the font size property of their containers. For example, if you wanted to use a badge inside of an element already using Rivet's type scale utilities, the badge's font size will adjust accordingly.

{{< example lang="html" >}}<h1 class="rvt-ts-41">Heading 1 <span class="rvt-badge rvt-badge--success">Badge</span></h1>
<h2 class="rvt-m-top-lg rvt-ts-32">Heading 2 <span class="rvt-badge rvt-badge--warning">Badge</span></h2>
<h3 class="rvt-m-top-lg rvt-ts-26">Heading 3 <span class="rvt-badge rvt-badge--error">Badge</span></h3>
{{< /example >}}


## Accessibility
Badges are visual indicators that the information is important, but visual queues are insufficient for those using assistive technologies, such as screen readers. The colors of the badge alone will not be enough to convey meaning to screen readers. Use the `.sr-only` utility class to add sufficient information with the text of the badge. Adding additional text to the badge and visually hiding the additional text is a good user experience.
