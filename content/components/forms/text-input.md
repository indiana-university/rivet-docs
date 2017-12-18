---
title: "Text inputs"
description: "Text inputs are the basic building blocks forms. They allow users to enter various types of data into web-based forms."
status: "Beta"
---

## When to use
Use a text input for information that will only take up one line: a name, phone number, city, etc. Use textareas for information that includes multiple sentences or lines: descriptions, issues, proposals, etc.

## When to consider something else
- Don’t ask the user to describe anything in a text input, which can hide text from view if the line is too long.
- Similarly, don’t ask users to copy large amounts of information from a document and paste it into a textarea. If possible, use a file input, and let them upload those documents instead.

## Text input example

{{< example lang="html" >}}<label for="demo-1">Text Input</label>
<input type="text" id="demo-1" aria-describedby="demo-1-note">
<small id="demo-1-note" class="rvt-display-block rvt-m-bottom-md">This is a note about this field.</small>

<label for="demo-2">Text Input (disabled)</label>
<input type="text" id="demo-2" disabled>
{{< /example >}}

## Textarea example

{{< example lang="html" >}}<label for="demo-3">Textarea</label>
<textarea id="demo-3" class="rvt-m-bottom-md"></textarea>

<label for="demo-4">Textarea (disabled)</label>
<textarea id="demo-4" class="rvt-m-bottom-md" disabled></textarea>
{{< /example >}}


## Microcopy notes
Keep labels clear and concise―around two to three words and never more than eight. But don’t be afraid to be descriptive or use a human voice. “Describe the problem you’re having” is clearer and kinder than “Problem description.”

## Accessibility notes
- Every text input must have a `<label>` element associated with it. Placeholder (`placeholder=`) text is not a substitute for using a label element and most browsers render placeholder text at inaccessible [contrast ratios](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).
- If you need to visually hide a label use the Rivet [screen reader only utility class.](https://rivet.uits.iu.edu/components/utilities/display/#screen-reader-only) That way the label text will still be accessible to screenreaders.
- Avoid labeling text inputs implicitly i.e. wrapping inputs with label. Assistive technologies understand explicitly labeled (matching `for` and `id`) attributes elements better.

## Resources
[Use the copy as a guide, not a crutch](https://www.smashingmagazine.com/2013/06/five-ways-prevent-bad-microcopy/#3-use-copy-as-a-guide-not-a-crutch)
