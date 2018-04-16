---
title: Badges
description: Use badges to call out or label important information in your UI.
status: "Ready"
---
## Default Badges
{{< example lang="html" >}}<span class="rvt-badge">Base</span>
<span class="rvt-badge rvt-badge--action">Action</span>
<span class="rvt-badge rvt-badge--success">Success</span>
<span class="rvt-badge rvt-badge--warning">Warning</span>
<span class="rvt-badge rvt-badge--error">Error</span>
{{< /example >}}

## Secondary badges
{{< example lang="html" >}}<span class="rvt-badge rvt-badge--secondary">Base</span>
<span class="rvt-badge rvt-badge--action-secondary">Action</span>
<span class="rvt-badge rvt-badge--success-secondary">Success</span>
<span class="rvt-badge rvt-badge--warning-secondary">Warning</span>
<span class="rvt-badge rvt-badge--error-secondary">Error</span>
{{< /example >}}

## When to use
- To label new content on a page
- To help users discover important information changes in your UI

## When to consider something else
- When there is a critical error that requires the users attention to fix use an page-level alert instead
- Avoid using more than one badge per page as it will dimiss the affect of calling out important parts of the UI

## Accessibility
Badges are visual indicators that the information is important, but visual queues are insufficient for those using assistive technologies, such as screen readers. The colors of the badge alone will not be enough to convey meaning to screen readers. Use the `.sr-only` utility class to add sufficient information with the text of the badge. Adding additional text to the badge and visually hiding the additional text is a good user experience.
