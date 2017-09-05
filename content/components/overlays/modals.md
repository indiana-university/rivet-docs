---
title: "Modals"
description: "A modal is a smaller window that is displayed on top of the main application/site window. The main page is still visible but, the background is darkened to direct focus to the content of the modal window."
requiresJs: true
status: "Alpha"
---
## When to use
- For single specific tasks related to a goal on the main page of the application
- To help users determine information needed in their main workflow e.g. calculating a number, looking up a code

## When to consider something else
- When you need to display an error message consider using an [alert]({{< relref "alerts.md" >}}) on the page in which the error occurred.
- When you need to display large amounts of information for multiple tasks consider using a dedicated page instead.

## Modal example
{{< example "html" >}}<button class="button" data-modal-trigger="modal-example-basic">Open modal example</button>

<div class="modal"
     id="modal-example-basic"
     role="dialog"
     aria-labelledby="modal-example-title"
     aria-hidden="true"
     tabindex=-1>
     <div class="modal__inner">
        <header class="modal__header">
            <h1 class="modal__title" id="modal-example-title">Modal title</h1>
        </header>
        <div class="modal__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <a href="#0">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="modal__controls">
            <button class="m-right-sm close-modal">OK</button>
            <button class="button button--secondary" data-modal-close="close">Cancel</button>
        </div>
        <button class="button button--plain modal__close" data-modal-close="close">
            <span class="v-hide">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" style="fill: #333"/>
            </svg>
        </button>
    </div>
</div>
{{< /example >}}

## Implementation notes
The modal component is made up of the following elements:

- `.modal` and `.modal__inner` - An overlay and inner container, which wraps all other elements
- `.modal__header` — A header with a title that is used to label the modal
- `.modal__body` — A modal body that holds the main content of the modal
- `.modal__controls` — An optional footer element that holds modal controls, like "Save" and "Cancel"
- `.modal__close` — An optional close button at the top of the modal

### Required elements
The only elements required in order for the modal to work are the `.modal`, `.modal__inner`, and `.modal__body`, but it is advisable to use the `.modal__header` element to help describe what the modal is use for. Likewise, the `.modal__controls` element provides an easy way to add additional actions to the modal like "Save" and "Close".

### Modal controls
The `.modal__controls` element provides a space to add additional controls like buttons. It is advisable to **stick to one or two buttons** action buttons in a modal. The primary action should **always appear as the left-most button** in the group with secondary actions, like "Cancel" appearing after.

## Modal dialog
We use the generic term "Modal" to mean any smaller window that is displayed on top of the main application, but there are some subtle differences between a modal and a dialog.

A modal dialog is similar to a regular modal except that **it requires the user to interact with it** before continuing any interaction with the main application. The user must select from the available actions in the dialog—they cannot disregard and simply close the window.

{{< example "html" >}}
<button class="button" data-modal-trigger="modal-dialog-example">Open modal dialog</button>
<div class="modal"
     id="modal-dialog-example"
     role="dialog"
     aria-labelledby="modal-dialog-title"
     aria-hidden="true"
     tabindex=-1
     data-modal-dialog="true">
    <div class="modal__inner">
        <header class="modal__header">
            <h1 class="modal__title" id="modal-dialog-title">Modal Dialog</h1>
        </header>
        <div class="modal__body">
            <p>A modal dialog:</p>
            <ul>
                <li>Is not dismissable i.e. doesn't have an (X) button</li>
                <li>Requires user input before they continue their work</li>
            </ul>
        </div>
        <div class="modal__controls">
            <button class="m-right-sm close-modal">Yes</button>
            <button class="button button--secondary" data-modal-close="close">No, thanks</button>
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
