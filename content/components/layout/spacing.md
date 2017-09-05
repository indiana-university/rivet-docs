---
title: "Spacing"
description: "A robust set of responsive spacing utilites to help fine-tune your layout."
requiresJs: false
status: "Alpha"
---
## About spacing
To maintain consistent spacing between components and to help create a sense of vertical rhythm, we have created a spacing system based on `.5rem` (8px) unit. Margins and padding can be applied using a set of CSS utility classes to add or remove margin and padding from any element.

### Spacing examples
<table class="m-top-lg">
    <caption class="sr-only">Rivet spacing utilities</caption>
    <thead>
        <th>CSS suffix</th>
        <th>rem</th>
        <th>px</th>
        <th>Example</th>
    </thead>
    <tbody>
        <tr>
            <td><code>-xxs</code></td>
            <td>.25rem</td>
            <td>4px</td>
            <td>
                <div class="rvtd-space-example p-all-xxs">
                    <p class="rvtd-space-example-inner m-all-remove p-all-xs">Extra extra small</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><code>-xs</code></td>
            <td>.5rem</td>
            <td>8px</td>
            <td>
                <div class="rvtd-space-example p-all-xs">
                    <p class="rvtd-space-example-inner m-all-remove p-all-xs">Extra small</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><code>-sm</code></td>
            <td>1rem</td>
            <td>16px</td>
            <td>
                <div class="rvtd-space-example p-all-sm">
                    <p class="rvtd-space-example-inner m-all-remove p-all-xs">Small</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><code>-md</code></td>
            <td>1.5rem</td>
            <td>24px</td>
            <td>
                <div class="rvtd-space-example p-all-md">
                    <p class="rvtd-space-example-inner m-all-remove p-all-xs">Medium</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><code>-lg</code></td>
            <td>2rem</td>
            <td>32px</td>
            <td>
                <div class="rvtd-space-example p-all-lg">
                    <p class="rvtd-space-example-inner m-all-remove p-all-xs">Large</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><code>-xl</code></td>
            <td>2.5rem</td>
            <td>40px</td>
            <td>
                <div class="rvtd-space-example p-all-xl">
                    <p class="rvtd-space-example-inner m-all-remove p-all-xs">Extra large</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><code>-xxl</code></td>
            <td>3rem</td>
            <td>48px</td>
            <td>
                <div class="rvtd-space-example p-all-xxl">
                    <p class="rvtd-space-example-inner m-all-remove p-all-xs">Extra extra large</p>
                </div>
            </td>
        </tr>
    </tbody>
</table>

## Implementation

The CSS classes for the spacing system use the following conventions:

- `m`, `p` = margin, padding
- `top`, `right`, `bottom`, `left` = the top, right, bottom, left side of the element
- `xs` = Extra Small (8px/.5rem)
- `sm` = Small (16px/1rem)
- `md` = Medium (24px/1.5rem)
- `lg` = Large (32px/2rem)
- `xl` = Extra large (40px/2.5rem)
- `xxl` = Extra extra large (48px/3rem)

So the class `.m-top-sm` would add 16px/1rem of margin on all screen sizes to the top of the element it was applied to.

### Responsive spacing

Each spacing utility class also comes with a set of modifiers that allow you to adjust spacing at different screen sizes. Take the following `div`

{{< code >}}<div class="p-bottom-sm p-bottom-lg--md-up">
    ...
</div>
{{< /code >}}

With these spacing classes applied, it would have 16px/1rem of bottom padding at all screen sizes and 32px/2rem of bottom padding on large screens (940px wide) and up.

### Spacing modifiers

All spacing utilities described above have the following responsive modifiers available to them:

- `--sm-up` - screens **480–740px** and wider
- `--md-up` - screens **740–1080px** and wider
- `--lg-up` - screens **1080–1260px** and wider
- `--xl-up` - screens **1260–1400px** and wider
- `--xxl-up` - screens **1400px** and wider

### All spacing
Using the size conventions above you could apply the class `.p-all-xl` to add an Extra large amount (40px/2.5rem) to both the top and bottom of an element.

### No spacing
If you want to get crazy and remove all margin or padding from and element you could use the class `.m-all-remove`, or `.p-all-remove`.
