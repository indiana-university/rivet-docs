---
title: "Links"
asOf: 1.0.0
description: "Inline text links are used to navigate between documents (pages)."
status: "Ready"
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. The link component has been replaced by the [call to action](https://v2.rivet.iu.edu/docs/components/call-to-action/), [link hub](https://v2.rivet.iu.edu/docs/components/link-hub/), and [sidenav](https://v2.rivet.iu.edu/docs/components/sidenav/) components in Rivet 2.
{{< /alert >}}

## Inline links
{{< example lang="html" >}}<p class="rvt-m-top-remove"> <a href="#">This is a text link</a> on a light background.</p>
<p>This link is <a href="#" class="rvt-link-bold">Bold link</a>.</p>
{{< /example >}}

## When to use
- Navigating to a new page or view in your application
- Navigating to different web page, e.g. external documentation

## When to consider something else
- Opening or closing a modal or dialog
- Triggering a dropdown menu
- Submitting data to the server

## Microcopy & accessibility notes
Your link should always describe where it will take users. Users tend to scan text online, and elements that stand out (like links) grab attention. Clear links can help users navigate more quickly.

For example, instead of:

> [Learn more](https://kb.iu.edu/d/ataz)

Use:

> [Learn how to reset your passphrase](https://kb.iu.edu/d/ataz)

Never use a link to say “click here.” A nondescript link forces users to backtrack and read the surrounding text for more context. This is even more problematic for those who rely on screen readers, which can list links for quicker navigation. A list of “click here” isn’t helpful for anyone.

## Resources
- [Links vs. Buttons in Modern Web Applications](https://marcysutton.com/links-vs-buttons-in-modern-web-applications/)
