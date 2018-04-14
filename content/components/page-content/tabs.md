---
title: "Tabs"
description: "Use tabs to allow users to switch between logical chunks of content without having to leave the current page."
requiresJs: true
status: "Ready"
---
## Default tabs example
{{< example lang="html" >}}<div class="rvt-tabs">
    <div class="rvt-tabs__tablist" role="tablist" aria-label="Rivet tabs">
        <button class="rvt-tabs__tab" role="tab" aria-selected="true" aria-controls="tab-1" id="t-one">
            Tab one
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" aria-controls="tab-2" id="t-two" tabindex="-1">
            Tab two
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" aria-controls="tab-3" id="t-three" tabindex="-1">
            Tab three
        </button>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-1" aria-labelledby="t-one">
        <span class="rvt-ts-23 rvt-text-bold">Panel 1</span>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-2" aria-labelledby="t-two" hidden="">
        <span class="rvt-ts-23 rvt-text-bold">Panel 2</span>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three" hidden="">
        <span class="rvt-ts-23 rvt-text-bold">A grid inside a tab panel</span>
        <div class="rvt-grid">
            <div class="rvt-grid__item-4-md-up">
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="rvt-grid__item-8-md-up">
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## Accessibility
The Rivet tabs use JavaScript to fully implement [WAI-ARIA authoring standards](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel) for keyboard navigation. Tabs are controlled using `<button>` elements, and they should be focusable using the left and right arrow keys on the keyboard:

- Pressing the **right arrow key on the last tab** returns to the first in the set
- Pressing the **left arrow key on the first tab** should move focus to the last tab
- Pressing the **tab key while focused on a tab control** should move focus on to the tab panel it controls, not to the next tab in the set.

## Fitted version
Applying the modifier class `.rvt-tabs--fitted` to the main `.rvt-tabs` container will make the tabs take up equal amounts of the space of the tabs container.

{{< example lang="html" >}}<div class="rvt-tabs rvt-tabs--fitted">
    <div class="rvt-tabs__tablist" role="tablist" aria-label="Rivet tabs">
        <button class="rvt-tabs__tab" role="tab" aria-selected="true" aria-controls="tab-1-fitted" id="t-one-fitted">
            Tab one
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" aria-controls="tab-2-fitted" id="t-two-fitted" tabindex="-1">
            Tab two
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" aria-controls="tab-3-fitted" id="t-three-fitted" tabindex="-1">
            Tab three
        </button>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-1-fitted" aria-labelledby="t-one-fitted">
        <span class="rvt-ts-26 rvt-text-bold rvt-display-block">Sue’s Salads</span>
        <p>
            Panel 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-2-fitted" aria-labelledby="t-two-fitted" hidden="">
        <span class="rvt-ts-26 rvt-text-bold rvt-display-block">JJ’s Diner</span>
        <p>
            Panel 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-3-fitted" aria-labelledby="t-three-fitted" hidden="">
        <span class="rvt-ts-26 rvt-text-bold rvt-display-block">Food n’ Stuff</span>
        <p>
            Panel 3: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
</div>
{{< /example >}}

## Vertical Tabs
The `.rvt-tabs--vertical` modifier creates a set of tabs where the tab controls display in a vertical list on the left with the tab panels on the right.

In order for the vertical tabs to function properly you will need to add the `aria-orientation="vertical"` attribute to the main `.rvt-tabs` container. This lets the script that controls the tabs know that they are vertical and to adjust the keyboard navigation appropriately so that the up and down arrow keys switch focus of the tabs instead of the default left and right arrow keys.

{{< example lang="html" >}}<div class="rvt-tabs rvt-tabs--vertical">
    <div class="rvt-tabs__tablist" role="tablist" aria-orientation="vertical" aria-label="Rivet tabs">
        <button class="rvt-tabs__tab" role="tab" aria-selected="true" aria-controls="tab-1-vertical" id="t-one-vertical">
            Tab one
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" aria-controls="tab-2-vertical" id="t-two-vertical" tabindex="-1">
            Tab two
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" aria-controls="tab-3-vertical" id="t-three-vertical" tabindex="-1">
            Tab three
        </button>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-1-vertical" aria-labelledby="t-one-vertical">
        <span class="rvt-ts-26 rvt-text-bold rvt-display-block">Paunch Burger</span>
        <p>
            Panel 1: Lorem ipsum dolor sit amet,
            <a href="#0">consectetur adipisicing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-2-vertical" aria-labelledby="t-two-vertical" hidden="">
        <span class="rvt-ts-26 rvt-text-bold rvt-display-block">JJ’s Diner</span>
        <p>
            Panel 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id="tab-3-vertical" aria-labelledby="t-three-vertical" hidden="">
        <form action="">
            <fieldset>
                <legend class="rvt-sr-only">Sue's Salads Takeout</legend>
                <label for="name">Name</label>
                <input type="text" id="name">
                <label for="salads" class="m-top-md">Salad type</label>
                <select id="salads">
                    <option value="">Cobb</option>
                    <option value="">Ceasar</option>
                    <option value="">Wedge</option>
                    <option value="">Big</option>
                </select>
                <label for="message" class="m-top-md">Message</label>
                <textarea name="message" id="message" class="rvt-m-bottom-md"></textarea>
            </fieldset>
            <div class="m-top-lg rvt-button-group rvt-button-group--right">
                <button type="submit" class="rvt-button">Submit</button>
                <button class="rvt-button rvt-button--plain">Cancel</button>
            </div>
        </form>
    </div>
</div>
{{< /example >}}
