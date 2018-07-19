---
title: "Emmet snippets"
description: "A set of Emmet snippets for use with Rivet."
thumbnail: "emmet-thumbnail.png"
packageName: rivet-collapsible
repo: https://github.com/indiana-university/rivet-emmet
addOnTags:
  - All
  - Tools
---
## About Emmet

Emmet is a text editor plugin that makes it easy to create custom code snippets that help developers improve HTML and CSS workflow. [See a demo of it in action](https://emmet.io/) on the Emmet website.

## Installing Emmet

Emmet is available as a plugin for most editors, including [Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet), [Atom](https://github.com/emmetio/emmet-atom#readme), and [Sublime Text](https://github.com/sergeche/emmet-sublime#readme).

- [Load custom Emmet snippets for use with Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet#_using-custom-emmet-snippets)
- [Install Emmet for use with Atom](https://github.com/emmetio/emmet-atom#readme)
- [Load custom Emmet snippets for use with Atom](https://github.com/emmetio/emmet-atom#extensions-support)
- [Install Emmet for use with Sublime Text](https://github.com/sergeche/emmet-sublime#readme)
- [Load custom Emmet snippets for use with Sublime Text](https://github.com/sergeche/emmet-sublime#extensions-support)

For more information on installing Emmet for use with your editor, see the [Emmet downloads page](https://emmet.io/download/).

### Enabling line breaks
If you're using Visual Studio Code or Atom, you'll have to enable formatting for newlines (`\n`) in Emmet before you can start using the Rivet snippets.

#### Visual Studio Code

To enable newline formatting for Emmet snippets in Visual Studio Code:

1. Open the Visual Studio Code settings pane under **Code > Preferences > Settings**.
2. In the **User Settings** pane on the right-hand side, add the following JSON:

{{< code lang="javascript" >}}"emmet.syntaxProfiles": {
  "html": {
    "inline_break": 1
  }
}
{{< /code >}}

#### Atom

To enable newline formatting for Emmet snippets in Atom:

1. Open the Emmet package preferences under **Atom > Preferences > Packages**.
2. In the **Settings** section of the Emmet preferences page, check **Format Line Breaks**.

## Rivet snippets

Emmet snippets are available for each of [Rivet's core components](https://rivet.uits.iu.edu/components/).

### Starter template

| Starter template snippets |
| ------- |
| `rvt-start` |
| `rvt-css` |
| `rvt-js` |

### Layout

#### Grid

For more information about this component, see the [Rivet documentation on grid layouts](https://rivet.uits.iu.edu/components/layout/grid/).

| Grid snippets |
| ------- |
| `rvt-container` |
| `rvt-container-freshman` |
| `rvt-container-sophomore` |
| `rvt-container-junior` |
| `rvt-container-senior` |
| `rvt-grid-item` |

#### Panels

For more information about this component, see the [Rivet documentation on panels](https://rivet.uits.iu.edu/components/layout/panels/).

| Panel snippets |
| ------- |
| `rvt-panel` |
| `rvt-panel-light` |

### Navigation

#### Breadcrumb

For more information about this component, see the [Rivet documentation on breadcrumb navigation](https://rivet.uits.iu.edu/components/navigation/breadcrumb/).

| Breadcrumb snippets |
| ------- |
| `rvt-breadcrumbs` |
| `rvt-breadcrumbs-callout` |

#### Dropdown

For more information about this component, see the [Rivet documentation on dropdown buttons](https://rivet.uits.iu.edu/components/navigation/dropdown/).

| Dropdown snippets |
| ------- |
| `rvt-dropdown` |
| `rvt-dropdown-item-group` |

#### Header

For more information about this component, see the [Rivet documentation on headers](https://rivet.uits.iu.edu/components/navigation/header/).

| Header snippets |
| ------- |
| `rvt-header` |
| `rvt-header-identity` |
| `rvt-nav` |
| `rvt-nav-item` |
| `rvt-nav-item-dropdown` |

#### Footer

For more information about this component, see the [Rivet documentation on footers](https://rivet.uits.iu.edu/components/navigation/footer/).

| Footer snippets |
| ------- |
| `rvt-footer` |

#### Pagination

For more information about this component, see the [Rivet documentation on pagination](https://rivet.uits.iu.edu/components/navigation/pagination/).

| Pagination snippets |
| ------- |
| `rvt-pagination` |
| `rvt-pagination-right` |
| `rvt-pagination-small` |
| `rvt-pagination-small-right` |

### Page Content

#### Badges

For more information about this component, see the [Rivet documentation on badges](https://rivet.uits.iu.edu/components/page-content/badges/).

| Badge snippets |
| ------- |
| `rvt-badge` |
| `rvt-badge-action` |
| `rvt-badge-success` |
| `rvt-badge-warning` |
| `rvt-badge-error` |
| `rvt-badge-secondary` |
| `rvt-badge-secondary-action` |
| `rvt-badge-secondary-success` |
| `rvt-badge-secondary-warning` |
| `rvt-badge-secondary-error` |

#### Tables

For more information about this component, see the [Rivet documentation on tables](https://rivet.uits.iu.edu/components/page-content/tables/).

| Table snippets |
| ------- |
| `rvt-table` |
| `rvt-table-striped` |
| `rvt-table-plain` |

#### Tabs

For more information about this component, see the [Rivet documentation on tabs](https://rivet.uits.iu.edu/components/page-content/tabs/).

| Tab snippets |
| ------- |
| `rvt-tabs` |
| `rvt-tabs-fitted` |
| `rvt-tabs-vertical` |
| `rvt-tab` |

### Forms

#### Buttons

For more information about this component, see the [Rivet documentation on buttons](https://rivet.uits.iu.edu/components/forms/buttons/).

| Button snippets |
| ------- |
| `rvt-button-group` |
| `rvt-button-group-segmented` |
| `rvt-button-group-segmented-fitted` |
| `rvt-button` |
| `rvt-button-success` |
| `rvt-button-danger` |
| `rvt-button-plain` |
| `rvt-button-secondary` |
| `rvt-button-secondary-success` |
| `rvt-button-secondary-danger` |
| `rvt-button-small` |
| `rvt-button-small-success` |
| `rvt-button-small-danger` |
| `rvt-button-small-plain` |
| `rvt-button-small-secondary` |
| `rvt-button-small-secondary-success` |
| `rvt-button-small-secondary-danger` |
| `rvt-button-small-secondary-plain` |
| `rvt-button-modal` |

#### Checkboxes

For more information about this component, see the [Rivet documentation on checkboxes](https://rivet.uits.iu.edu/components/forms/checkboxes/).

| Checkbox snippets |
| ------- |
| `rvt-checkbox` |

#### File input

For more information about this component, see the [Rivet documentation on file inputs](https://rivet.uits.iu.edu/components/forms/file-input/).

| File input snippets |
| ------- |
| `rvt-upload` |
| `rvt-upload-multiple` |

#### Input group

For more information about this component, see the [Rivet documentation on input groups](https://rivet.uits.iu.edu/components/forms/input-group/).

| Input group snippets |
| ------- |
| `rvt-input-group` |
| `rvt-input-group-button-first` |

#### Radio buttons

For more information about this component, see the [Rivet documentation on radio buttons](https://rivet.uits.iu.edu/components/forms/radio-buttons/).

| Radio button snippets |
| ------- |
| `rvt-radio` |

#### Select element

For more information about this component, see the [Rivet documentation on select elements](https://rivet.uits.iu.edu/components/forms/select-input/).

| Select element snippets |
| ------- |
| `rvt-select` |

#### Text inputs

For more information about this component, see the [Rivet documentation on text inputs](https://rivet.uits.iu.edu/components/forms/text-input/).

| Text input snippets |
| ------- |
| `rvt-text-input` |
| `rvt-textarea` |

### Overlays

#### Alerts

For more information about this component, see the [Rivet documentation on alerts](https://rivet.uits.iu.edu/components/overlays/alerts/).

| Alert snippets |
| ------- |
| `rvt-alert-info` |
| `rvt-alert-success` |
| `rvt-alert-warning` |
| `rvt-alert-error` |
| `rvt-alert-inline` |

#### Modals

For more information about this component, see the [Rivet documentation on modals](https://rivet.uits.iu.edu/components/overlays/modals/).

| Modal snippets |
| ------- |
| `rvt-button-modal` |
| `rvt-modal` |
| `rvt-dialog` |

### Utilities

#### Text

For more information about this utility, see the [Rivet documentation on styling text](https://rivet.uits.iu.edu/components/utilities/text/).

| Text snippets |
| ------- |
| `rvt-h1` |
| `rvt-h2` |
| `rvt-h3` |
| `rvt-p` |