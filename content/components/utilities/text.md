---
title: "Text"
asOf: 1.0.0
description: "The Rivet text utilities make it easy to style text."
status: "Ready"
---
## Font weight
You can use the rivet text utilities to change the `font-weight` property of text. The available utility classes are:

- `.rvt-text-regular`
- `.rvt-text-bold`

{{< example lang="html" >}}<strong class="rvt-text-regular">Regular text utilitiy</strong>
<div class="rvt-text-bold">Bold Text utility</div>
{{< /example >}}

## Line height
In Rivet the `line-height` of the `<body>` element is set to `1.5` globally for better legibility. This can sometimes make larger text (like headings or titles) appear as if the line-height is too tall. For that reason, we created a text utility called `.rvt-lh-title` that you can use to give larger text a smaller `line-height`.

{{< example lang="html" >}}<h3 class="rvt-ts-36 rvt-lh-title">This large text could sometimes end up in a space that causes it to run on to two lines.</h3>
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

## No break
If you need to stop text from wrapping, for example next to radio buttons or checkboxes, you can use the `.rvt-text-nobr` utility.

{{< example lang="html" >}}<form>
    <fieldset>
        <legend class="sr-only">Checkbox list</legend>
        <ul class="rvt-plain-list">
            <li>
                <input type="checkbox" name="checkbox-demo" id="checkbox-3">
                <label for="checkbox-3" class="rvt-m-right-sm rvt-text-nobr">The label for this checkbox is quite long, but will not break.</label>
            </li>
            <li>
                <input type="checkbox" name="checkbox-demo" id="checkbox-4">
                <label for="checkbox-4">Option two</label>
            </li>
        </ul>
    </fieldset>
</form>
{{< /example >}}
