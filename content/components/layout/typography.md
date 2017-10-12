---
title: "Typography"
description: "Use the Rivet type scale to apply consistent typographic design to your application."
requiresJs: false
status: "Alpha"
---

## About the type scale
Typography is the core component of any interface. Rivet uses a defined [Major Second](http://type-scale.com/?size=16&scale=1.125&text=A%20Visual%20Type%20Scale&webfont=Libre+Baskerville&font-family=%27Libre%20Baskerville%27,%20serif&font-weight=400&font-family-headers=&font-weight-headers=inherit&background-color=white&font-color=#333) type scale that has been rounded to the nearest whole pixel value. Using sizes from this scale will help create a hierarchy and consistency throughout your application.

## Type scale examples

<table class="m-top-lg">
    <caption class="sr-only">Rivet type scale</caption>
    <thead>
        <th>Helper Class</th>
        <th>rem</th>
        <th>px</th>
        <th>Actual size</th>
    </thead>
    <tbody>
        <tr>
            <td><code>.ts-12</code></td>
            <td>.75rem</td>
            <td>12px</td>
            <td class="ts-12">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-14</code></td>
            <td>.875rem</td>
            <td>14px</td>
            <td class="ts-14">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-base, ts-16</code></td>
            <td>1rem</td>
            <td>16px</td>
            <td class="ts-base">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-18</code></td>
            <td>1.125rem</td>
            <td>18px</td>
            <td class="ts-18">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-20</code></td>
            <td>1.25rem</td>
            <td>20px</td>
            <td class="ts-20">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-23</code></td>
            <td>1.4375rem</td>
            <td>23px</td>
            <td class="ts-23">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-26</code></td>
            <td>1.625rem</td>
            <td>26px</td>
            <td class="ts-26">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-29</code></td>
            <td>1.8125rem</td>
            <td>29px</td>
            <td class="ts-29">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-32</code></td>
            <td>2rem</td>
            <td>32px</td>
            <td class="ts-32">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-36</code></td>
            <td>2.25rem</td>
            <td>36px</td>
            <td class="ts-36">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-41</code></td>
            <td>2.5625rem</td>
            <td>41px</td>
            <td class="ts-41">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-46</code></td>
            <td>2.875rem</td>
            <td>46px</td>
            <td class="ts-46">Fulfilling the promise</td>
        </tr>
        <tr>
            <td><code>.ts-52</code></td>
            <td>3.25rem</td>
            <td>52px</td>
            <td class="ts-52">Fulfilling the promise</td>
        </tr>
    </tbody>
</table>

## Typeface
Benton Sans is an official IU font and is available for free to all IU schools, departments, offices, and affiliated units.

## Font weight
Font weight can be used to emphasize different parts of your interface and help enforce visual hierarchy. Rivet uses Benton Sans Regular and Benton Sans Bold font weights.

## Implementation notes
Try to keep the number of different font sizes you use in your application to a minimum. The size of fonts depends on the design of you application, but picking a handful of font sizes and sticking to them makes it easier to maintain consistency throughout the interface.

For instance, you might define a limited type scale for you app of:

- `2rem` (32px) for **main headings**
- `1.625rem` (26px) for **subheadings**
- `1.125rem` (18px) for **interface copy**

{{< example lang="html" >}}<h1 class="ts-32">Main headings</h1>
<h2 class="ts-26">Subheadings</h2>
<h3 class="ts-18">Section headings</h3>
{{< /example >}}

### Responsive type scale
Each type scale helper class comes with a set of BEM-style modifiers that allow you adjust font-size at different screen sizes. Here's an example.

{{< code >}}<h1 class="ts-20 ts-32-md-up">Profile page</h1>
<p class="ts-14">The profile page is where you can select your personal settings.</p>
{{< /code >}}

Given the markup above, the `h1` would have a font size of 1.25rem/20px on all screens small and larger, and 2.25rem/36px on medium screens(740px wide) and larger.

The responsive type scale CSS classes use the following conventions:

- `-sm-up` - screens **480–740px** and wider
- `-md-up` - screens **740–1080px** and wider
- `-lg-up` - screens **1080–1260px** and wider
- `-xl-up` - screens **1260–1400px** and wider
- `-xxl-up` - screens **1400px** and wider