---
title: "Shell"
description: "A configurable set of layout components designed for applications using Rivet"
packageName: rivet-shell
thumbnail: "shell-thumbnail.png"
npm: true
repo: https://github.com/indiana-university/rivet-shell
demo: https://indiana-university.github.io/rivet-shell/
addOnTags:
  - All
  - Layout
---
## Shell markup changes
{{< alert title="New in 1.0.0" variant="warning" >}}
  The root `.rvt-shell` class should be applied to the `<main>` element of your document as of version `1.0.0`. 
{{< /alert >}}

See the following code examples for more information on how to structure your markup to include the Rivet header and footer directly before and after the `<main class="rvt-shell">` element.

## Getting started
The Rivet shell Add-on requires the use of the core Rivet CSS. You can find out more about how to get started in [the Rivet documentation](https://rivet.iu.edu/components/). Once you are using Rivet, you can download the Rivet shell source files and include them in your project.

### 1. Include the CCS in your page
{{< code lang="html" >}}<link rel="stylesheet" href="dist/css/rivet-shell.min.css">
{{< /code >}}

### Using Sass
If you are already using [Rivet's Sass](https://rivet.iu.edu/getting-started/sass/), you can also use the shell by importing it:

{{< code lang="scss" >}}@import "< your-path-to-node_modules >/rivet-shell/sass/rivet-shell.scss";
{{< /code >}}

## Basic shell configuration
The default Rivet layout shell comes ready to use with any of the Rivet header variations and the Rivet footer. The _stage_ area will fill up the remaining vertical space and push the footer to the bottom of the browser window.

Inside the stage are we include a _page header_ component that is used for page/view-specific content. The page header includes:

- A title block
- Breadcrumb navigation
- A dedicated toolbar-like space for actions and links

{{< code lang="html" >}}<header class="rvt-header">
  <!-- Rivet header markup -->
</header>

<main class="rvt-shell">
  <div class="rvt-shell__stage">
    <div class="rivet-page-header">
      <!-- Page header content -->
    </div>
    
    <!-- Rest of your app's main content -->
  </div>
</main>

<footer class="rvt-footer">
  <!-- Rivet footer markup -->
</footer>
{{< /code >}}

[Shell base demo](https://indiana-university.github.io/rivet-shell/rivet-shell-empty)

## Shell sidebar
To offer even more flexibility, the Rivet shell also comes with a sidebar component that can be used to help layout out navigation and content.

[Shell with sidebar demo](https://indiana-university.github.io/rivet-shell/rivet-shell-sidebar/index.html)

### Shell layout on smaller screens
In earlier versions of the shell, we hid the shell sidebar on smaller screens with the idea that developers could duplicate any navigation from the sidebar in the rivet drawer on smaller screens, similar to [how the main Rivet header works](https://rivet.iu.edu/components/navigation/header/#implementation-notes).

As of version 1.0.0 we have removed this functionality and instead the shell sidebar will default to stacking on top of the `rvt-shell__stage` element. Due to the unknown nature of the amount of content that could be placed in the shell sidebar we felt it was better to let the developer have control over how the sidebar content should be handled on smaller screens. For instance if you want to restore the old functionality you could add the following custom CSS:


{{< code lang="scss" >}}.rvt-shell__sidebar {
  display: none;
}

/**
 * Referencing Rivet's Sass breakpoint variables:
 * https://rivet.iu.edu/getting-started/sass/#breakpoints
 */
@media screen and (min-width: $breakpoint-md) {
  .rvt-shell__sidebar {
    display: block;
  }
}
{{< /code >}}

### Let us know how you are handling sidebar navigation
If you've used the shell and have a responsive solution for showing and hiding the shell sidebar content, please let us know by creating an [issue on the Rivet shell repository](https://github.com/indiana-university/rivet-shell/issues/new).

## Sidebar and page header layout
For more complex layouts and navigation structure the shell sidebar and page header can be used together. Building on the _Shell sidebar_ example above, you can place the `rvt-page-header` component included with the shell inside the stage area to make a more complex layout.

{{< code lang="html" >}}<main class="rvt-shell">
  <div class="rvt-shell__sidebar">
    <nav role="navigation">
      <ul class="rvt-list-nav">
        <li>Nav item one</li>
        <!-- Rest of navigation -->
      </ul>
    </nav>
  </div>
  <div class="rvt-shell__stage rvt-p-all-md">
    <div class="rvt-page-header">
      <!-- Page header content -->
    </div>
    <div class="rvt-p-all">
      <!-- Main content "Stage" -->
    </div>
  </div>
</main>
{{< /code >}}

In the example above we've used a Rivet spacing utility class to add a bit of padding to the stage content area underneath the page header. We intentionally do not build in padding to the stage so that users have more control over how the content is laid our in the stage area. For example when using the page header.

[Sidebar and header demo](https://indiana-university.github.io/rivet-shell/rivet-shell-sidebar-and-header/index.html)

## Shell modifiers
There are a couple of different modifiers you can use to modify the shell layout and appearance.

### Reverse modifier
If you are using the shell sidebar, the `rvt-shell--reverse` modifier will move the sidebar to the right side of the shell layout. 

{{< code lang="html" >}}<main class="rvt-shell rvt-shell--reverse">
  <!-- Shell content -->
</main>
{{< /code >}}

[View the reversed layout](https://indiana-university.github.io/rivet-shell/rivet-shell-right-sidebar-header/)

### Sidebar and stage modifiers
You can use the `rvt-shell__sidebar--light` modifier to changes the background color of the sidebar to white. This works really will with the `rvt-shell__stage--subtle` modifier which will apply a subtle gray background to the stage, effectively swapping the default colors.

{{< code lang="html" >}}<main class="rvt-shell">
  <div class="rvt-shell__sidebar rvt-shell__sidebar--light">
    <nav role="navigation">
      <ul class="rvt-list-nav">
        <li>Nav item one</li>
        <!-- Rest of navigation -->
      </ul>
    </nav>
  </div>
  <div class="rvt-shell__stage rvt-shell__stage--subtle">
    <!-- Main content "Stage" -->
  </div>
</main>
{{< /code >}}

[View the stage and sidebar modifiers](https://indiana-university.github.io/rivet-shell/rivet-shell-sidebar-header-reversed-bg/)

### Compact sidebar list nav modifier
If you have a large amount of navigation in the shell sidebar, you can used the list nav compact modifier to reduce the amount of space between the sidebar nav items.

{{< code lang="html" >}}<main class="rvt-shell">
  <div class="rvt-shell__sidebar">
    <nav role="navigation">
      <ul class="rvt-list-nav rvt-list-nav--compact">
        <li>Nav item one</li>
        <!-- Rest of navigation -->
      </ul>
    </nav>
  </div>
  <div class="rvt-shell__stage">
    <!-- Main content "Stage" -->
  </div>
</main>
{{< /code >}}