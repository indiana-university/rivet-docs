---
title: "Shell"
description: "A configurable set of layout components designed for applications using Rivet"
packageName: rivet-shell
thumbnail: "shell-thumbnail.png"
npm: true
repo: https://github.com/indiana-university/rivet-shell
demo: https://indiana-university.github.io/rivet-shell/
status: Alpha
addOnTags:
  - All
  - Layout
---
## Getting started
The Rivet shell Add-on requires the use of the core Rivet CSS. You can find out more about how to get started in [the Rivet documentation](https://rivet.iu.edu/components/). Once you are using Rivet, you can download the Rivet shell source files and include them in your project.

### 1. Include the CCS in your page
{{< code lang="html" >}}<link rel="stylesheet" href="dist/css/rivet-shell.min.css">
{{< /code >}}

### 2. Add the markup to your page.

#### Shell base
The default Rivet layout shell comes ready to use with any of the Rivet header variations and the Rivet footer. The _stage_ area will fill up the remaining vertical space and push the footer to the bottom of the browser window.

{{< code lang="html" >}}<div class="rvt-shell">
  <div class="rvt-shell__stage">
    <!-- Main content "Stage" -->
  </div>
</div>
{{< /code >}}

[Shell base demo](https://indiana-university.github.io/rivet-shell/rivet-shell-empty)

#### Shell with page header
The shell also includes a pre-configured page-level header. The shell page header has a space for a page title, back/breadcrumb navigation, and an _actions_ area where you can use other Rivet controls like buttons and form inputs.

{{< code lang="html" >}}<div class="rvt-shell">
  <div class="rvt-shell__stage">
    <div class="rivet-page-header">
      <!-- Page header content -->
    </div>
    <div class="rvt-p-all-md">
      <!-- Main content "Stage" -->
    </div>
  </div>
</div>
{{< /code >}}

[Shell with page header demo](https://indiana-university.github.io/rivet-shell/rivet-shell-page-header-only)

#### Shell sidebar
To offer even more flexibility, the Rivet shell also comes with a sidebar component that can be used to help layout out navigation and content.

{{< code lang="html" >}}<div class="rvt-shell">
  <div class="rvt-shell__sidebar">
    <!-- Sidebar content -->
  </div>
  <div class="rvt-shell__stage rvt-p-all-md">
    <!-- Main content "Stage" -->
  </div>
</div>
{{< /code >}}

[Shell with sidebar demo](https://indiana-university.github.io/rivet-shell/rivet-shell-sidebar/index.html)