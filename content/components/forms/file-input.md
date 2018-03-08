---
title: "File input"
description: "A custom HTML file input that is styled to look like Rivet buttons"
requiresJs: true
status: "Beta"
---
## Custom file input example
The custom HTML file input (`<input type="file">`) uses CSS to hide the defuault file input button and styles the assosciated `<label>` element to look like a Rivet button.

{{< example lang="html" >}}<div class="rvt-file" data-upload="my-file-input">
    <input type="file" id="my-file-input">
    <label for="my-file-input" class="rvt-button" aria-describedby="file-descrirption">
        <span>Upload a file</span>
        <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"/>
        </svg>
    </label>
    <div class="rvt-file__preview" data-file-preview="my-file-input" id="file-description">
        No file selected
    </div>
</div>
{{< /example >}}

## Required elements
In order for the custom file input component to function and display properly there are few elements that are required in the markup:

- A `.rvt-file` wrapper `<div>` with a `data-upload` attribute that matches the for attribute of the input label
- A `.rvt-file__preview` `<div>` with a `data-file-preview` attribute that matches both the `for` attribute of the label and the `data-upload` attribute of the wrapper `<div>`.
- An `aria-describedby` attribute on the file `<input>` that matches an `id` attribute on the `.rvt-file__preview` `<div>`.

## File input variations
The custom file input can be used with any of Rivet's [button modifiers]({{< ref "components/forms/buttons.md#contextual-button-modifiers" >}}) to style the input to suit your needs. You can also add the `multiple` attribute to the file input markup to allow users to upload more than one file.

{{< example lang="html" >}}<div class="rvt-file" data-upload="my-file-input-two">
    <input type="file" id="my-file-input-two" aria-describedby="file-descrirption" multiple>
    <label for="my-file-input-two" class="rvt-button rvt-button--secondary">
        <span>Upload a file</span>
        <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"/>
        </svg>
    </label>
    <div class="rvt-file__preview" data-file-preview="my-file-input-two" id="file-description">
        No file selected
    </div>
</div>
{{< /example >}}

