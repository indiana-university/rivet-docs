---
title: "Media Object"
description: "The media object is a simple layout component that can generally be used to display items in a list of content."
status: "Alpha"
---
## The Media Object component
The media object is made up of three content areas nested inside the main `.rvt-mo` wrapper:

- `.rvt-mo__prepend` (1)
- `.rvt-mo__main` (2)
- `.rvt-mo__append` (3)

{{< example lang="html" spacious="true" >}}<div class="rvt-mo rvt-mo-demo-only">
  <div class="rvt-mo__prepend">
    1
  </div>
  <div class="rvt-mo__main">
    2
  </div>
  <div class="rvt-mo__append">
    3
  </div>
</div>
{{< /example >}}

## Media object content areas
Each of the three media object areas (`.rvt-mo__prepend`, `.rvt-mo__main`, `.rvt-mo__append`) will expand to fit the content you put inside of them, but you should try to maintain an approximate ratio where the the main content area (`.rvt-mo__main`) takes up the majority of the width of the row, and the two supplemental areas (`.rvt-mo__prepend` and `.rvt-mo__append`) fill the remaining space.

## Basic Media Object
The simplest Media Object configuration consists of a wrapper and the `.rvt-mo__prepend` element. In this example we've created a simple avatar to place inside the `.rvt-mo__prepend` element.

In the example above we are using spacing utility classes to add small amounts of padding between each area of the Media Object.

{{< example lang="html" spacious="true" >}}<div class="rvt-mo">
  <div class="rvt-mo__prepend">
    <div style="width: 2rem; height: 2rem; border-radius: 999rem; overflow: hidden;" class="rvt-m-right-sm">
      <img src="https://www.fillmurray.com/g/200/200" alt="">
    </div>
  </div>
  <div class="rvt-mo__main">
    <a href="#" class="rvt-link-bold rvt-ts-18">Rivet 1.2.0 is now available!</a>
    <div class="rvt-ts-14">Updated Sept. 24 by <strong>bmacklin</strong></div>
  </div>
</div>
{{< /example >}}

## Complex objects
You can also build more complex objects using the `.rvt-mo__prepend` element to add a control for selecting rows, and the `.rvt-mo__append` element for adding additional info/controls.

{{< example lang="html" spacious="true" >}}<div class="rvt-mo">
  <div class="rvt-mo__prepend">
    <input id="check-1" type="checkbox" aria-describedby="option-1-title">
    <label for="check-1">
      <span class="rvt-sr-only">Select this item</span>
    </label>
  </div>
  <div class="rvt-mo__main">
    <div href="#" class="rvt-text-bold rvt-ts-18" id="option-1-title">Rivet 1.2.0 is now available!</div>
    <div>
      <span class="rvt-ts-14">Updated Sept. 24 by bmacklin</span>
      <span class="rvt-badge">Updated</span>
    </div>
  </div>
  <div class="rvt-mo__append">
    <div class="rvt-dropdown">
      <button class="rvt-button rvt-button--small rvt-button--plain" type="button" data-dropdown-toggle="dropdown-1"
        aria-haspopup="true" aria-expanded="false">
        <span class="rvt-sr-only">Application menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <g fill="currentColor">
            <circle cx="8" cy="8" r="2"></circle>
            <circle cx="14" cy="8" r="2"></circle>
            <circle cx="2" cy="8" r="2"></circle>
          </g>
        </svg>
      </button>
      <div class="rvt-dropdown__menu rvt-dropdown__menu--right" id="dropdown-1" role="menu" aria-hidden="true">
        <button role="menuitemradio">Notify all</button>
        <button role="menuitemradio" aria-checked="true">Notify admins</button>
        <button role="menuitemradio">Notify contributors</button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Combined with the Rivet Box Component
Combining the Media Object component with the [Box component]({{< ref "/components/layout/box.md" >}}), you can create some fairly complex list views. This combination can be used in place of tables when displaying lists of records that are not tabular data.


{{< example lang="html" spacious="true" >}}<div class="rvt-box">
  <div class="rvt-box__header">
    Messages
  </div>
  <div class="rvt-box__row">
    <div class="rvt-mo">
      <div class="rvt-mo__prepend">
        <div style="width: 2rem; height: 2rem; border-radius: 999rem; overflow: hidden;" class="rvt-m-right-sm">
          <img src="https://www.fillmurray.com/g/200/200" alt="">
        </div>
      </div>
      <div class="rvt-mo__main">
        <a href="#" class="rvt-link-bold rvt-ts-18">Rivet 1.2.0 is now available!</a>
        <div class="rvt-ts-14">Updated Sept. 24 by <strong>bmacklin</strong></div>
      </div>
    </div>
  </div>
  <div class="rvt-box__row">
    <div class="rvt-mo">
      <div class="rvt-mo__prepend">
        <div style="width: 2rem; height: 2rem; border-radius: 999rem; overflow: hidden;" class="rvt-m-right-sm">
          <img src="https://www.fillmurray.com/g/200/200" alt="">
        </div>
      </div>
      <div class="rvt-mo__main">
        <a href="#" class="rvt-link-bold rvt-ts-18">Rivet 1.2.0 is now available!</a>
        <div class="rvt-ts-14">Updated Sept. 24 by <strong>bmacklin</strong></div>
      </div>
    </div>
  </div>
  <div class="rvt-box__row">
    <div class="rvt-mo">
      <div class="rvt-mo__prepend">
        <div style="width: 2rem; height: 2rem; border-radius: 999rem; overflow: hidden;" class="rvt-m-right-sm">
          <img src="https://www.fillmurray.com/g/200/200" alt="">
        </div>
      </div>
      <div class="rvt-mo__main">
        <a href="#" class="rvt-link-bold rvt-ts-18">Rivet 1.2.0 is now available!</a>
        <div class="rvt-ts-14">Updated Sept. 24 by <strong>bmacklin</strong></div>
      </div>
    </div>
  </div>
</div>