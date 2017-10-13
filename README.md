# Rivet documentation site

This is the source for the Rivet documentation site. It is built with [Hugo](https://gohugo.io/), a static site generator written in Go (no Go experience is necessary to edit this site). Development is designed for macOS, but should be possible in other environments. To get started:
```
git clone git@github.iu.edu:UITS/rivet-docs-source.git
cd rivet-docs-source
npm install
gulp
```
You should be able to browse a local version of the site at http://localhost:3000

## Requirements

In addition to Hugo, `node`, `npm`, and `gulp` are required to build the static assets (CSS and JS) and search index for the site. Hugo, Node, and npm can be installed on macOS using homebrew:

from [Hugo quick start](https://gohugo.io/getting-started/quick-start/) (on macOS)
```
brew install hugo
```

from [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) (on macOS)
```
brew install node
```

Gulp is specified as a dependency of this project and will be installed later, or you can install it globally with npm:
```
npm install -g gulp
```

### Other dependencies

Additional dependencies are managed with npm, and specified in `package.json`. Run the following from the project root to download them:
```
npm install
```

## Watching changes during development
[BrowserSync](https://www.browsersync.io/) is used to provide a dev server with hot-reloading while working on the site, while several gulp tasks run to watch for changes to CSS, JS, and the site content itself. The default gulp task watches all files of interest and serves the site at http://localhost:3000, so getting started simply requires:
```
gulp serve
```

To watch and build files without running a server, you can run `gulp watch`. To package up the `public/` folder for distribution, run `gulp build:prod`.

## Automatic deployments
There are 4 webhooks setup for this site (2 for push and delete, and on 2 separate servers):
* [AWS](http://uxo.space): anytime you push to or delete any branch, it will deploy to AWS
  * If you create a `feature/<NAME>` branch then it will create a sub-directory the the feature <NAME>. For example, creating a branch called `feature/loading-indicator` will create a folder at http://uxo.space/loading-indicator
  * If you delete a feature branch it will delete that sub directory. For example, deleting branch `feature/loading-indicator` will delete the folder at http://uxo.space/loading-indicator
  * A push to develop will clear out the web root and update with the latest code on develop *THIS DELETES ALL FEATURE FOLDERS*
* [Webtest](https://rivet.webtest.iu.edu): Webtest is in sync with the `develop` branch and will automatically deploy whenever pushing to develop.

### The deploy process

`master` and `develop` branches are deployed automatically using github webhooks and server-side build scripts. Branches deploy as follows:

`master`: https://rivet.uits.iu.edu
`develop`: https://rivet.webtest.iu.edu
