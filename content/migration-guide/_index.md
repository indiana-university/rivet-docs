---
title: "Migration guide"
description: "Information on migrating from Rivet 1 to Rivet 2"
---
## Components

The table below lists all Rivet 1 components and their Rivet 2 equivalents. For components that do not have a direct equivalent in Rivet 2, similar components are suggested.

Some components were deprecated in Rivet 1 and do not appear in Rivet 2. However, example markup is provided for recreating deprecated components if needed using Rivet 2 utility classes.

{{< migration-table >}}

## Add-ons

Rivet 1 add-ons can continue to be used in Rivet 2 projects until replacement components are made available.

{{< alert variant="warning" >}}
To use the Rivet 1 datepicker add-on in a Rivet 2 project, you'll need to add the `.rvt-input` class to each `input` element in the datepicker's markup.
{{< /alert >}}

## Utilities

All utilities available in Rivet 1 are available in Rivet 2.

Rivet 2 also introduces several new utility classes. See the [Rivet 2 utilities documentation](https://v2.rivet.iu.edu/docs/utilities/) for more.