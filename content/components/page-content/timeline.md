---
title: "Timeline"
asOf: 1.7.0
description: "Show users chronologically ordered information"
status: "Alpha"
---

{{< alert variant="info" title="New in Rivet 1.7.0" >}}
The timeline is new as of `1.7.0`. If you need help updating to `1.7.0`, see our [instructions for updating Rivet](/components/#updating-the-rivet-npm-package").
{{< /alert >}}

The timeline is a new component in Rivet 1.7.0. If you encounter any issues, [please let us know](https://github.com/indiana-university/rivet-source/issues/new?template=bug_report.md&title=Timeline+component) so we can improve!


Use the timeline component to help order chronologically relevant information in a visually meaningful way.

## Basic timeline

{{< example lang="html" >}}
<div class="rvt-container rvt-container--senior">
    <div class="rvt-grid">
        <div class="rvt-grid__item rvt-timeline">
            <div class="rvt-timeline__item">
                <div class="rvt-timeline__marker" aria-hidden="true">
                </div>
                <div class="rvt-timeline__content">
                    <h3 class="rvt-timeline__heading">Sample Item</h3>
                    <span class="rvt-timeline__date">Spring 2019</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nulla ante. Suspendisse potenti. Donec efficitur, sem vitae dignissim viverra, nunc purus tempus nisi, feugiat ullamcorper tellus urna ut dui. Suspendisse potenti.</p>
                </div>
            </div>
            <div class="rvt-timeline__item">
                <div class="rvt-timeline__marker" aria-hidden="true">
                </div>
                <div class="rvt-timeline__content">
                    <h3 class="rvt-timeline__heading">Sample Item 2</h3>
                    <span class="rvt-timeline__date">Summer 2019</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nulla ante. Suspendisse potenti. Donec efficitur, sem vitae dignissim viverra, nunc purus tempus nisi, feugiat ullamcorper tellus urna ut dui. Suspendisse potenti.</p>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

{{< alert variant="info" title="Timeline headings" >}}
Elements featuring the `.rvt-timeline__heading` class are intended to be replaceable with the appropriate heading level for semantic HTML context. In the example above, `h3` elements are used; however, `h2`, `h4`, etc. may be more appropriate for your use case.
{{< /alert >}}


## Right-aligned timeline

Add the `.rvt-timeline--right` class to align the timeline to the right side of the page.

{{< example lang="html" >}}
<div class="rvt-container rvt-container--senior">
    <div class="rvt-grid">
        <div class="rvt-grid__item rvt-timeline rvt-timeline--right">
            <div class="rvt-timeline__item">
                <div class="rvt-timeline__marker" aria-hidden="true">
                </div>
                <div class="rvt-timeline__content">
                    <h3 class="rvt-timeline__heading">Sample Item</h3>
                    <span class="rvt-timeline__date">Spring 2019</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nulla ante. Suspendisse potenti. Donec efficitur, sem vitae dignissim viverra, nunc purus tempus nisi, feugiat ullamcorper tellus urna ut dui. Suspendisse potenti.</p>
                </div>
          </div>
          <div class="rvt-timeline__item">
              <div class="rvt-timeline__marker"  aria-hidden="true">
              </div>
              <div class="rvt-timeline__content">
                  <h3 class="rvt-timeline__heading">Sample Item 2</h3>
                  <span class="rvt-timeline__date">Summer 2019</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nulla ante. Suspendisse potenti. Donec efficitur, sem vitae dignissim viverra, nunc purus tempus nisi, feugiat ullamcorper tellus urna ut dui. Suspendisse potenti.</p>
              </div>
          </div>
        </div>
    </div>
</div>
{{< /example >}}

## Centered timeline

Add the `.rvt-timeline--center` class to center your timeline horizontally. Centered timeline items default to appearing on the left-side of the line. To switch an item to appearing on the right, add the `.rvt-timeline__item--right` class to an item.

{{< example lang="html" >}}
<div class="rvt-container rvt-container--senior">
    <div class="rvt-grid">
        <div class="rvt-grid__item rvt-timeline rvt-timeline--center">
            <div class="rvt-timeline__row">
                <div class="rvt-timeline__item">
                    <div class="rvt-timeline__marker" aria-hidden="true">
                    </div>
                    <div class="rvt-timeline__content">
                        <h3 class="rvt-timeline__heading">Sample Item</h3>
                        <span class="rvt-timeline__date">Spring 2019</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nulla ante. Suspendisse potenti. Donec efficitur, sem vitae dignissim viverra, nunc purus tempus nisi, feugiat ullamcorper tellus urna ut dui. Suspendisse potenti.</p>
                    </div>
                </div>
            </div>
            <div class="rvt-timeline__row">
                <div class="rvt-timeline__item rvt-timeline__item--right">
                    <div class="rvt-timeline__marker" aria-hidden="true">
                    </div>
                    <div class="rvt-timeline__content">
                        <h3 class="rvt-timeline__heading">Sample Item 2</h3>
                        <span class="rvt-timeline__date">Summer 2019</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nulla ante. Suspendisse potenti. Donec efficitur, sem vitae dignissim viverra, nunc purus tempus nisi, feugiat ullamcorper tellus urna ut dui. Suspendisse potenti.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## External date labels

The `.rvt-timeline__date--label` class can be added to labels to make them appear on the opposite side of the timeline from the main pieces of content. This only works for certain screen sizes, but is compatible with all three alignment options.

The external labels are set to a width of 10rem in order to create a uniform appearance. To adjust this, use Rivet [width utility classes](https://rivet.iu.edu/components/utilities/width/) on the `span` with the `.rvt-timeline__date--label` class.

{{< alert variant="warning" title="Intended usage" >}}
The timeline component is intended to chronologically order relevant information in a visually meaningful way. As a result, the external labels are intended for **small amounts of text**, such as dates, seasons, or other temporal information.
{{< /alert >}}

{{< example lang="html" timeline="true" >}}
<div class="rvt-container rvt-container--senior">
    <div class="rvt-grid">
        <div class="rvt-grid__item rvt-timeline">
            <div class="rvt-timeline__item">
                <div class="rvt-timeline__marker" aria-hidden="true">
                </div>
                <div class="rvt-timeline__content">
                    <h3 class="rvt-timeline__heading">Sample Item</h3>
                    <span class="rvt-timeline__date  rvt-timeline__date--label">Spring 2019</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nulla ante. Suspendisse potenti. Donec efficitur, sem vitae dignissim viverra, nunc purus tempus nisi, feugiat ullamcorper tellus urna ut dui. Suspendisse potenti.</p>
                </div>
            </div>
            <div class="rvt-timeline__item">
                <div class="rvt-timeline__marker" aria-hidden="true">
                </div>
                <div class="rvt-timeline__content">
                    <h3 class="rvt-timeline__heading">Sample Item 2</h3>
                    <span class="rvt-timeline__date  rvt-timeline__date--label">Summer 2019</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nulla ante. Suspendisse potenti. Donec efficitur, sem vitae dignissim viverra, nunc purus tempus nisi, feugiat ullamcorper tellus urna ut dui. Suspendisse potenti.</p>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}