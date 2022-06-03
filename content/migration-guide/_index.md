---
title: "Migration guide"
description: "Information on migrating from Rivet 1 to Rivet 2"
---
## Components

The table below lists all Rivet 1 components and their Rivet 2 equivalents. For components that do not have a direct equivalent in Rivet 2, similar components are suggested.

Some components were deprecated in Rivet 1 and do not appear in Rivet 2. However, example markup is provided for recreating deprecated components if needed using Rivet 2 utility classes.

Rivet 1 add-ons can continue to be used in Rivet 2 projects until replacement components are made available.

<table>
  <thead>
    <th>Rivet 1</th>
    <th>Rivet 2</th>
  </thead>
  <tbody>
    <tr>
      <td>Alert</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/alert/">Alert</a></td>
    </tr>
    <tr>
      <td>Badge</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/badge/">Badge</a></td>
    </tr>
    <tr>
      <td>Box</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/card/">Card</a>; <a href="https://codepen.io/scottanthonymurray/pen/ExorKdB?editors=1000">Border, spacing, and color utilities</a></td>
    </tr>
    <tr>
      <td>Breadcrumb</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/breadcrumbs/">Breadcrumbs</a></td>
    </tr>
    <tr>
      <td>Button</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/button/">Button</a></td>
    </tr>
    <tr>
      <td>Checkboxes</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/checkbox/">Checkbox</a></td>
    </tr>
    <tr>
      <td>Dropdown</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/dropdown/">Dropdown</a></td>
    </tr>
    <tr>
      <td>File input</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/file-input/">File input</a></td>
    </tr>
    <tr>
      <td>Footer</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/footer/">Footer</a></td>
    </tr>
    <tr>
      <td>Grid</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/grid/">Grid</a></td>
    </tr>
    <tr>
      <td>Header</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/header/">Header</a></td>
    </tr>
    <tr>
      <td>Input group</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/input-group/">Input group</a></td>
    </tr>
    <tr>
      <td>Links</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/call-to-action/">Call to action</a>; <a href="https://v2.rivet.iu.edu/docs/components/link-hub/">Link hub</a>; <a href="https://v2.rivet.iu.edu/docs/components/sidenav/">Sidenav</a>; <a href="https://v2.rivet.iu.edu/docs/utilities/typography/">Typography utilities</a></td>
    </tr>
    <tr>
      <td>Lists</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/list/">List</a></td>
    </tr>
    <tr>
      <td>Loading indicator</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/loading-indicator/">Loading indicator</a></td>
    </tr>
    <tr>
      <td>Media object</td>
      <td><a href="https://codepen.io/scottanthonymurray/pen/OJzBOxe">Flex utilities</a></td>
    </tr>
    <tr>
      <td>Menu</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/subnav/">Subnav</a></td>
    </tr>
    <tr>
      <td>Modal</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/modal/">Modal</a></td>
    </tr>
    <tr>
      <td>Pagination</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/pagination/">Pagination</a></td>
    </tr>
    <tr>
      <td>Panel</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/card/">Card</a>; <a href="https://v2.rivet.iu.edu/docs/components/link-hub/">Link hub</a>; <a href="https://codepen.io/scottanthonymurray/pen/LYeMBPZ?editors=1000">Border, spacing, and color utilities</a></td>
    </tr>
    <tr>
      <td>Radio buttons</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/radio-input/">Radio input</a></td>
    </tr>
    <tr>
      <td>Segmented button</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/button/">Button</a></td>
    </tr>
    <tr>
      <td>Select element</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/select-input/">Select input</a></td>
    </tr>
    <tr>
      <td>Step indicator</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/step-indicator/">Step indicator</a></td>
    </tr>
    <tr>
      <td>Tabs</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/tabs/">Tabs</a></td>
    </tr>
    <tr>
      <td>Text inputs</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/text-input/">Text input</a>; <a href="https://v2.rivet.iu.edu/docs/components/textarea/">Textarea</a></td>
    </tr>
    <tr>
      <td>Timeline</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/timeline/">Timeline</a></td>
    </tr>
    <tr>
      <td>Add-on: Collapsible</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/accordion/">Accordion</a>; <a href="https://v2.rivet.iu.edu/docs/components/disclosure/">Disclosure</a></td>
    </tr>
    <tr>
      <td>Add-on: Datepicker</td>
      <td>Datepicker <em>(forthcoming)</em></td>
    </tr>
    <tr>
      <td>Add-on: Shell</td>
      <td><a href="https://v2.rivet.iu.edu/docs/layouts/">Layouts</a></td>
    </tr>
    <tr>
      <td>Add-on: Switch</td>
      <td><a href="https://v2.rivet.iu.edu/docs/components/checkbox/">Checkbox</a>; Switch <em>(forthcoming)</em></td>
    </tr>
  </tbody>
</table>

## Utilities

All utilities available in Rivet 1 are available in Rivet 2.

Rivet 2 also introduces several new utility classes. See the [Rivet 2 utilities documentation](https://v2.rivet.iu.edu/docs/utilities/) for more.