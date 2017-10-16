---
title: "Tables"
description: "Tables are used to display tabular data in rows and columns."
requiresJs: false
status: "Alpha"
---

## Default table
Default tables in Rivet come with styled headers and bottom borders on row to help with readability.
{{< example lang="html" >}}<table>
    <caption class="sr-only">Table example one</caption>
    <thead>
        <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you search for what you want to do, and click to launch it.</td>
            <td><a href="#0">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Box</th>
            <td>Box is a no-cost cloud storage and collaboration environment available to students, faculty, and staff.</td>
            <td><a href="#0">box.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#0">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#0">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Stripped table
You can use the `.rvt-table-stripes` class to alternate light gray backgrounds on table rows for improved scannability.
{{< example lang="html" >}}<table class="rvt-table-stripes">
    <caption class="sr-only">Table example two</caption>
    <thead>
        <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you search for what you want to do, and click to launch it.</td>
            <td><a href="#0">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Box</th>
            <td>Box is a no-cost cloud storage and collaboration environment available to students, faculty, and staff.</td>
            <td><a href="#0">box.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#0">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#0">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Plain table
The `.rvt-table-plain` class will remove all borders and `thead` formatting on a table.
{{< example lang="html" >}}<table class="rvt-table-plain">
    <caption class="sr-only">Table example two</caption>
    <thead>
        <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you search for what you want to do, and click to launch it.</td>
            <td><a href="#0">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Box</th>
            <td>Box is a no-cost cloud storage and collaboration environment available to students, faculty, and staff.</td>
            <td><a href="#0">box.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#0">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#0">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## When to use
If you’re wrangling a lot of data, tables can help you visualize that content. They’re much easier to scan than long paragraphs cluttered with numbers or dates.

## When to consider something else
- Consider using a [definition list]({{< ref "components/page-content/lists.md#definition-list" >}}) when your data only has two dimensions.
- Don’t use tables to structure web pages

## Microcopy notes
- Keep labels short. For best scannability, use just two to three words.
- Limit the data or information in each cell. Make repetitive information, like the properties of the data, part of the label.
- Sort the information or data logically, using alphabetical or numerical order

## Accessibility notes
- Use a `<caption>` tag inside of the `<table>` body when you need to add a title to a table.
- When using multiple levels of headers (`<th>`) in a table each header cell should also have a `scope="col"` or `scope="row"` attribute.
