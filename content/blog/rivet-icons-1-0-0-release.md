---
title: Rivet Icons 1.0.0 release
description: The Rivet icon set reaches 1.0.0 with improvements to developer experience and performance
date: "2021-11-09"
excludeFromIndex: true
author:
  email: "csbasham@iu.edu"
  name: "Chris Basham"
---
## Introduction and goals
Since the initial public release of [Rivet icons](https://github.com/indiana-university/rivet-icons) two years ago, the icon set has expanded to nearly 100 icons. Many of these icons have been contributed by the IU community to serve various product needs. As teams used the icons over the years, we studied how they were being used.

With the 1.0.0 release of Rivet icons, we hope to improve the developer experience of using icons in a number of ways.

## 1. Improve performance

A preferred method for using icons is with [SVG symbols](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol). The SVG symbols file that includes all the Rivet icons is about 35 kilobytes. Since a project will likely never need to use all the icons in the set, this results in unnecessarily large network requests and wasted client processing.

To reduce the file size, some teams have had to extend their build process to generate a custom symbols file (with [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader) for Webpack).

With the release of version 1.0.0, Rivet Icons comes with a [Node.js tool for building custom icon sets](https://github.com/indiana-university/rivet-icons#build-a-custom-icon-set). For example, if you only need the four arrow icons, then the generated symbols file totals 1 kilobyte, saving users 34 kilobytes.

## 2. Include custom icons

Even with the large number of icons in the set, projects will still need to include custom icons.

Custom icons can be included in the same build step that generates the Rivet icons symbols file. This means that there can be a single integration process for any icons used in the project, regardless of if they're part of the official set or not.

```js
const { buildIcons } = require('rivet-icons')

async function buildCustomIcons () {
  await buildIcons({
    icons: [
      'arrow*',
      'plus'
    ],
    include: [
      './src/assets/*',
      './favicon.svg'
    ],
    out: 'build'
  })
}

buildCustomIcons()
```

## 3. Simplify markup

Icons can be rendered in HTML either by pasting the SVG into the source or by using symbols with the [`<use>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use). The first method results in [technical debt from repeated code](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). The second method improves on the first, but there are some attributes which need special care to ensure a good experience for keyboard and screen reader users.

The new Rivet icon element (`rvt-icon`) abstracts away the complexity of rendering icons. This is the first [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) published for use with the Rivet Design System and we hope it will be the model for future features. However, older methods for rendering icons are still supported in case a project is not yet ready to adopt the `rvt-icon` element.

```html
<rvt-icon name="heart"></rvt-icon>
```

## 4. Improve dynamic icons

Some icons will need to change their type or appearance in response to user actions. For example, pressing a "Favorites" button could toggle an icon from a heart outline to a solid-color heart, visually indicating the pressed state. There are many ways to do this.

JavaScript (or the rendering library) could swap the icons in the DOM. This swap could happen by changing the `<rvt-icon name>` attribute or replacing the `innerHTML` of an element with the SVG source of the icon.

```html
<button aria-pressed="true" class="favorite" id="favorite-button">
  <rvt-icon class="favorite__icon" name="heart-solid"></rvt-icon>
  Favorite
</button>

<script>
  const button = document.getElementById('favorite-button')
  const icon = button.querySelector('.favorite__icon')
  button.addEventListener('click', () => {
    const isPressed = button.getAttribute('aria-pressed') === 'true'
    const pressed = !isPressed
    button.setAttribute('aria-pressed', pressed)
    icon.setAttribute('name', pressed ? 'heart-solid' : 'heart')
  })
</script>
```

Rather than modifying the icon DOM, both icons could be rendered and only one displays, with CSS. This is fine for simple cases, but it doesn't scale well.

```html
<style>
  .favorite[aria-pressed="true"] .favorite__icon:not([name="heart"]) {
    display: none;
  }
  .favorite[aria-pressed="false"] .favorite__icon:not([name="heart-solid"]) {
    display: none;
  }
</style>

<button aria-pressed="true" class="favorite" id="favorite-button">
  <rvt-icon class="favorite__icon" name="heart-solid"></rvt-icon>
  <rvt-icon class="favorite__icon" name="heart"></rvt-icon>
  Favorite
</button>

<script>
  const button = document.getElementById('favorite-button')
  button.addEventListener('click', () => {
    const pressed = button.getAttribute('aria-pressed') === 'true'
    button.setAttribute('aria-pressed', !pressed)
  })
</script>
```

Now, by using CSS variables with the `rvt-icon` element, the icon can change with CSS against a single DOM element. This solution is a better separation of concerns and keeps all parts of the code lean.

```html
<style>
  .favorite[aria-pressed="true"] .favorite__icon {
    --rvt-icon: var(--heart);
  }
  .favorite[aria-pressed="false"] .favorite__icon {
    --rvt-icon: var(--heart-solid);
  }
</style>

<button aria-pressed="true" class="favorite" id="favorite-button">
  <rvt-icon class="favorite__icon"></rvt-icon>
  Favorite
</button>

<script>
  const button = document.getElementById('favorite-button')
  button.addEventListener('click', () => {
    const pressed = button.getAttribute('aria-pressed') === 'true'
    button.setAttribute('aria-pressed', !pressed)
  })
</script>
```

## 5. Expand documentation

Documentation has expanded to better serve designers, developers, and product teams.

- The [Rivet icons website](https://indiana-university.github.io/rivet-icons/) has been completely redesigned. Each icon now has a dedicated page, making it easier to share, copy, and download specific icons.
- The [readme](https://github.com/indiana-university/rivet-icons#readme) outlines accessibility considerations, ways to incorporate icons in the build process, how to render icons, and how to request or contribute a new icon.
- [Webpack](https://webpack.js.org/) and [React](https://reactjs.org/) are popular tools for building IU software. The [`rivet-icons-webpack-react` project](https://github.com/basham/rivet-icons-webpack-react) is a guide for developers that demonstrates how to integrate this new icon set into a Webpack build process and render icons within a React app.

## Conclusion

This work was made possible by contributions and feedback from numerous designers, developers, and accessibility experts throughout the IU communities. Thank you.

To provide feedback, please post a comment to the [Rivet GitHub Discussions forum](https://github.com/indiana-university/rivet-source/discussions/).
