---
title: "Install with npm"
description: "Rivet is also available to include in as a dependency in your app via NPM."
url: "/getting-started/npm/"
---
## NPM dependency
These instructions assume that you are already using NPM in your project. If not, you can [read these instructions](https://docs.npmjs.com/cli/init) on the NPM website about how to start.

{{< alert title="About using a .npmrc file" variant="info" >}}
In previous versions of Rivet a .npmrc file configured to look at IU's public registry was required to install Rivet. As of version 1.1.0 you no longer need a .npmrc file.
{{< /alert >}}

### Installing via NPM
Once you have a `package.json` file configured in the root of your project, you can run the following command to install Rivet.

{{< code >}}npm install rivet-uits@1.4.0 --save-dev
{{< /code >}}

### Updating the Rivet NPM package
When there is a new version of Rivet released it will be publish to the NPM registry. You can check for updates by running the `npm outdated` command. To actually update your NPM dependency you can run the following command at the same level as your project's `package.json`.

{{< code >}}npm install rivet-uits@<version> --save-dev
{{< /code >}}

In this example `<version>` would be the new version of Rivet you want to install.