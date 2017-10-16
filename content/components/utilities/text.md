---
title: "Text"
description: "The Rivet text utilities make it easy to style text"
status: "Alpha"
---
## Font weight
You can use the rivet text utilities to change the `font-weight` property of text. The available utility classes are:

- `.rvt-text-regular`
- `.rvt-text-bold`

{{< example lang="html" >}}<p class="rvt-text-regular">Regular text utilitiy</p>
<p class="rvt-text-bold">Bold Text utilitiy</p>
{{< /example >}}

## Text alignment
Use the text alignment utilities to change the `text-align` property of any text. The available text alignment utilities are:

- `.rvt-text-left`
- `.rvt-text-center`
- `.rvt-text-right`

{{< example lang="html" >}}<p class="rvt-text-left">Left-aligned text utilitiy</p>
<p class="rvt-text-center">Center-aligned text utilitiy</p>
<p class="rvt-text-right">Right-aligned text utilitiy</p>
{{< /example >}}

## Uppercase
The `.rvt-text-uppercase` utility class sets the `text-transform` CSS property to `uppercase` and adds a small amount of `letter-spacing` [to improve readablility](http://webtypography.net/2.1.6).

{{< example lang="html" >}}<p class="rvt-text-uppercase">Uppercase text utilitiy</p>
{{< /example >}}
