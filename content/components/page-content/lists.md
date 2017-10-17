---
title: "Lists"
description: "Lists are used to group and organize collections of content."
status: "Beta"
---

## Unordered list
{{< example lang="html" >}}<ul>
    <li>List Item One</li>
    <li>List Item Two</li>
    <li>List Item Three</li>
    <li>List Item Four</li>
</ul>
{{< /example >}}

## Ordered list
{{< example lang="html" >}}<ol>
    <li>List Item One</li>
    <li>List Item Two</li>
    <li>List Item Three</li>
    <li>List Item Four</li>
</ol>
{{< /example >}}

## Plain list
You can use the helper class `.plain-list` to remove list formatting for display purposes.

{{< example lang="html" >}}<ul class="rvt-plain-list">
    <li>List Item One</li>
    <li>List Item Two</li>
    <li>List Item Three</li>
    <li>List Item Four</li>
</ul>
{{< /example >}}

## Definition list
{{< example lang="html" >}}<dl>
   <dt>Definition list item one</dt>
   <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
   <dd>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
   <dt>Definition list item two</dt>
   <dd>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
   <dt>Definition list item three</dt>
   <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
</dl>
{{< /example >}}

## Usability notes
- Use unordered lists `<ul>` when your collection has no specific order.
- Use ordered lists `<ol>` when you want to display content in some specific order like ranking, or a series of steps in a process.
- Use definition lists to display groups of terms with descriptions like a glossary or other metadata.

## Microcopy notes
Follow the [IT Communications Office’s style guide](https://uits.iu.edu/itco/style-basics) here:

- Maintain a parallel structure. If you begin a list item with a verb, all others should begin with a verb too.
- Don’t include punctuation unless a complete sentence follows in the same bullet (like in the sentence above)

## Resources
- [W3C Docs](https://www.w3.org/TR/WCAG20-TECHS/H48.html) about all the lists.
