# Contributing to the Rivet docs
Thanks for taking the time to contribut to the Rivet documentation! 🙌 Please, take a minute to read the following documentation about the branching model we use and how to open a Pull Requests.

## Pull Requests
We use the [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) branching model and naming conventions to develop new features, and do releases from this repo. Although not requrired to contribute, we encourage you to follow these confentions when contributing code and opening pull requests.

### Submitting a pull request
1. Fork the main `rivet-docs-source` repository and then clone your fork locally. Follow [these instructions on syncing your local fork](https://help.github.com/articles/fork-a-repo/#keep-your-fork-synced). Set your new `upstream` remote to point to https://github.iu.edu/UITS/rivet-source.git.
2. Create a new feature branch off of `develop` (Ideally using [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)) with the prefix `feature/your-feature` e.g. `feature/modal`.
3. Commit your changes. Be sure to keep your commits narrow in scope and avoid committing changes not related to your feature.
4. Locally merge any upstream changes into your feature branch: `git pull upstream develop`.
5. Push your feature branch to your fork: `git push origin feature/**your feature**`.
6. [Open a pull request](https://help.github.com/articles/about-pull-requests/) with a title and clear description of your feature branch against `develop`.