---
title: "Tabs"
description: "Use tabs to allow users to switch between logical chunks of content without having to leave the current page."
requiresJs: true
status: "Ready"
methods:
    -
        title: "Tabs.init(context)"
        description: |
            - Initializes the `Tabs` component
            - Accepts an optional DOM element. If no element is provided in the argument it defaults to the `document` element.
            - NOTE: the `init()` method is called automatically when `rivet.js` is loaded.
    -
        title: "Tabs.destroy(context)"
        description: |
            - Destroys any currently initialized tabs and removes their event listeners.
            - Accepts a optional DOM element. If no element is provided in the argument it defaults to the `document` element. **NOTE**: the optional `context` argument only needs to be passed into `.destroy()` if a DOM element was passed into the `.init()` method. If so, it must be the DOM element that was passed into `.init()` when the Tabs were initialized.
    -
        title: "Tabs.activateTab(id, callback)"
        description: |
            - `id` - The unique id of the tab that you want to active. The value of the `id` argument should be the value of the `data-tab` attribute which corresponds to the `id` attribute of the tab panel it controls.
            - `callback` - An optional callback that is executed after the tab is activated.
events:
    -
        title: "tabActivated"
        description: |
            Emitted when a Tab is activated (using the `Tabs.activateTab()` method, or via a click on a button with the `data-tab` attribute). The value of the tab `data-tab` attribute is also passed along (if it exists) via the custom event’s detail property and is available to use in your scripts as `event.detail.name()`
---
## Default tabs example
{{< example lang="html" >}}<div class="rvt-tabs">
    <div class="rvt-tabs__tablist" role="tablist" aria-label="Rivet tabs">
        <button class="rvt-tabs__tab" role="tab" aria-selected="true" data-tab="tab-1" id="t-one">
            Tab one
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" data-tab="tab-2" id="t-two" tabindex="-1">
            Tab two
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" data-tab="tab-3" id="t-three" tabindex="-1">
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

## When to use
- Displaying a small number (2-5 categories) of closely related, distinct data
- Displaying multiple unique views of the same data
- Category labels are short and easy to understand
- Switching between views is common for your users’ goals
- Category names are unlikely to change very often and number of categories is unlikely to grow

## When to consider something else
- Displaying six or more categories (or more than what will easily fit horizontally on your target users' screen)
- Displaying categories that require long labels for clarity
- Users will frequently need to compare data from different tabs/categories
- The data for each tab could just as easily function as its own page
- If you are tempted to include a ‘More’ tab
- If the amount of data that would be shown on each tab is small

## Accessibility Requirements
{{% a11y %}}
The Rivet Tabs are built to follow the WAI-ARIA authoring standards. It is marked up with the appropriate ARIA attributes and uses the JavaScript included in `rivet.js` to implement the keyboard navigation and focus management required to meet the [ARIA Authoring Practices](http://w3c.github.io/aria-practices/) standards. If you need to create the Tabs functionality in another framework/library like React, Angular, etc., please ensure that it meets the following accessibility requirements.

### Focus
- Tabs should have a visible `:focus` state
- Active tabs should have a visible `aria-selected="true"` state
- Activating a tab should set its associated tab panel's `tabindex` attribute to `-1`. All in active tabs should have their `tabindex` attribute set to `0` so that after the used activates a tab, pressing <kbd>Tab</kbd> will move focus to the active tab's tab panel.

### Labeling
- Tabs should be wrapped in an element with a role of [tablist](https://www.w3.org/TR/wai-aria-1.1/#tablist)
- Each tab (button) should have a role of [tab](https://www.w3.org/TR/wai-aria-1.1/#tab)
- Each tab panel should have a role of [tabpanel](https://www.w3.org/TR/wai-aria-1.1/#tabpanel)
- The active tab should have the attribute [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) set to `true`. All inactive tabs should have `aria-selected` set to `false`
- Each `tabpanel` should have an `aria-labelledby` attribute that references its associated tab

### Keyboard navigation
- <kbd>Enter</kbd> or <kbd>Space</kbd> = Activate tab (when focused)
- <kbd>&larr;</kbd><kbd>&rarr;</kbd> = Moves focus to previous/next tab
{{% /a11y %}}

## Implementation notes
- Do not stack rows of tabs - only use a small set of tabs in a single row
- Order tabs in a logical manner
- Default tab (on page load) should be the first tab. The first tab should be the most frequently viewed or most important tab.
- Tab order should stay the same as the user moves between tabs
- Label tabs with clear concise categories - 1-2 words is ideal
- Do not use all capital letters in the tab labels
- Do not include a ‘More’ tab
- Page should not reload or refresh when the user switches to a different tab
- Only the content of the tab and tab bar indicating the user's location should change. The rest of the page should remain the same.

## Fitted version
Applying the modifier class `.rvt-tabs--fitted` to the main `.rvt-tabs` container will make the tabs take up equal amounts of the space of the tabs container.

{{< example lang="html" >}}<div class="rvt-tabs rvt-tabs--fitted">
    <div class="rvt-tabs__tablist" role="tablist" aria-label="Rivet tabs">
        <button class="rvt-tabs__tab" role="tab" aria-selected="true" data-tab="tab-1-fitted" id="t-one-fitted">
            Tab one
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" data-tab="tab-2-fitted" id="t-two-fitted" tabindex="-1">
            Tab two
        </button>
        <button class="rvt-tabs__tab" role="tab" aria-selected="false" data-tab="tab-3-fitted" id="t-three-fitted" tabindex="-1">
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

{{< alert variant="danger" title="Vertical tabs are deprecated" >}}
    While Rivet supports displaying tabs vertically along the left-hand side of the content area, we've deprecated that feature and will be removing vertical tabs in a future release.
{{< /alert >}}

Tabs work best when displayed horizontally. Displaying tabs vertically along the left-hand side of the content area takes up horizontal screen space, which limits the display area of your tab's content. In addition, vertical tabs cause confusion, as users might mistake the tabs for your application's main navigation. The vertical arrangement may also tempt you to use a larger number of tabs, which is not recommended.

If you need help replacing vertical tabs in your interface, [reach out to the Rivet team](mailto:rivet@iu.edu).

## JavaScript API
If you use the appropriate data attribute/id combination in your markup, tabs will work without the need for any additional JavaScript. But if you need to control tabs programmatically, there are a handful of methods from the Rivet tabs API you can use:

{{< apidocs type="methods" >}}{{< /apidocs >}}

### Custom Events
The Rivet Tabs also emit a custom event when a tab is activated that you can listen for in your own scripts.

{{< apidocs type="events" >}}{{< /apidocs >}}

#### Custom event example
Note here that the `event.detail.name()` property of the `customEvent` object is a function that returns a String. Read more about custom events on the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent).

{{< code lang="js" >}}// Listen for a custom "tabActivated" event
document.addEventListener('tabActivated', event => {
  if (event.detail.name() === 'my-tab') {
    alert('Hey, you activated the tab!')
  }
  // Maybe send some data via an AJAX request, etc...
}, false);
{{< /code >}}