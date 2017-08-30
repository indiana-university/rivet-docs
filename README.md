# Rivet documentation site

This is the source for the Rivet documentation site. It is built with [Hugo](https://gohugo.io/), a static site generator written in Go (no Go experience is necessary to edit this site). Development is designed for macOS, but should be possible in other environments. To get started:
```
git clone git@github.iu.edu:UITS/rivet-docs-source.git
cd rivet-docs-source
npm install
gulp
hugo server
```
You should be able to browse a local version of the site at http://localhost:1313

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
Hugo's built in dev server can watch for content or assets to change, and automatically rebuild the site, while gulp can watch CSS and JS source files and automatically rebuild assets. Combined, content and assets can be watched for changes, and the site will be continually rebuilt and hot-reloaded (updated in the browser without reloading the page). To start the processes, run:
```
hugo server watch
```
and
```
gulp
```
It is currently necessary to run *two* terminal/shell windows, as the hugo and gulp processes are separate. Errors and build progress will appear in each window for its respective process.
