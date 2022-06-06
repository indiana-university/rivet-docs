---
title: "Modals"
asOf: 1.0.0
description: "A modal is a smaller window that is displayed on top of the main application/site window. The main page is still visible, but the background is darkened to direct focus to the content of the modal window."
requiresJs: true
status: "Ready"
methods:
    -
        title: "Modal.init(context)"
        description: |
            - Initializes the `Modal` component
            - Accepts an optional DOM element. If no element is provided in the argument it defaults to the `document` element.
            - NOTE: the `init()` method is called automatically when `rivet.js` is loaded.
    -
        title: "Modal.destroy(context)"
        description: |
            - Destroys any currently initialized Modals and removes their event listeners.
            - Accepts a optional DOM element. If no element is provided in the argument it defaults to the `document` element. **NOTE**: the optional `context` argument only needs to be passed into `.destroy()` if a DOM element was passed into the `.init()` method. If so, it must be the DOM element that was passed into `.init()` when the Modal was initialized.
    -
        title: "Modal.open(id, callback)"
        description: |
            - `id` - The unique id of the Modal. This corresponds to the value `data-modal-trigger`/`id` attributes of the modal you want to **open**. **NOTE**: In previous versions of Rivet, the `Modal.open()` method accepted a Modal DOM Element. The `.open()` method will still work if you pass it a DOM element (the modal element itself), but **this functionality will be deprecated in the next major version of Rivet**.
            - `callback` - An optional callback function that is executed after the modal is opened.
    -
        title: "Modal.close(id, callback)"
        description: |
            - `id` - The unique id of the modal. This corresponds to the value `data-modal-trigger`/`id` attributes of the modal you want to **close**.
            - `callback` - An optional callback function that is executed after the modal is opened.
            - **NOTE**: In previous versions of Rivet, the `Modal.close()` method accepted a Modal DOM Element. The `.close()` method will still work if you pass it a DOM element (the Modal element itself), but **this functionality will be deprecated in the next major version of Rivet**.
    -
        title: "Modal.focusModal(id)"
        description: |
            Moves focus the currently active/open modal. This is a helper method that can be used to focus modals that have been opened programmatically via the `Modal.open()` method. It takes one argument, the unique id (String) of the modal you wan to move focus to. This method can be used as the callback to the `Modal.open()` method to move focus to the modal after it has been opened via your own scripts.
    -
        title: "Modal.focusTrigger(id)"
        description: |
            Moves focus to the trigger (`data-modal-trigger`) that opened the currently active modal, if it exists.

events:
    -
        title: "modalOpen"
        description: |
            Emitted when the Modal is opened (using the `Modal.open()` method, or the `data-modal-trigger` attribute). The value of the modal `id` attribute is also passed along via the custom event’s detail property and is available to use in your scripts as `event.detail.name()`
    -
        title: "modalClose"
        description: |
            Emitted when the Modal is closed (using the `Modal.close()` method, or the `data-modal-trigger` attribute). The value of the modal `id` attribute is also passed along via the custom event’s detail property and is available to use in your scripts as `event.detail.name()`
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. [View the modal documentation on the Rivet 2 website](https://v2.rivet.iu.edu/docs/components/modal/).
{{< /alert >}}

## Modal example
{{< example lang="html" >}}<button type="button" class="rvt-button" data-modal-trigger="modal-example-basic">Open modal example</button>

<div class="rvt-modal"
     id="modal-example-basic"
     role="dialog"
     aria-labelledby="modal-example-title"
     aria-hidden="true"
     tabindex=-1>
     <div class="rvt-modal__inner">
        <header class="rvt-modal__header">
            <h1 class="rvt-modal__title" id="modal-example-title">Modal title</h1>
        </header>
        <div class="rvt-modal__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="rvt-modal__controls">
            <button type="button" class="rvt-button">OK</button>
            <button type="button" class="rvt-button rvt-button--secondary" data-modal-close="modal-example-basic">Cancel</button>
        </div>
        <button type="button" class="rvt-button rvt-modal__close" data-modal-close="modal-example-basic">
            <span class="rvt-sr-only">Close</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
        </button>
    </div>
</div>
{{< /example >}}

## When to use
- For single specific tasks related to a goal on the main page of the application
- To help users determine information needed in their main workflow e.g. calculating a number, looking up a code

## When to consider something else
- When you need to display an error message consider using an [alert]({{< relref "alerts.md" >}}) on the page in which the error occurred.
- When you need to display large amounts of information for multiple tasks consider using a dedicated page instead.

## Implementation notes
The modal component is made up of the following elements:

- `.rvt-modal` and `.rvt-modal__inner` - An overlay and inner container, which wraps all other elements
- `.rvt-modal__header` — A header with a title that is used to label the modal
- `.rvt-modal__body` — A modal body that holds the main content of the modal
- `.rvt-modal__controls` — An optional footer element that holds modal controls, like "Save" and "Cancel"
- `.rvt-modal__close` — An optional close button at the top of the modal

### Required elements
The only elements required in order for the modal to work are the `.rvt-modal`, `.rvt-modal__inner`, and `.rvt-modal__body`, but it is advisable to use the `.rvt-modal__header` element to help describe what the modal is use for. Likewise, the `.rvt-modal__controls` element provides an easy way to add additional actions to the modal like "Save" and "Close".

### Modal controls
The `.rvt-modal__controls` element provides a space to add additional controls like buttons. It is advisable to **stick to one or two buttons** action buttons in a modal. The primary action should **always appear as the left-most button** in the group with secondary actions, like "Cancel" appearing after.

### Modal set up
To use the modal component you'll need to do a few things. First, add the markup to your document.

{{< code lang="html" >}}<button type="button" class="rvt-button" data-modal-trigger="my-modal-id">Open the modal</button>

<div class="rvt-modal" id="my-modal-id">
    modal markup here...

    <button type="button" class="rvt-button rvt-button--plain rvt-modal__close" data-modal-close="my-modal-id">
        button markup here...
    </button>
</div>
{{< /code >}}

In the code above, `my-modal-id` should correspond to the `id` attribute on the the `.rvt-modal` container and the `data-modal-trigger` attribute on a `<button>` element that triggers the modal.

The `data-modal-close` attribute is used as a hook to close the modal. You can add the `data-modal-close` attribute to other buttons in the modal like a "**Cancel**" button if you need to allow users other options for closing the modal. The value of `data-modal-close` should be the same as the `id` attribute of the modal it closes.

Multiple modals can be placed on the same page, as long as each has a unique `id` and corresponding `data-modal-trigger` element.

## Modal dialog
We use the generic term "Modal" to mean any smaller window that is displayed on top of the main application, but there are some subtle differences between a modal and a dialog.

A modal dialog is similar to a regular modal except that **it requires the user to interact with it** before continuing any interaction with the main application. The user must select from the available actions in the dialog—they cannot disregard and simply close the window.

{{< example lang="html" >}}<button type="button" class="rvt-button" data-modal-trigger="modal-dialog-example">Open modal dialog</button>
<div class="rvt-modal"
     id="modal-dialog-example"
     role="dialog"
     aria-labelledby="modal-dialog-title"
     aria-hidden="true"
     tabindex=-1
     data-modal-dialog="true">
    <div class="rvt-modal__inner">
        <header class="rvt-modal__header">
            <h1 class="rvt-modal__title" id="modal-dialog-title">Modal Dialog</h1>
        </header>
        <div class="rvt-modal__body">
            <p>A modal dialog:</p>
            <ul>
                <li>Is not dismissible i.e. doesn't have an (X) button</li>
                <li>Requires user input before they continue their work</li>
            </ul>
        </div>
        <div class="rvt-modal__controls">
            <button type="button" class="rvt-button">Yes</button>
            <button type="button" class="rvt-button rvt-button--secondary" data-modal-close="modal-dialog-example">No, thanks</button>
        </div>
    </div>
</div>
{{< /example >}}

### When to use a dialog
- Confirmation dialogs are used to verify the action a user selected, especially when that action will result in the loss of data. For example, ‘All files in this folder will be deleted. Do you want to continue?’
- Provide the user with clarifying information before they continue with a task or action. For example, "A 10% fee will be charged to your account. Do you want to continue?"

### When to consider something else
- Do not use to second guess the users’ choice of actions when no destruction or loss of data will occur.
- When you need to create a focused space for users to complete a small subtask, use a regular modal instead.

## Accessibility notes
- When a modal is opened the modal itself receives focus, so that screen readers begin at the top of the modal content.
- When the modal is closed the focus should be returned to the button/trigger that was used to open the modal so that keyboard only users and those using assistive technologies do not lose their place in the document.
- A modal should trap focus inside of itself so that when a keyboard-only user navigates from the last focusable element in the modal it returns back to the first focusable element.

## Microcopy notes
Follow [UX Planet’s recommendations for modal text](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c):

- The button that launches the modal should clearly describe the action (“Submit feedback”)
- Use the launch button text as the modal title. This reminds the user what to do, within the context of the overall page.

## JavaScript API
If you use the appropriate data attribute/id combination in your markup, modals will work without the need for any additional JavaScript. But if you need to control the modal programmatically, there are a handful of methods from the Rivet modal’s API you can use:

{{< apidocs type="methods" >}}{{< /apidocs >}}

### Managing focus
When a modal is triggered using the default data attribute method via a click event on the modal trigger (`data-modal-trigger`), the modal script will store a reference to the element that triggered it, and return focus to that element when the modal is closed.

**Please note**: If you open the modal programmatically using `Modal.open()` based on some other event, it is your responsibility to return focus to the appropriate element after the modal is closed. The `.focusTrigger()` method can be combined with the `.close()` method's callback function to accomplish this.

{{< code lang="javascript" >}}Modal.close('my-modal-id', function() {
    Modal.focusTrigger('my-modal-id');
});
{{< /code >}}

### Custom Events
The Rivet Modal also emits various custom events that you can listen for in your own scripts.

{{< apidocs type="events" >}}{{< /apidocs >}}

#### Custom event example
Note here that the `event.detail.name()` property of the `customEvent` object is a function that returns a String. Read more about custom events on the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent).

{{< code lang="js" >}}// Listen for a custom "modalOpen" event
document.addEventListener('modalOpen', event => {
  if (event.detail.name() === 'my-modal') {
    alert('Hey, you opened the modal!')
  }
  // Maybe send some data via an AJAX request, etc...
}, false);
{{< /code >}}
