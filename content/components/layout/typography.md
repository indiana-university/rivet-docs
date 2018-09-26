---
title: "Typography"
description: "Use the Rivet type scale to apply consistent typographic design to your application."
requiresJs: false
status: "Ready"
---

## About the type scale
Typography is the core component of any interface. Rivet uses a defined [Major Second](http://type-scale.com/?size=16&scale=1.125&text=A%20Visual%20Type%20Scale&webfont=Libre+Baskerville&font-family=%27Libre%20Baskerville%27,%20serif&font-weight=400&font-family-headers=&font-weight-headers=inherit&background-color=white&font-color=#333) type scale that has been rounded to the nearest whole pixel value. Using sizes from this scale will help create a hierarchy and consistency throughout your application.

## Type scale examples

<table class="rvt-m-top-lg">
    <caption class="rvt-sr-only">Rivet type scale</caption>
    <thead>
        <th>Helper Class</th>
        <th>rem</th>
        <th>px</th>
        <th>Actual size</th>
    </thead>
    <tbody>
        <tr>
            <td><code>.rvt-ts-12, .rvt-ts-xxs</code></td>
            <td>.75rem</td>
            <td>12px</td>
            <td class="rvt-ts-12">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-14, .rvt-ts-xs</code></td>
            <td>.875rem</td>
            <td>14px</td>
            <td class="rvt-ts-14">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-base, .rvt-ts-16</code></td>
            <td>1rem</td>
            <td>16px</td>
            <td class="rvt-ts-base">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-18</code></td>
            <td>1.125rem</td>
            <td>18px</td>
            <td class="rvt-ts-18">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-20, .rvt-ts-sm</code></td>
            <td>1.25rem</td>
            <td>20px</td>
            <td class="rvt-ts-20">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-23</code></td>
            <td>1.4375rem</td>
            <td>23px</td>
            <td class="rvt-ts-23">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-26, .rvt-ts-md</code></td>
            <td>1.625rem</td>
            <td>26px</td>
            <td class="rvt-ts-26">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-29</code></td>
            <td>1.8125rem</td>
            <td>29px</td>
            <td class="rvt-ts-29">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-32, .rvt-ts-lg</code></td>
            <td>2rem</td>
            <td>32px</td>
            <td class="rvt-ts-32">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-36</code></td>
            <td>2.25rem</td>
            <td>36px</td>
            <td class="rvt-ts-36">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-41, .rvt-ts-xl</code></td>
            <td>2.5625rem</td>
            <td>41px</td>
            <td class="rvt-ts-41">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-46</code></td>
            <td>2.875rem</td>
            <td>46px</td>
            <td class="rvt-ts-46">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.rvt-ts-52, .rvt-ts-xxl</code></td>
            <td>3.25rem</td>
            <td>52px</td>
            <td class="rvt-ts-52">Fulfilling the promise</td>
        </tr>
    </tbody>
</table>

## Typeface
Benton Sans is an official IU font and is available for free to all IU schools, departments, offices, and affiliated units.

## Font weight
Font weight can be used to emphasize different parts of your interface and help enforce visual hierarchy. Rivet uses Benton Sans Regular and Benton Sans Bold font weights.

## Implementation notes
Try to keep the number of different font sizes you use in your application to a minimum. The size of fonts depends on the design of you application, but picking a handful of font sizes and sticking to them makes it easier to maintain consistency throughout the interface.

### Type scale aliases
To make it easier to keep type sizes to a minimum we have create a few CSS utility classes that follow the same naming convention as the [Rivet spacing utilities](../spacing). These type scale alias utilities are mapped directly to type sizes in the the Rivet type scale [shown in the table above](#type-scale-examples).

- `.rvt-ts-xxs`
- `.rvt-ts-xs`
- `.rvt-ts-sm`
- `.rvt-ts-md`
- `.rvt-ts-lg`
- `.rvt-ts-xl`
- `.rvt-ts-xxl`

{{< example lang="html" >}}<div class="rvt-ts-xxs">Fulfilling the promise</div>
<div class="rvt-ts-xs">Fulfilling the promise</div>
<div class="rvt-ts-sm">Fulfilling the promise</div>
<div class="rvt-ts-md">Fulfilling the promise</div>
<div class="rvt-ts-lg">Fulfilling the promise</div>
<div class="rvt-ts-xl">Fulfilling the promise</div>
<div class="rvt-ts-xxl">Fulfilling the promise</div>
{{< /example >}}

### Responsive type scale
Each type scale helper class comes with a set of modifiers that allow you adjust font-size at different screen sizes. Here's an example.

{{< code >}}<h1 class="rvt-ts-20 rvt-ts-32-md-up">Profile page</h1>
<p class="rvt-ts-14">The profile page is where you can select your personal settings.</p>
{{< /code >}}

Given the markup above, the `h1` would have a font size of 1.25rem/20px on all screens small and larger, and 2.25rem/36px on medium screens(740px wide) and larger.

The responsive type scale CSS classes use the following conventions:

- `-sm-up` - screens **480–740px** and wider
- `-md-up` - screens **740–1080px** and wider
- `-lg-up` - screens **1080–1260px** and wider
- `-xl-up` - screens **1260–1400px** and wider
- `-xxl-up` - screens **1400px** and wider
