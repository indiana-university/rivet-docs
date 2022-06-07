---
title: "Dropdown"
asOf: 1.0.0
description: "Use the dropdown component to create a list of menu options that can be toggled with a button element."
requiresJs: true
status: "Ready"
methods:
    -
        title: "Dropdown.init(context)"
        description: |
            - Initializes the `Dropdown` component
            - Accepts an optional DOM element. If no element is provided in the argument it defaults to the `document` element.
            - NOTE: the `init()` method is called automatically when `rivet.js` is loaded.
    -
        title: "Dropdown.destroy(context)"
        description: |
            - Destroys any currently initialized dropdowns and removes their event listeners.
            - Accepts a optional DOM element. If no element is provided in the argument it defaults to the `document` element. **NOTE**: the optional `context` argument only needs to be passed into `.destroy()` if a DOM element was passed into the `.init()` method. If so, it must be the DOM element that was passed into `.init()` when the Dropdown was initialized.
    -
        title: "Dropdown.open(id, callback)"
        description: |
            - `id` - The unique id of the dropdown. This corresponds to the value `data-dropdown-toggle`/`id` attributes of the dropdown you want to **open**.
            - `callback` - An optional callback function that is executed after the dropdown is opened.
    -
        title: "Dropdown.close(id, callback)"
        description: |
            - `id` - The unique id of the dropdown. This corresponds to the value `data-dropdown-toggle`/`id` attributes of the dropdown you want to **close**.
            - `callback` - An optional callback function that is executed after the dropdown is closed.
    -
        title: "Dropdown.toggle(id, callback)"
        description: |
            - Sets the Dropdown to the **opposite** of its current state. For example, if it is open/visible, calling the `Dropdown.toggle(id)` method will close the dropdown it's called on and vice versa.
            - `id` the unique id of the dropdown you want to toggle
            - `callback` an optional callback function that is executed after the Dropdown is toggled.
    -
        deprecated: true
        title: "Dropdown.closeAll()"
        description: |
            - **NOTE**: This method is deprecated and should be replaced with the newer `Dropdown.open()` and `Dropdown.close()` methods.
            - Closes **all** open dropdowns.
events:
    -
        title: "dropdownOpen"
        description: |
            Emitted when the Dropdown is opened (using the `Dropdown.open()` method, or the `data-dropdown-toggle` attribute). The value of the Dropdown toggle's `data-dropdown-toggle` attribute is also passed along (if it exists) via the custom event’s detail property and is available to use in your scripts as `event.detail.name()`
    -
        title: "dropdownClose"
        description: |
            Emitted when the Dropdown is closed (using the `Dropdown.close()` method, or the `data-dropdown-toggle` attribute). The value of the Dropdown toggle's `data-dropdown-toggle` attribute is also passed along via the custom event’s detail property and is available to use in your scripts as `event.detail.name()`
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. [View the dropdown documentation on the Rivet 2 website](https://v2.rivet.iu.edu/docs/components/dropdown/).
{{< /alert >}}

## Dropdown example
{{< example lang="html" >}}<div class="rvt-dropdown">
    <button
         type="button"
        class="rvt-button"
        data-dropdown-toggle="dropdown-navigation"
        aria-haspopup="true"
        aria-expanded="false"
    >
        <span>Navigation menu</span>
        <svg aria-hidden="true" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
        </svg>
    </button>
    <div
        class="rvt-dropdown__menu"
        id="dropdown-navigation"
        aria-hidden="true"
        role="menu"
    >
        <a href="#">Item one</a>
        <a href="#">Item two</a>
        <a href="#" aria-current="page">Item three</a>
        <a href="#">Item four</a>
        <div role="group" aria-label="Related">
            <a href="#">Related item three</a>
            <a href="#">Related item four</a>
        </div>
    </div>
</div>
{{< /example >}}

## When to use
Use a dropdown menu when you need to give users a list of actions or links to choose from.

## When to consider something else
Although similar to a native HTML `<select>` element, the dropdown component should not be used as a replacement inside forms. Use the select element instead when you need to give users a list of mutually exclusive choices while filling out a form.

## Accessibility requirements
{{% a11y %}}
The Rivet Dropdown is built to follow the WAI-ARIA authoring standards. It is marked up with the appropriate ARIA attributes and uses the JavaScript included in `rivet.js` to implement the keyboard navigation and focus management required to meet the [ARIA Authoring Practices](http://w3c.github.io/aria-practices/) standards. If you need to create the Dropdown functionality in another framework/library like React, Angular, etc., please ensure that it meets the following accessibility requirements.

### Focus
- Dropdown button and Menu options should have a visible keyboard `:focus` state
- When escape key <kbd>Escape</kbd> is pressed and the menu is active/open, focus should be returned to the Dropdown Button associated with that menu.
- (Optional) When focused on the last menu item, the down arrow key <kbd>&darr;</kbd> should move focus to the first menu item.
- (Optional) When focused on the first menu item, the up arrow key <kbd>&uarr;</kbd> should move focus to the last menu item.

### Labeling
- Dropdown button has [aria-haspopup](https://w3c.github.io/aria/#aria-haspopup) set to `true`.
- Menu has role [menu](https://w3c.github.io/aria/#menu).
- When menu is visible, button has [aria-expanded](https://w3c.github.io/aria/#aria-expanded) set to `true`. When menu is hidden, it is set to `false`.
- (Optional) Dropdown button has [aria-controls](https://w3c.github.io/aria/#aria-controls) attribute that refers to the Menu
- Menu visibility should be toggled using the `aria-hidden` attribute.
- Menu items should use the appropriate roles, states, and properties depending their functionality. [More on that here](https://w3c.github.io/aria-practices/#menu).

### Keyboard navigation
- <kbd>Enter</kbd> or <kbd>Space</kbd> = Open Menu
- <kbd>Escape</kbd> = Close Active Menu
- <kbd>&darr;</kbd> = Open Menu (when button focused)
- <kbd>&uarr;</kbd><kbd>&darr;</kbd> = Moves focus to previous/next menu option
{{% /a11y %}}

## Implementation notes
To use the dropdown component, add a data attribute of `data-dropdown-toggle` to the button element you want to use to show/hide the menu, then add an `id` with a matching value to the `.rvt-dropdown__menu` element.

### Right-align modifier
To align the dropdown menu with the right side of the dropdown button, add the `.rvt-dropdown__menu--right` class to the `.rvt-dropdown__menu` element.

{{< example lang="html" >}}<div class="rvt-dropdown">
    <button
        type="button"
        class="rvt-button rvt-button--secondary"
        data-dropdown-toggle="dropdown-right"
        aria-haspopup="true"
        aria-expanded="false"
    >
        <span>Right menu</span>
        <svg aria-hidden="true" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
        </svg>
    </button>
    <div
        class="rvt-dropdown__menu rvt-dropdown__menu--right"
        id="dropdown-right"
        aria-hidden="true"
        role="menu"
    >
        <a href="#">Item one</a>
        <a href="#">Item two</a>
        <a href="#" aria-current="page">Item three</a>
        <a href="#">Item four</a>
    </div>
</div>
{{< /example >}}

### Elements inside the dropdown menu
The dropdown menu will work with either links (`<a>` tags) or buttons (`<button>` tags). The keyboard navigation implementation accounts for any focusable elements, so it will work with form controls like text inputs, textareas, and select elements as well.

### Additional dropdown elements
We’ve also included a couple of extra layout elements here for when you may need to add some visual hierarchy to your dropdowns:

- Use the `.rvt-dropdown__menu-heading` element to provide help and to label a related group of menu items. This should be a generic `<div>` and should have an `aria-hidden="true"` attribute applied to it so that the label for the grouped items will not be announced to screen readers twice. E.g. the `.rvt-dropdown__menu-heading` content and then the value of the `aria-label` applied to the group (see next bullet point).
- The dropdown heading should generally be used to group related options. Wrap related options in a `<div>` with a role="group". Using `role="group` will apply a top border to the related options. Additionally, you will need to add an `aria-label` attribute with a value that describes the group. This label will be announced to screen reader users.
- To mark a dropdown menu item as selected, add the aria attribute `aria-checked="true"` (for js-driven/application menus), or `aria-current="page"` (for navigation/link menus) to the menu item.

The following example shows how to implement these additional dropdown elements.

{{< example lang="html" >}}<div class="rvt-dropdown">
    <button type="button" class="rvt-button" data-dropdown-toggle="dropdown-1" aria-haspopup="true" aria-expanded="false">
        <span>Application menu</span>
        <svg aria-hidden="true" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
        </svg>
    </button>
    <div class="rvt-dropdown__menu" id="dropdown-1" role="menu" aria-hidden="true">
        <button type="button" role="menuitemradio">Notify all</button>
        <button type="button" role="menuitemradio" aria-checked="true">Notify admins</button>
        <button type="button" role="menuitemradio">Notify contributors</button>
        <div class="rvt-dropdown__menu-heading" aria-hidden="true">Personal settings</div>
        <div role="group" aria-label="Personal settings">
            <button type="button" role="menuitem">Profile Settings</button>
            <button type="button" role="menuitem">Logout</button>
        </div>
    </div>
</div>
{{< /example >}}

### A note about buttons
While it is possible to use any element as a toggle for the dropdown menu, you should always use an HTML `<button>` element. The button element was made for triggering new content within the current context or performing in-page actions. Plus, its appearance is completely styleable using CSS (so dropdown toggles don’t always need to look like the default Rivet button). **Buttons are the best and most accessible choice for toggling the dropdown menu**.

## Navigation menus vs. application menus
The Rivet dropdown is flexible enough to be used with lists of navigation links, or buttons that can be used for in-app JavaScript-driven behavior. There are some subtle differences in the way these two types of menus should be implemented.

<div class="rvt-p-all-sm rvt-border-all rvt-border-radius">
    <div class="rvt-grid">
        <div class="rvt-grid__item-6-md-up">
            <h3 class="rvt-text-bold rvt-m-bottom-md">Navigation menus</h3>
            <ul>
                <li>Navigation menus are a set of links used to navigate to pages/URLs in an application.</li>
                <li>Use the <code>aria-current="page"</code> attribute to indicate in the menu, both to screen readers and visually, if the user is on the current page.</li>
                <li>Use a generic <code>div</code> element with the <code>role="group"</code> attribute applied to it to group related links. This will also apply a top border to help visually separate groups of menu items.</li>
                <li><strong>NOTE</strong>: Do not use the <code>role="menuitem"</code> attribute on links in a navigation menu. It will override the way screen readers announce items as "Links".</li>
            </ul>
        </div>
        <div class="rvt-grid__item-6-md-up">
            <h3 class="rvt-text-bold rvt-m-bottom-md">Application menus</h3>
            <ul>
                <li>Application menus generally contain lists of buttons that are used for JavaScript-driven/in-page behavior.</li>
                <li>Application menu items (buttons) should use the <code>role="menuitemradio"</code> when they are used to toggle JavaScript-driven functionality. Otherwise, buttons should use the <code>role="menuitem"</code> attribute.</li>
                <li>To indicate the current state of an application menu item, use the <code>aria-checked="true"</code> attribute.</li>
            </ul>
        </div>
    </div>
</div>

## JavaScript API
The Dropdown JavaScript exposes a couple of methods to use in your own scripts. The `init()` method is called by the main `rivet.js` file the first time the script is loaded. It will initialize the dropdown component and attach the event listeners that handle interaction.

### Available methods
Here's a breakdown of the available Dropdown methods you can use in your scripts.

{{< apidocs type="methods" >}}{{< /apidocs >}}

### Custom Events
The Rivet Dropdown also emits various custom events that you can listen for in your own scripts.

{{< apidocs type="events" >}}{{< /apidocs >}}

#### Custom event example
Note here that the `event.detail.name()` property of the `customEvent` object is a function that returns a String. Read more about custom events on the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent).

{{< code lang="js" >}}// Listen for a custom "dropdownOpen" event
document.addEventListener('dropdownOpen', event => {
  if (event.detail.name() === 'my-dropdown') {
    alert('Hey, you opened the dropdown!')
  }
  // Maybe send some data via an AJAX request, etc...
}, false);
{{< /code >}}
