---
title: "Modals"
description: "A modal is a smaller window that is displayed on top of the main application/site window. The main page is still visible but, the background is darkened to direct focus to the content of the modal window."
requiresJs: true
status: "Beta"
---
## Modal example
{{< example lang="html" >}}<button class="rvt-button" data-modal-trigger="modal-example-basic">Open modal example</button>

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
            <button class="rvt-button rvt-m-right-sm">OK</button>
            <button class="rvt-button rvt-button--secondary" data-modal-close="close">Cancel</button>
        </div>
        <button class="rvt-button rvt-modal__close" data-modal-close="close">
            <span class="v-hide">Close</span>
            <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
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

{{< code lang="html" >}}<button class="rvt-button" data-modal-trigger="my-modal-id">Open the modal</button>

<div class="rvt-modal" id="my-modal-id">
    modal markup here...

    <button class="rvt-button rvt-button--plain rvt-modal__close" data-modal-close="close">
        button markup here...
    </button>
</div>
{{< /code >}}

In the code above, `my-modal-id` should correspond to the `id` attribute on the the `.rvt-modal` container and the `data-modal-trigger` attribute on a `<button>` element that triggers the modal.

The `data-modal-close="close"` attribute is used as a hook to close the modal. You can add the `data-modal-close` attribute to other buttons in the modal like a "**Cancel**" button if you need to allow users other options for closing the modal.

Multiple modals can be placed on the same page, as long as each has a unique `id` and corresponding `data-modal-trigger` element.

## Modal dialog
We use the generic term "Modal" to mean any smaller window that is displayed on top of the main application, but there are some subtle differences between a modal and a dialog.

A modal dialog is similar to a regular modal except that **it requires the user to interact with it** before continuing any interaction with the main application. The user must select from the available actions in the dialog—they cannot disregard and simply close the window.

{{< example lang="html" >}}<button class="rvt-button" data-modal-trigger="modal-dialog-example">Open modal dialog</button>
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
                <li>Is not dismissable i.e. doesn't have an (X) button</li>
                <li>Requires user input before they continue their work</li>
            </ul>
        </div>
        <div class="rvt-modal__controls">
            <button class="rvt-button rvt-m-right-sm">Yes</button>
            <button class="rvt-button rvt-button--secondary" data-modal-close="close">No, thanks</button>
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

## Modal JavaScript
Modals will work without the need for any additional JavaScript by using the approprate data attribute/id combination in your markup. There are a handful of methods from the Rivet modal's API available to use should you need to control the modal programmatically.

<table>
    <caption class="sr-only">Table example one</caption>
    <thead>
        <tr>
            <th scope="col">Method</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="250">
                <code>Modal.init(element)</code>
            </td>
            <td>
                <ul>
                    <li>Initializes and modals found on the page.</li>
                    <li>Accepts a DOM element. If no element is provided in the argument it defaults to the <code>document</code> element.</li>
                    <li><code>.init()</code> function is called on the initial load of <code>rivet.js</code> initializing all modals it finds in the DOM.</li>
                    <li>Each time a new modal is added to the DOM (without a page releoad) the <code>.init()</code> method function will need to be called again to re-initiallize all the modals.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>Modal.open(modal)</code></td>
            <td>
                The <code>.open()</code> method can be used to programatically open a modal in your JavaScript. It accepts one argument, the modal you want to open.
            </td>
        </tr>
        <tr>
            <td>
                <code>Modal.close()</code>
            </td>
            <td>
                The <code>.close()</code> method can be used to close any modal that is currently open. It accepts one argument, the modal that you want to close.
            </td>
        </tr>
    </tbody>
</table>

### Open modal example
{{< code lang="javascript" >}}// Find the modal you want to open in the DOM
const modalToOpen = document.querySelector('#my-rivet-modal');

// Open the modal
Modal.open(modalToOpen);
{{< /code >}}

### Close modal example

When opening the modal normally via an element (button) in the DOM using the `data-modal-trigger` attribute, the modal script will store a reference to the element that triggered the modal so that it can return focus to that element when the modal is closed. It's important to note that if you are opening the modal programatically based on some other event **it is your responsibility to set foucs to the apporpriate element after the modal is closed.**

{{< code lang="javascript" >}}// Find the modal you want to open in the DOM
const modalToClose = document.querySelector('#my-rivet-modal');

// Open the modal
Modal.close(modalToClose);
{{< /code >}}
