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
{{< alert title="New in 1.0.0" variant="warning" >}}
  The `.rvt-shell` class should be applied to the `<main>` element of your document as of version `1.0.0`.
{{< /alert >}}

## Getting started
Before you can start using the Rivet shell, you'll need to include the shell CSS in your project.

### Using downloaded CSS
You can [download the Rivet shell CSS](https://github.com/indiana-university/rivet-shell/archive/master.zip) and include it in your project the same way you'd include any other CSS file:

{{< code lang="html" >}}<link rel="stylesheet" href="dist/css/rivet-shell.min.css">
{{< /code >}}

Make sure you include the Rivet shell CSS *after* the Rivet core CSS.

### Using NPM and Sass
If you are using NPM and [Rivet's Sass](https://rivet.iu.edu/getting-started/sass/), you can use the shell by importing it from your `node_modules` folder:

{{< code lang="scss" >}}@import "/node_modules/rivet-shell/sass/rivet-shell.scss";
{{< /code >}}

## Basic shell
Apply the `.rvt-shell` class to a `main` element that sits between a [Rivet header]({{< ref "/components/navigation/header.md" >}}) and a [Rivet footer]({{< ref "/components/navigation/footer.md" >}}).

The `.rvt-shell__stage` container will fill the remaining vertical space between the header and footer, with the footer pushed to the bottom of the browser window.

{{< alert title="Stage padding" variant="info" >}}
  The shell stage does not have any padding by default. To add padding to the entire stage, use one of the [Rivet spacing utility classes]({{< ref "/components/layout/spacing.md" >}}).
{{< /alert >}}

{{< code lang="html" >}}<header class="rvt-header">
  <!-- Rivet header markup -->
</header>

<main class="rvt-shell">
  <div class="rvt-shell__stage rvt-p-all-md">
    <!-- Your app's main content -->
  </div>
</main>

<footer class="rvt-footer">
  <!-- Rivet footer markup -->
</footer>
{{< /code >}}

[Basic shell demo](https://indiana-university.github.io/rivet-shell/rivet-shell-empty)

### Gray stage background
You can give the stage a subtle gray background with the `.rvt-shell__stage--gray` class.

{{< alert title="Class deprecation" variant="warning" >}}
  The `.rvt-shell__stage--subtle` class is deprecated as of version `1.0.0` in favor of the `.rvt-shell__stage--gray` class. The deprecated class will be removed in a future version of the shell add-on.
{{< /alert >}}

{{< code lang="html" >}}<main class="rvt-shell">
  <div class="rvt-shell__stage rvt-shell__stage--gray rvt-p-all-md">
    <!-- Your app's main content -->
  </div>
</main>
{{< /code >}}

[Shell with gray stage demo](https://indiana-university.github.io/rivet-shell/rivet-shell-sidebar-header-reversed-bg/)

## Shell with page header
You can add a page-specific header to your shell layout by adding an element with the `.rvt-page-header` class inside your `.rvt-shell__stage` container. 

This page-specific header can include a title, [breadcrumb navigation]({{< ref "/components/navigation/breadcrumb.md" >}}), and [action buttons]({{< ref "/components/forms/buttons.md" >}}) (see example below).

{{< code lang="html" >}}<header class="rvt-header">
  <!-- Rivet header markup -->
</header>

<main class="rvt-shell">
  <div class="rvt-shell__stage rvt-p-all-md">

    <!-- Page header -->
    <div class="rvt-page-header rvt-page-header--padded rvt-page-header--border">
      <div class="rvt-page-header__title-block">
        
        <!-- Page title -->
        <h1 class="rvt-page-header__title">Page title</h1>
        
        <!-- Breadcrumb navigation -->
        <nav role="navigation" aria-label="Breadcrumbs">
          <ol class="rvt-breadcrumbs rvt-m-bottom-xs">
            <li><a href="#">Top level</a></li>
            <li><a href="#">Second level</a></li>
          </ol>
        </nav>
      </div>

      <!-- Action buttons -->
      <div class="rvt-page-header__actions">
        <div class="rvt-button-group">
          <button class="rvt-button">Primary action</button>
          <button class="rvt-button rvt-button--plain">Secondary action</button>
        </div>
      </div>
    </div>
    
    <!-- Rest of your app's main content -->
  </div>
</main>

<footer class="rvt-footer">
  <!-- Rivet footer markup -->
</footer>
{{< /code >}}

[Shell with page header demo](https://indiana-university.github.io/rivet-shell/rivet-shell-empty)

### Extra padding
You can add extra padding to the page header by applying the `.rvt-page-header--padded` class. The example above uses this modifier class.

### Bottom border
You can also add a border along the bottom of the page header by applying the `.rvt-page-header--border` class. The example above uses this modifier class.

## Shell sidebar
You can include a sidebar in your shell layout by adding an element with the `.rvt-shell__sidebar` class as the first child of `main`.

{{< code lang="html" >}}<main class="rvt-shell">
  <div class="rvt-shell__sidebar">
    <nav role="navigation">
      <ul class="rvt-list-nav">
        <li>Nav item one</li>
        <!-- Rest of sidebar navigation -->
      </ul>
    </nav>
  </div>

  <div class="rvt-shell__stage rvt-p-all-md">
    <!-- Your app's main content -->
  </div>
</main>
{{< /code >}}

[Shell with sidebar demo](https://indiana-university.github.io/rivet-shell/rivet-shell-sidebar/index.html)

### Right-aligned sidebar
You can apply the `.rvt-shell--sidebar-right` class to the `main` element (not the element with the `.rvt-shell__sidebar` class) to snap the sidebar to the right side of the browser window instead of the left.

{{< alert title="Class deprecation" variant="warning" >}}
  The `.rvt-shell--reverse` class is deprecated as of version `1.0.0` in favor of the `.rvt-shell--sidebar-right` class. The deprecated class will be removed in a future version of the shell add-on.
{{< /alert >}}

{{< code lang="html" >}}<main class="rvt-shell rvt-shell--sidebar-right">
  <!-- Shell content -->
</main>
{{< /code >}}

[Shell with right-aligned sidebar demo](https://indiana-university.github.io/rivet-shell/rivet-shell-right-sidebar-header/)

### Light sidebar
You can use the `.rvt-shell__sidebar--light` class to change the background color of the sidebar to white.

{{< code lang="html" >}}<main class="rvt-shell">
  <div class="rvt-shell__sidebar rvt-shell__sidebar--light">
    <!-- Sidebar content -->
  </div>

  <div class="rvt-shell__stage rvt-p-all-md">
    <!-- Your app's main content -->
  </div>
</main>
{{< /code >}}

### Compact sidebar
If you have a large number of navigation items in the sidebar, you can use the `.rvt-list-nav--compact` class to reduce the amount of space between sidebar navigation items.

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

### Combining the sidebar with a page header
You can combine the shell sidebar and page header in a single layout.

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
      <!-- Your app's main content -->
    </div>
  </div>
</main>
{{< /code >}}

[Shell with sidebar and page header demo](https://indiana-university.github.io/rivet-shell/rivet-shell-sidebar-and-header/index.html)

## Shell layout on smaller screens
In previous versions of the shell, we hid the sidebar on smaller screens, assuming developers would duplicate any navigation from the sidebar in the Rivet drawer, similar to [how the main Rivet header works](https://rivet.iu.edu/components/navigation/header/#implementation-notes).

We removed this functionality in version `1.0.0`. Instead, the shell sidebar will stack on top of the element with the `.rvt-shell__stage` class.

Since we can't predict how much content might be placed in the sidebar, we felt it was better to let developers have control over how sidebar content should be displayed on smaller screens.

If you want to restore the old functionality, you could add the following custom CSS:

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

{{< alert title="Let us know how you're handling sidebar navigation" variant="info" >}}
  If you're using the shell and have a responsive solution for showing and hiding sidebar content, let us know by [creating an issue on the Rivet shell repository](https://github.com/indiana-university/rivet-shell/issues/new).
{{< /alert >}}