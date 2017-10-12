---
title: "Text"
description: "The Rivet text utilities make it easy to style text"
status: "Alpha"
---
## Font weight
You can use the rivet text utilities to change the `font-weight` property of text. The available utility classes are:

- `.text-regular`
- `.text-bold`

{{< example lang="html" >}}<p class="text-regular">Regular text utilitiy</p>
<p class="text-bold">Bold Text utilitiy</p>
{{< /example >}}

## Text alignment
Use the text alignment utilities to change the `text-align` property of any text. The available text alignment utilities are:

- `.text-left`
- `.text-center`
- `.text-right`

{{< example lang="html" >}}<p class="text-left">Left-aligned text utilitiy</p>
<p class="text-center">Center-aligned text utilitiy</p>
<p class="text-right">Right-aligned text utilitiy</p>
{{< /example >}}

## Uppercase
The `.text-uppercase` utility class sets the `text-transform` CSS property to `uppercase` and adds a small amount of `letter-spacing` [to improve readablility](http://webtypography.net/2.1.6).

{{< example lang="html" >}}<p class="text-uppercase">Uppercase text utilitiy</p>
{{< /example >}}
