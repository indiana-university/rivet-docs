---
title: "Install with NPM"
description: "Install and manage Rivet as an NPM package"
url: "/getting-started/npm/"
excludeFromStatus: true
---
## NPM dependency
These instructions assume that you are already using NPM in your project. If not, you can visit the NPM website to [learn more about getting started with Node and NPM](https://docs.npmjs.com/cli/init).

{{< alert title="About using a .npmrc file" variant="info" >}}
In previous versions of Rivet, a `.npmrc` file configured to look at IU's public registry was required to install Rivet. As of version `1.1.0`, you no longer need a `.npmrc` file.
{{< /alert >}}

### Installing via NPM
Once you have a `package.json` file configured in the root of your project, you can run the following command to install Rivet:

{{< code >}}npm install rivet-uits@1.8.3 --save-dev
{{< /code >}}

### Updating the Rivet NPM package
When a new version of Rivet is released, it will be published to the NPM registry. You can check for updates by running the `npm outdated` command. To actually update your NPM dependency, you can run the following command in the same directory as your project's `package.json` file:

In this example, `<version>` would be the new version of Rivet you want to install, for example `1.8.3`

```
npm install rivet-uits@<version> --save-dev
```
