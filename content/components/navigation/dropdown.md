---
title: "Dropdown"
description: "Use the dropdown component to create a list of menu options that can be toggled with a button element. "
requiresJs: true
status: "Beta"
---
## Dropdown example
{{< example lang="html" >}}<div class="rvt-dropdown">
    <button class="rvt-button"
            data-dropdown-toggle="dropdown-1"
            aria-haspopup="true"
            aria-expanded="false">
        <span>Primary</span>
        <svg role="img" alt="" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
        </svg>
    </button>
    <div class="rvt-dropdown__menu" id="dropdown-1" aria-hidden="true">
        <a href="#">Add item</a>
        <a href="#" class="rvt-is-selected">Reorder items</a>
        <a href="#">Manage categories</a>
        <div class="rvt-dropdown__menu-heading">Personal settings</div>
        <div class="rvt-dropdown__menu-divider"></div>
        <a href="#">Profile settings</a>
        <a href="#">Logout</a>
    </div>
</div>
{{< /example >}}

## Implementation notes
To use the dropdown component, add a data attribute of `data-dopdown-toggle` to the button element you want to use to show/hide the menu, then add an `id` with a matching value to the `.rvt-dropdown__menu` element.

{{< code lang="html" >}}<div class="rvt-dropdown">
    <button class="rvt-button"
            data-dropdown-toggle="dropdown-docs-example"
            aria-haspopup="true"
            aria-expanded="false">
        <span>Primary</span>
        <svg role="img" alt="" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <!-- Icon ... -->
        </svg>
    </button>
    <div class="rvt-dropdown__menu" id="dropdown-docs-example" aria-hidden="true">
        <a href="#">Add item</a>
        <a href="#">Reorder items</a>
        <a href="#">Manage categories</a>
    </div>
</div>
{{< /example >}}

## Right-align modifier
To align the dropdown menu with the right side of the dropdown button, add the `.rvt-dropdown__menu--right` class to the `.rvt-dropdown__menu` element.

{{< example lang="html" >}}<div class="rvt-dropdown">
    <button class="rvt-button"
            data-dropdown-toggle="dropdown-right"
            aria-haspopup="true"
            aria-expanded="false">
        <span>Primary</span>
        <svg role="img" alt="" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
        </svg>
    </button>
    <div class="rvt-dropdown__menu rvt-dropdown__menu--right" id="dropdown-right" aria-hidden="true">
        <a href="#">Add item</a>
        <a href="#" class="rvt-is-selected">Reorder items</a>
        <a href="#">Manage categories</a>
        <div class="rvt-dropdown__menu-heading">Personal settings</div>
        <div class="rvt-dropdown__menu-divider"></div>
        <a href="#">Profile settings</a>
        <a href="#">Logout</a>
    </div>
</div>
{{< /example >}}

### Elements inside the drodown menu
The dropdown menu will work with either links (`<a>` tags) or buttons (`<button>` tags). The keyboard navigation implementation accounts for any focusable elements, so it will work with form controls like text inputs, textareas, and select elements as well.
 
We’ve also included a couple of extra layout elements here for when you may need to add some visual hierarchy to your dropdowns. You can use the `.rvt-dropdown__menu-heading` element to provide help and to label a related group of menu items. You can also use the `.rvt-dropdown__menu-divider` to create visual separation between elements.
 
To mark a dropdown menu item as selected, add the class `.rvt-is-selected` to the menu item.

{{< example lang="html" >}}<div class="rvt-dropdown">
    <button class="rvt-button rvt-button--secondary"
            data-dropdown-toggle="dropdown-example-two"
            aria-haspopup="true"
            aria-expanded="false">
        <span>Dropown items</span>
        <svg role="img" alt="" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
        </svg>
    </button>
    <!-- The inline relative positioning here is for demo purposes only -->
    <div class="rvt-dropdown__menu" id="dropdown-example-two" aria-hidden="false" style="position: relative;">
        <a href="#">Add item</a>
        <a href="#" class="rvt-is-selected">Reorder items</a>
        <a href="#">Manage categories</a>
        <div class="rvt-dropdown__menu-heading">Personal settings</div>
        <div class="rvt-dropdown__menu-divider"></div>
        <a href="#">Profile settings</a>
        <a href="#">Logout</a>
    </div>
</div>
{{< /example >}}

## When to use
Use a dropdown menu when you need to give users a list of actions or links to choose from.

## When to consider something else
Although similar to a native HTML `<select>` element, the dropdown component should not be used as a replacement inside forms. Use the select element instead when you need to give users a list of mutually exclusive choices while filling out a form.

## Accessibility notes
The dropdown uses JavaScript to fully implement WAI-ARIA authoring standards for keyboard navigation within the menu. Dropdowns should be toggled using an HTML `<button>` element. 
 
The dropdown toggle needs an `aria-haspopup` attribute with a value of `true` and an `aria-expanded` attribute set initially to `false`. The `aria-haspopup` indicates to assistive technologies (AT) that the button controls a menu that will be activated. The `aria-expanded` attribute indicates to assistive technology whether or not the menu is currently open. Lastly, the dropdown menu needs an `aria-hidden` attribute initially set to `true`. This will be hidden (visually and from AT) until the menu is toggled via JavaScript.

### A note about buttons
While it is possible to use any element as a toggle for the dropdown menu, you should always use an HTML `<button>` element. The button element was made for triggering new content within the current context or performing in-page actions. Plus, its appearance is completely styleable using CSS (so dropdown toggles don’t always need to look like the default Rivet button). **Buttons are the best and most accessible choice for toggling the dropdown menu**.

## JavaScript API
The Dropdown JavaScript exposes a couple of methods to use in your own scripts. The `init()` method is called by the main `rivet.js` file the first time the script is loaded. It will initiallize all of the dropdown menus that are in the DOM when the page loads. When dynamically updating the page (via AJAX calls, etc.) you will need to call the `init()` method in your script after each update to the DOM. This will re-initialize all dropdowns on the page, including any new dropdowns that may have been added to the DOM.

### Available methods
Here's a breakdown of the available Dropdown methods you can use in your scripts.

<table>
    <caption class="sr-only">Dropdown JavaScript methods</caption>
    <thead>
        <tr>
            <th scope="col">Method</th>
            <th scope="col">Descripton</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>Dropdown.init()</code></td>
            <td>Initializes all dropdowns in the DOM. Must be called any time new Dropdowns are added to the DOM without a page reload.</td>
        </tr>
        <tr>
            <td><code>Dropdown.toggle(id)</code></td>
            <td>Toggles a dropdown menu. The <code>id</code> argument is a <code>String</code> that corresponding value of the dropdown's <code>data-dropdown-toggle</code> and <code>id</code> attributes. This will update the values of the Dropdown toggle's <code>aria-expanded</code> and the value of the menu's <code>aria-hidden</code> attributes based on their state when <code>toggle()</code> is called.</td>
        </tr>
        <tr>
            <td><code>Dropdown.closeAll()</code></td>
            <td>Closes all dropdown menus and sets their <code>aria-hidden</code> and <code>aria-expanded</code> attributes to the appropriate state.</td>
        </tr>
    </tbody>
</table>