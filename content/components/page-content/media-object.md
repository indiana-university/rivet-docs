---
title: "Media Object"
asOf: 1.2.0
description: "The media object is a simple layout component that can generally be used to display items in a list of content."
status: "Ready"
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. The media object component has been removed in Rivet 2. You can [recreate this component as it appears in Rivet 1 using Rivet 2 utilities](https://codepen.io/scottanthonymurray/pen/OJzBOxe).
{{< /alert >}}

{{< alert variant="info" title="New in Rivet 1.2.0" >}}
The media object is new as of 1.2.0. If you need help moving to 1.2.0, see our [instructions for updating Rivet](/components/#updating-the-rivet-npm-package").
{{< /alert >}}

## The media object component
The media object component is made up of three content areas nested inside a main `.rvt-mo` wrapper:

- `.rvt-mo__prepend` (1)
- `.rvt-mo__main` (2)
- `.rvt-mo__append` (3)

{{< example lang="html" spacious="true" >}}<!--
  These background-color utility classes are used for
   demo purposes only here.
-->
<div class="rvt-mo">
  <div class="rvt-mo__prepend rvt-bg-blue rvt-p-all-md">
    1
  </div>
  <div class="rvt-mo__main rvt-bg-green rvt-p-all-md">
    2
  </div>
  <div class="rvt-mo__append rvt-bg-orange rvt-p-all-md">
    3
  </div>
</div>
{{< /example >}}

## Media object content areas
Each of the three media object areas (`.rvt-mo__prepend`, `.rvt-mo__main`, `.rvt-mo__append`) will expand to fit the content you put inside of them, but you should try to maintain an approximate ratio where the the main content area (`.rvt-mo__main`) takes up the majority of the width of the row, and the two supplemental areas (`.rvt-mo__prepend` and `.rvt-mo__append`) fill the remaining space.

### Media objects and the grid
The media object is designed to be a simple layout aid used for displaying lists of non-tabular items with similar content. You should not use [the Rivet grid]({{< ref "components/layout/grid.md" >}}) inside any of the media object content areas shown in [the previous example](#the-media-object-component).

## Basic media object
The simplest media object configuration consists of a wrapper element with the `.rvt-mo` class, a child element with the `.rvt-mo__prepend` class, and a second child element with the `.rvt-mo__main` class.

In this example, we've created a simple avatar to place inside the element with the `.rvt-mo__prepend` class. Some [Rivet spacing utility classes]({{< ref "/components/layout/spacing.md" >}}) are used to add small amounts of padding between each area of the media object.

{{< example lang="html" spacious="true" >}}<div class="rvt-mo">
  <div class="rvt-mo__prepend">
    <!-- Inline styles are for demo purposes only -->
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

## Using media objects to represent records
You can add buttons and form elements to a media object, allowing you to represent an entry in a list of [CRUD application](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) records that a user can interact with.

The example below features a [checkbox]({{< ref "/components/forms/checkboxes.md" >}}) in the `.rvt-mo__prepend` area (for record selection) and a [dropdown]({{< ref "/components/navigation/dropdown.md" >}}) in the `.rvt-mo__append` area (for record actions or configuration):

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
        <button type="button" role="menuitemradio">Notify all</button>
        <button type="button" role="menuitemradio" aria-checked="true">Notify admins</button>
        <button type="button" role="menuitemradio">Notify contributors</button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Combining media object and box components
You can combine the media object component with the [box component]({{< ref "/components/layout/box.md" >}}) to create list views for complex content. This combination can be used in place of tables when displaying lists of records that are not tabular data.

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
