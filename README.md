# Rivet documentation site

This is the source for the Rivet documentation site. It is built with [Hugo](https://gohugo.io/), a static site generator written in Go (no Go experience is necessary to edit this site). Development is designed for macOS, but should be possible in other environments. To get started:
```
git clone https://github.com/indiana-university/rivet-docs.git
cd rivet-docs
npm install
gulp serve
```
You should be able to browse a local version of the site at http://localhost:3000

## Pull Requests
We use the [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) branching model and naming conventions to develop new features, and do releases from this repo. Although not required to contribute, we encourage you to follow these conventions when contributing code and opening pull requests.

### Submitting a pull request
1. Fork the main `rivet-docs` repository and then clone your fork locally. Follow [these instructions on syncing your local fork](https://help.github.com/articles/fork-a-repo/#keep-your-fork-synced). Set your new `upstream` remote to point to https://github.com/indiana-university/rivet-docs.git.
2. Create a new feature branch off of `develop` (Ideally using [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)) with the prefix `feature/your-feature` e.g. `feature/modal`.
3. Commit your changes. Be sure to keep your commits narrow in scope and avoid committing changes not related to your feature.
4. Locally merge any upstream changes into your feature branch: `git pull upstream develop`.
5. Push your feature branch to your fork: `git push origin feature/**your feature**`.
6. [Open a pull request](https://help.github.com/articles/about-pull-requests/) with a title and clear description of your feature branch against `develop`.

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