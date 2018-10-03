---
title: "File input"
description: "A custom HTML file input that is styled to look like Rivet buttons"
requiresJs: true
status: "Ready"
methods:
    -
        title: "FileInput.init(context)"
        description: |
            - Initializes the `FileInput` component
            - Accepts an optional DOM element (`context`). If no element is provided in the argument it defaults to the `document` element.
            - NOTE: the `init()` method is called automatically when `rivet.js` is loaded.
    -
        title: "FileInput.destroy(context)"
        description: |
            - Destroys any currently initialized file inputs and removes their event listeners.
            - Accepts a optional DOM element. If no element is provided in the argument it defaults to the `document` element. **NOTE**: the optional `context` argument only needs to be passed into `.destroy()` if a DOM element was passed into the `.init()` method. If so, it must be the DOM element that was passed into `.init()` when the `FileInput` was initialized.
events:
    -
        title: "fileAttached"
        description: |
            Emitted after a user clicks on the file input and attaches/uploads a file.
---
## Custom file input example
The custom HTML file input (`<input type="file">`) uses CSS to hide the default file input button and styles the associated `<label>` element to look like a Rivet button.

{{< example lang="html" >}}<div class="rvt-file" data-upload="my-file-input">
    <input type="file" id="my-file-input" aria-describedby="file-description">
    <label for="my-file-input" class="rvt-button">
        <span>Upload a file</span>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"/>
        </svg>
    </label>
    <div class="rvt-file__preview" data-file-preview="my-file-input" id="file-description">
        No file selected
    </div>
</div>

<div class="rvt-file rvt-m-top-sm" data-upload="my-file-input-2">
    <input type="file" id="my-file-input-2" aria-describedby="file-description" disabled>
    <label for="my-file-input" class="rvt-button">
        <span>Upload a file</span>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"/>
        </svg>
    </label>
    <div class="rvt-file__preview" data-file-preview="my-file-input" id="file-description">
        No file selected
    </div>
</div>
{{< /example >}}

## Required elements
In order for the custom file input component to function and display properly, there are a few elements that are required in the markup:

- A `.rvt-file` wrapper `<div>` with a `data-upload` attribute that matches the `for` attribute of the input label
- A `.rvt-file__preview` `<div>` with a `data-file-preview` attribute that matches both the `for` attribute of the label and the `data-upload` attribute of the wrapper `<div>`.
- An `aria-describedby` attribute on the file `<input>` that matches an `id` attribute on the `.rvt-file__preview` `<div>`.

## File input variations
The custom file input can be used with any of Rivet's [button modifiers]({{< ref "components/forms/buttons.md#contextual-button-modifiers" >}}) to style the input to suit your needs. You can also add the `multiple` attribute to the file input markup to allow users to upload more than one file.

{{< example lang="html" >}}<div class="rvt-file" data-upload="my-file-input-two">
    <input type="file" id="my-file-input-two" aria-describedby="file-descrirption-two" multiple>
    <label for="my-file-input-two" class="rvt-button rvt-button--secondary">
        <span>Upload a file</span>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"/>
        </svg>
    </label>
    <div class="rvt-file__preview" data-file-preview="my-file-input-two" id="file-descrirption-two">
        No file selected
    </div>
</div>
{{< /example >}}

## JavaScript API
`FileInput.init()` is run once on page load, and initializes each `rvt-file` component that has a `data-upload` attribute.

{{< apidocs type="methods" >}}{{< /apidocs >}}

### Custom events

{{< apidocs type="events" >}}{{< /apidocs >}}