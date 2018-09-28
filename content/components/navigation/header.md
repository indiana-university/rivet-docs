---
title: "Header"
description: "The Rivet header provides consistent branding and flexible navigation layout for your application."
requiresJs: true
status: "Ready"
methods:
    -
        title: "Drawer.init(context)"
        description: |
            - Initializes the `Drawer` component
            - Accepts an optional DOM element. If no element is provided in the argument it defaults to the `document` element.
            - NOTE: the `init()` method is called automatically when `rivet.js` is loaded.
    -
        title: "Drawer.destroy(context)"
        description: |
            - Destroys any currently initialized Drawer and removes its event listeners.
            - Accepts an optional DOM element. If no element is provided in the argument, it defaults to the `document` element. **NOTE**: the optional `context` argument only needs to be passed into `.destroy()` if a DOM element was passed into the `.init()` method. If so, it must be the DOM element that was passed into `.init()` when the Drawer was initialized.
    -
        title: "Drawer.open(id, callback)"
        description: |
            - `id` - The unique id of the Drawer. This corresponds to the value `data-drawer-toggle`/`id` attributes of the Drawer you want to **open**.
    -
        title: "Drawer.close(id, callback)"
        description: |
            - `id` - The unique id of the Drawer. This corresponds to the value `data-drawer-toggle`/`id` attributes of the Drawer you want to **close**.
    -
        title: "Drawer.toggle(id, callback)"
        description: |
            - Sets the Drawer to the **opposite** of its current state. For example, if it is open/visible, calling the `Drawer.toggle(id)` method will close the drawer it's called on and vice versa.
            - `id` the unique id of the Drawer you want to toggle
            - `callback` an optional callback function that is executed after the Drawer is toggled.
events:
    -
        title: "drawerOpen"
        description: |
            Emitted when the Drawer is opened (using the `Drawer.open()` method, or the `data-drawer-toggle` attribute). The value of the modal `data-drawer-toggle` attribute is also passed along (if it exists) via the custom event’s detail property and is available to use in your scripts as `event.detail.name()`
    -
        title: "drawerClose"
        description: |
            Emitted when the Drawer is closed (using the `Drawer.close()` method, or the `data-drawer-toggle` attribute). The value of the modal `data-drawer-toggle` attribute is also passed along (if it exists) via the custom event’s detail property and is available to use in your scripts as `event.detail.name()`
---
<div class="rvt-alert rvt-alert--message rvt-m-bottom-md">
    <h2 class="rvt-alert__title">Header changes in Rivet 0.5.0</h2>
    <p class="rvt-alert__message">We made some significant markup changes to the header in Rivet’s 0.5.0 release. The biggest change: The dropdown in the header now uses button elements to toggle dropdown. (Previously it used anchor elements.) We also replaced the dropdown toggle’s background images with inline SVGs. Finally, we updated its data attribute. <a href="../../../blog/0.5/#header-updates">Learn how to make the necessary changes</a>.</p>
</div>

## Base header
The base header provides consistent branding in a condensed space. It replaces the common text “Indiana University” with a more useful link to your application’s default view. The base header is the bare minimum version of the header that **must be included in your application**.

- [Identity menu extension](#header-with-identity-menu)
- [Main navigation extension](#header-with-main-navigation)

{{< example lang="html" >}}<header class="rvt-header" role="banner">
    <a class="rvt-skip-link" href="#main-content">Skip to content</a>
    <div class="rvt-header__trident">
        <svg role="img" class="rvt-header__trident-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48" aria-describedby="iu-logo">
            <title id="iu-logo">Indiana University Logo</title>
            <rect width="41" height="48" fill="#900"/>
            <polygon points="24.59 12.64 24.59 14.98 26.34 14.98 26.34 27.78 22.84 27.78 22.84 10.9 24.59 10.9 24.59 8.57 16.41 8.57 16.41 10.9 18.16 10.9 18.16 27.78 14.66 27.78 14.66 14.98 16.41 14.98 16.41 12.64 8.22 12.64 8.22 14.98 9.97 14.98 9.97 30.03 12.77 33.02 18.16 33.02 18.16 36.52 16.41 36.52 16.41 39.43 24.59 39.43 24.59 36.52 22.84 36.52 22.84 33.02 28 33.02 31.01 30.03 31.01 14.98 32.78 14.98 32.78 12.64 24.59 12.64" fill="#fff"/>
        </svg>
    </div>
    <span class="rvt-header__title">
        <a href="#0">Application Title</a>
    </span>
</header>
{{< /example >}}

### Accessibility
**All versions** of the Rivet header should include a [skip link](#skip-navigation-link) that is only visible when in focus and that links via an `id` attribute to the `<main>` element of you application. See the skip link example for more details on implementation.

### Header extensibility
The base header can be extended to fit the navigation needs of your application by using a handful of smaller sub-components and modifier CSS classes.

## Header with identity menu
The inclusion of an avatar and username, or only username are both appropriate choices. When your application has multiple user functions consider including the dropdown menu. When there is only one user function consider replacing the carat with a bar followed by the single function. (example:  username | Log out). On mobile, this item collapses into the side menu above all other options.

{{< example lang="html" >}}<header class="rvt-header" role="banner">
    <a class="rvt-skip-link" href="#main-content">Skip to content</a>
    <div class="rvt-header__trident">
        <svg role="img" alt="" class="rvt-header__trident-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48" aria-describedby="iu-logo">
            <title id="iu-logo">Indiana University Logo</title>
            <rect width="41" height="48" fill="#900"/>
            <polygon points="24.59 12.64 24.59 14.98 26.34 14.98 26.34 27.78 22.84 27.78 22.84 10.9 24.59 10.9 24.59 8.57 16.41 8.57 16.41 10.9 18.16 10.9 18.16 27.78 14.66 27.78 14.66 14.98 16.41 14.98 16.41 12.64 8.22 12.64 8.22 14.98 9.97 14.98 9.97 30.03 12.77 33.02 18.16 33.02 18.16 36.52 16.41 36.52 16.41 39.43 24.59 39.43 24.59 36.52 22.84 36.52 22.84 33.02 28 33.02 31.01 30.03 31.01 14.98 32.78 14.98 32.78 12.64 24.59 12.64" fill="#fff"/>
        </svg>
    </div>
    <span class="rvt-header__title">
        <a href="#0">Application Title</a>
    </span>
    <div class="rvt-header__controls">
        <div class="rvt-header-id">
            <div href="#0" class="rvt-header-id__profile">
                <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                <span class="rvt-header-id__user">rswanson</span>
            </div>
            <a href="#0" class="rvt-header-id__log-out">
                Log out
            </a>
        </div>
        <button class="rvt-drawer-button" aria-haspopup="true" aria-expanded="false" data-drawer-toggle="mobile-drawer">
            <span class="sr-only">Toggle menu</span>
            <svg role="img" alt="" class="rvt-drawer-button-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="currentColor">
                    <path d="M15,3H1A1,1,0,0,1,1,1H15a1,1,0,0,1,0,2Z"/>
                    <path d="M15,9H1A1,1,0,0,1,1,7H15a1,1,0,0,1,0,2Z"/>
                    <path d="M15,15H1a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z"/>
                </g>
            </svg>
            <svg role="img" alt="" class="rvt-drawer-button-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
        </button>
    </div>
    <div class="rvt-drawer" aria-hidden="true" id="mobile-drawer">
        <div class="rvt-header-id rvt-header-id--drawer">
            <div class="rvt-header-id__profile rvt-header-id__profile--drawer p-all-sm">
                <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                <span class="rvt-header-id__user">rswanson</span>
                <a href="#0" class="rvt-header-id__log-out">
                    Log out
                </a>
            </div>
        </div>
        <button class="rvt-drawer__bottom-close">Close nav</button>
    </div>
</header>
{{< /example >}}

## Header with main navigation
These lists work best for priority tasks and internal navigation. Consider including **no more than five items** in this list. These items can optionally also include nested structural navigation as a Rivet standard styled dropdown on desktop. On mobile these items collapse into the side menu, below the identity row and above the side menu options.

{{< example lang="html" >}}<header class="rvt-header" role="banner">
    <a class="rvt-skip-link" href="#main-content">Skip to content</a>
    <!-- Trident -->
    <div class="rvt-header__trident">
        <svg role="img" alt="" class="rvt-header__trident-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48" aria-describedby="iu-logo">
            <title id="iu-logo">Indiana University Logo</title>
            <rect width="41" height="48" fill="#900"/>
            <polygon points="24.59 12.64 24.59 14.98 26.34 14.98 26.34 27.78 22.84 27.78 22.84 10.9 24.59 10.9 24.59 8.57 16.41 8.57 16.41 10.9 18.16 10.9 18.16 27.78 14.66 27.78 14.66 14.98 16.41 14.98 16.41 12.64 8.22 12.64 8.22 14.98 9.97 14.98 9.97 30.03 12.77 33.02 18.16 33.02 18.16 36.52 16.41 36.52 16.41 39.43 24.59 39.43 24.59 36.52 22.84 36.52 22.84 33.02 28 33.02 31.01 30.03 31.01 14.98 32.78 14.98 32.78 12.64 24.59 12.64" fill="#fff"/>
        </svg>
    </div>
    <!-- App title -->
    <span class="rvt-header__title">
        <a href="#">Application Title</a>
    </span>
    <!-- Wrapper for header interactive elements -->
    <div class="rvt-header__controls">
        <!-- Main inline nav element -->
        <nav class="rvt-header__main-nav" role="navigation">
            <ul>
                <li>
                    <a href="#">Nav one</a>
                </li>
                <li>
                    <div class="rvt-dropdown">
                        <button class="rvt-dropdown__toggle" data-dropdown-toggle="dropdown-1" aria-haspopup="true" aria-expanded="false">
                            <span class="rvt-dropdown__toggle-text">Nav two</span>
                            <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <title>Dropdown icon</title>
                                <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"
                                />
                            </svg>
                        </button>
                        <div class="rvt-dropdown__menu" id="dropdown-1" role="menu" aria-hidden="true">
                            <a href="#">Item one</a>
                            <a href="#">Item two</a>
                            <a href="#">Item three</a>
                            <a href="#">Item four</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" aria-current="page">Nav three</a>
                </li>
                <li>
                    <div class="rvt-dropdown">
                        <button class="rvt-dropdown__toggle" data-dropdown-toggle="dropdown-2" aria-haspopup="true" aria-expanded="false">
                            <span class="rvt-dropdown__toggle-text">Nav four</span>
                            <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
                            </svg>
                        </button>
                        <div class="rvt-dropdown__menu" id="dropdown-2" role="menu" aria-hidden="true">
                            <a href="#">Item one</a>
                            <a href="#">Item two</a>
                            <a href="#">Item three</a>
                            <a href="#">Item four</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- ID menu w/ dropdown -->
        <div class="rvt-header-id">
            <div class="rvt-dropdown">
                <button class="rvt-header-id__profile rvt-header-id__profile--has-dropdown rvt-dropdown__toggle" data-dropdown-toggle="id-dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                    <span class="rvt-header-id__user">rswanson</span>
                    <svg role="img" alt="" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
                    </svg>
                </button>
                <div class="rvt-dropdown__menu rvt-header-id__menu" id="id-dropdown" aria-hidden="true">
                    <a href="#">Account settings</a>
                    <a href="#">Admin task one</a>
                    <a href="#">Admin task two</a>
                    <div role="group" aria-label="User actions">
                        <a href="">Log out</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Drawer close button - shows on small screens -->
        <button class="rvt-drawer-button" aria-haspopup="true" aria-expanded="false" data-drawer-toggle="mobile-drawer-2">
            <span class="sr-only">Toggle menu</span>
            <svg role="img" alt="" class="rvt-drawer-button-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="currentColor">
                    <path d="M15,3H1A1,1,0,0,1,1,1H15a1,1,0,0,1,0,2Z"/>
                    <path d="M15,9H1A1,1,0,0,1,1,7H15a1,1,0,0,1,0,2Z"/>
                    <path d="M15,15H1a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z"/>
                </g>
            </svg>
            <svg role="img" alt="" class="rvt-drawer-button-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
        </button>
    </div>
    <!--
        Drawer - small screens only
        NOTE: If we are going to give people the option to use the drawer
        on desktop as well, a combo of duplicating markup and showing/hiding
        is probably the best way to handle that kind of flexibility.
        We'll just need to be clear about it in the documentation.
    -->
    <div class="rvt-drawer" aria-hidden="true" id="mobile-drawer-2">
        <!-- Drawer nav -->
        <nav class="rvt-drawer__nav" role="navigation">
            <ul>
                <li class="has-children">
                    <button class="rvt-header-id__profile rvt-header-id__profile--drawer" data-subnav-toggle="subnav-id" aria-haspopup="true" aria-expanded="false">
                        <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                        <span class="rvt-header-id__user rvt-header-id__user--has-dropdown">rswanson</span>
                    </button>
                    <div id="subnav-id" role="menu" aria-hidden="true">
                        <ul>
                            <li>
                                <a href="#">Account settings</a>
                            </li>
                            <li>
                                <a href="#">Admin task one</a>
                            </li>
                            <li>
                                <a href="#">Admin task two</a>
                            </li>
                            <li>
                                <a href="">Log out</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Nav one</a>
                </li>
                <li class="has-children">
                    <button data-subnav-toggle="subnav-1" aria-haspopup="true" aria-expanded="false">Nav two</button>
                    <div id="subnav-1" role="menu" aria-hidden="true">
                        <ul>
                            <li>
                                <a href="#">Subnav one</a>
                            </li>
                            <li>
                                <a href="#">Subnav two</a>
                            </li>
                            <li>
                                <a href="#">Subnav three</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" aria-current="page">Nav three</a>
                </li>
                <li class="has-children">
                    <button data-subnav-toggle="subnav-2" aria-haspopup="true" aria-expanded="false">Nav four</button>
                    <div id="subnav-2" role="menu" aria-hidden="true">
                        <ul>
                            <li>
                                <a href="#">Subnav one</a>
                            </li>
                            <li>
                                <a href="#">Subnav two</a>
                            </li>
                            <li>
                                <a href="#">Subnav three</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <button class="rvt-drawer__bottom-close">Close nav</button>
        </nav>
    </div>
</header>
{{< /example >}}

### Navigation current state
To indicate the current page in the navigation you can add `aria-current="page"` to the link in the main nav and/or the drawer for that page. Using `aria-current` informs screenreaders that the user is focused on the link to the current page.

{{< code >}}<nav class="rvt-header__main-nav" role="navigation">
    <ul>
        <li><a href="#0">Nav one</a></li>
        <!-- aria-current also applies visual styling -->
        <li><a href="#0" aria-current="page">Nav two</a></li>
        <li><a href="#0">Nav three</a></li>
        <li><a href="#0">Nav four</a></li>
    </ul>
</nav>
{{< /code >}}

### Implementation notes
The main navigation extension (`.rvt-header__main-nav`) will always need to be used with the drawer (`.rvt-drawer`) component. To allow for maximum flexibility, the markup in `.rvt-header__main-nav` needs to be duplicated inside of the `.rvt-drawer__nav` inside of the drawer. Starting at medium screen sizes (1080px–740px) and smaller the main nav extension is hidden using `display: none;` and the the `.rvt-drawer__nav` (with duplicate navigation) is shown using `display: block;`.

### Main navigation with dropdowns
To create a nested navigation structure you can use [Rivet's standard dropdown menus]({{< ref "components/navigation/dropdown.md" >}}). Dropdown menus can be nested inside of any of the main navigation `li` elements and implemented using the appropriate data attributes on the dropdown.

### Nested navigation inside drawer
To create a nested navigation structure, you can use Rivet's dropdown menus along with the Rivet drawer nav. Dropdown menus can be nested inside of the Rivet drawer navigation `li` and accompanying `<div role="menu">` (wrapping a nested `<ul>`) elements using the appropriate data attributes on the dropdown. Set the data attributes using the `data-subnav-toggle` attribute on the `button` element for the `li` navigation item. Then on each `div` sub navigation element set the id to the matching `data-subnav-toggle`.

Additionally, any navigation item that will contain sub navigation items needs the `has-children` class for appropriate styling in the dropdown menu. Lastly, each `<div>` sub navigation item needs`aria-hidden` set to true to hide the element until the dropdown menu toggle is clicked.

{{< code >}}<div class="rvt-drawer" aria-hidden="true" id="mobile-drawer-3">
    <!-- Drawer nav -->
    <nav class="rvt-drawer__nav" role="navigation">
        <ul>
            <li class="has-children">
                <button class="rvt-header-id__profile rvt-header-id__profile--drawer" data-subnav-toggle="subnav-id" aria-haspopup="true" aria-expanded="false">
                    <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                    <span class="rvt-header-id__user rvt-header-id__user--has-dropdown">rswanson</span>
                </button>
                <div id="subnav-id" role="menu" aria-hidden="false">
                    <ul>
                        <li>
                            <a href="#">Account settings</a>
                        </li>
                        <li>
                            <a href="#">Admin task one</a>
                        </li>
                        <li>
                            <a href="#">Admin task two</a>
                        </li>
                        <li>
                            <a href="">Log out</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href="#0">Nav one</a></li>
            <li class="has-children">
                <button data-subnav-toggle="subnav-1" aria-haspopup="true" aria-expanded="false">Nav two</button>
                <div id="subnav-1" role="menu" aria-hidden="true">
                    <ul>
                        <li>
                            <a href="#">Subnav one</a>
                        </li>
                        <li>
                            <a href="#">Subnav two</a>
                        </li>
                        <li>
                            <a href="#">Subnav three</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href="#0">Nav three</a></li>
            <li class="has-children">
                <button data-subnav-toggle="subnav-2" aria-haspopup="true" aria-expanded="false">Nav four</button>
                <div id="subnav-2" role="menu" aria-hidden="true">
                    <ul>
                        <li>
                            <a href="#">Subnav one</a>
                        </li>
                        <li>
                            <a href="#">Subnav two</a>
                        </li>
                        <li>
                            <a href="#">Subnav three</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <button class="rvt-drawer__bottom-close">Close nav</button>
    </nav>
</div>
{{< /code >}}

### Identity menu dropdown
When your application has multiple user-specific functions (e.g. "Account settings") you can wrap the contents of the `.rvt-header-id` extension in a standard Rivet dropdown component. Note that you'll need to add a `--has-dropdown` modifier class to the `.rvt-header-id__profile` element to remove the default styling.

{{< code >}}<!-- ID menu w/ dropdown -->
<div class="rvt-header-id">
    <div class="rvt-dropdown">
        <button class="rvt-header-id__profile rvt-header-id__profile--has-dropdown rvt-dropdown__toggle" data-dropdown-toggle="id-dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
            <span class="rvt-header-id__user">rswanson</span>
            <svg role="img" alt="" class="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
            </svg>
        </button>
        <div class="rvt-dropdown__menu rvt-header-id__menu" id="id-dropdown" aria-hidden="true">
            <a href="#">Account settings</a>
            <a href="#">Admin task one</a>
            <a href="#">Admin task two</a>
            <div role="group" aria-label="User actions">
                <a href="">Log out</a>
            </div>
        </div>
    </div>
</div>
{{< /code >}}

## Light background variant
For applications that use a light gray background/stage, the header can also be used with the modifier class `.rvt-header--light`. This will give the header a white background color to help provide contrast against the stage.

If you choose to use a light gray background for your app we recommend a gray no darker than `#f7f7f7`.

{{< code >}}<header class="rvt-header rvt-header--light" role="banner">
    Header markup...
</header>
{{< /code >}}

## Skip navigation link
Users that browse websites using a keyboard only need a fast way to skip to the main content of an application without having to tab through each navigation item. **All versions** of the Rivet header should include a skip link that is only visible when in focus. The skip link should be the first focus-able element in the DOM and link via an `id` attribute to the `<main>` element of you application.

## JavaScript API (Drawer)
The Rivet header uses JavaScript to toggle the visibility of the "Drawer" that contains navigation on smaller screens. The Rivet `Drawer` JavaScript component exposes a few APIs that you can use in your own scripts.

{{< apidocs type="methods" >}}{{< /apidocs >}}

### Custom events

{{< apidocs type="events" >}}{{< /apidocs >}}

#### Custom event example
Note here that the `event.detail.name()` property of the `customEvent` object is a function that returns a String. Read more about custom events on the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent).

{{< code lang="js" >}}// Listen for a custom "drawerOpen" event
document.addEventListener('drawerOpen', event => {
  if (event.detail.name() === 'my-drawer') {
    alert('Hey, you opened the drawer!')
  }
  // Maybe send some data via an AJAX request, etc...
}, false);
{{< /code >}}
