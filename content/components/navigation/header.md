---
title: "Header"
description: "The Rivet header has provides consistent branding and flexible navigation layout for your application."
requiresJs: true
status: "Beta"
---

## Base header
The base header provides consistent branding in a condensed space. It replaces the common text “Indiana University” with a more useful link to your application’s default view. The base header is the bare minimum version of the header that **must be included in your application**.

- [Identity menu extension](#header-with-identity-menu)
- [Main navigation extension](#header-with-main-navigation)

{{< example lang="html" >}}<header class="rvt-header" role="banner">
    <a class="rvt-skip-link" href="#main-content">Skip to content</a>
    <div class="rvt-header__trident">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="70" viewBox="0 0 60 70" aria-labelledby="iu-logo">
            <title id="iu-logo">Indiana University</title>
            <rect width="60" height="70" fill="#900"/>
            <polygon points="35.96 18.44 35.96 21.84 38.52 21.84 38.52 40.51 33.41 40.51 33.41 15.9 35.96 15.9 35.96 12.5 24.04 12.5 24.04 15.9 26.58 15.9 26.58 40.51 21.48 40.51 21.48 21.84 24.04 21.84 24.04 18.44 12.09 18.44 12.09 21.84 14.65 21.84 14.65 43.79 18.72 48.15 26.58 48.15 26.58 53.26 24.04 53.26 24.04 57.5 35.96 57.5 35.96 53.26 33.41 53.26 33.41 48.15 40.93 48.15 45.33 43.79 45.33 21.84 47.91 21.84 47.91 18.44 35.96 18.44" fill="#fff"/>
        </svg>
    </div>
    <span class="rvt-header__title">
        <a href="#">Application Title</a>
    </span>
</header>
{{< /example >}}

### Accessibility
**All versions** of the Rivet header should include a [skip link](#skip-navigation-link) that is only visible when in focus and that links via an `id` attribute to the `<main>` element of you application. See the skip link example for more details on implementation.

### Header extensibility
The base header can be extended to fit the navigation needs of your application by using a handful of smaller sub-components and modifier CSS classes.

## Header with identity menu
The inclusion of an avatar and username, or only username are both appropriate choices. When your application has multiple user functions consider including the dropdown menu. When there is only one user function consider replacing the carat with a bar followed by the single function. (example:  username | Log out). On mobile this item collapses into the side menu above all other options.

{{< example lang="html" >}}<header class="rvt-header" role="banner">
    <a class="rvt-skip-link" href="#main-content">Skip to content</a>
    <div class="rvt-header__trident">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="70" viewBox="0 0 60 70" aria-labelledby="iu-logo">
            <title id="iu-logo">Indiana University</title>
            <rect width="60" height="70" fill="#900"/>
            <polygon points="35.96 18.44 35.96 21.84 38.52 21.84 38.52 40.51 33.41 40.51 33.41 15.9 35.96 15.9 35.96 12.5 24.04 12.5 24.04 15.9 26.58 15.9 26.58 40.51 21.48 40.51 21.48 21.84 24.04 21.84 24.04 18.44 12.09 18.44 12.09 21.84 14.65 21.84 14.65 43.79 18.72 48.15 26.58 48.15 26.58 53.26 24.04 53.26 24.04 57.5 35.96 57.5 35.96 53.26 33.41 53.26 33.41 48.15 40.93 48.15 45.33 43.79 45.33 21.84 47.91 21.84 47.91 18.44 35.96 18.44" fill="#fff"/>
        </svg>
    </div>
    <span class="rvt-header__title">
        <a href="#">Application Title</a>
    </span>
    <div class="rvt-header__controls">
        <div class="rvt-header-id">
            <div href="#" class="rvt-header-id__profile">
                <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                <span class="rvt-header-id__user">rswanson</span>
            </div>
            <a href="#" class="rvt-header-id__log-out">
                Log out
            </a>
        </div>
        <button class="rvt-drawer-button" aria-haspopup="true" aria-expanded="false" data-drawer-trigger="mobile-drawer-id">
            <span class="sr-only">Menu</span>
            <svg class="rvt-drawer-button-open" aria-labelledby="open-icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                <title id="open-icon">Open</title>
                <g>
                    <line x1="24.5" y1="25.38" x2="45.5" y2="25.38" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                    <line x1="24.5" y1="35" x2="45.5" y2="35" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                    <line x1="24.5" y1="44.62" x2="45.5" y2="44.62" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                </g>
            </svg>
            <svg class="rvt-drawer-button-close" aria-labelledby="close-icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                <title id="close-icon">Close</title>
                <line x1="27.58" y1="27.58" x2="42.42" y2="42.42" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                <line x1="42.42" y1="27.58" x2="27.58" y2="42.42" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
            </svg>
        </button>
    </div>
    <div class="rvt-drawer" aria-hidden="true" id="mobile-drawer-id">
        <div class="rvt-header-id rvt-header-id--drawer">
            <div class="rvt-header-id__profile rvt-header-id__profile--drawer p-all-sm">
                <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                <span class="rvt-header-id__user">rswanson</span>
                <a href="#" class="rvt-header-id__log-out">
                    Log out
                </a>
            </div>
        </div>
        <a href="#" class="rvt-drawer__bottom-close">Close nav</a>
    </div>
</header>
{{< /example >}}

## Header with main navigation
These lists work best for priority tasks and internal navigation. Consider including **no more than five items** in this list. These items can optionally also include nested structural navigation as a Rivet standard styled dropdown on desktop. On mobile these items collapse into the side menu, below the identity row and above the side menu options.

{{< example lang="html" >}}
<header class="rvt-header" role="banner">
    <a class="rvt-skip-link" href="#main-content">Skip to content</a>
    <!-- Trident -->
    <div class="rvt-header__trident">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="70" viewBox="0 0 60 70" aria-labelledby="iu-logo">
            <title id="iu-logo">Indiana University</title>
            <rect width="60" height="70" fill="#900"/>
            <polygon points="35.96 18.44 35.96 21.84 38.52 21.84 38.52 40.51 33.41 40.51 33.41 15.9 35.96 15.9 35.96 12.5 24.04 12.5 24.04 15.9 26.58 15.9 26.58 40.51 21.48 40.51 21.48 21.84 24.04 21.84 24.04 18.44 12.09 18.44 12.09 21.84 14.65 21.84 14.65 43.79 18.72 48.15 26.58 48.15 26.58 53.26 24.04 53.26 24.04 57.5 35.96 57.5 35.96 53.26 33.41 53.26 33.41 48.15 40.93 48.15 45.33 43.79 45.33 21.84 47.91 21.84 47.91 18.44 35.96 18.44" fill="#fff"/>
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
                <li><a href="#">Nav one</a></li>
                <li>
                    <div class="dropdown">
                        <a class="dropdown__trigger" href="#" data-dropdown-trigger="dropdown-1" aria-haspopup="true" aria-expanded="false">
                            Nav two
                        </a>
                        <div class="dropdown__menu" id="dropdown-1" aria-hidden="true">
                            <a href="#">Subnav One</a>
                            <a href="#">Subnav Two</a>
                            <a href="#">Subnav Three</a>
                        </div>
                    </div>
                </li>
                <li><a href="#">Nav three</a></li>
            </ul>
        </nav>
        <!-- ID menu w/ dropdown -->
        <div class="rvt-header-id">
            <div class="dropdown">
                <a href="#" class="rvt-header-id__profile rvt-header-id__profile--has-dropdown dropdown__trigger" data-dropdown-trigger="id-dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                    <span class="rvt-header-id__user">rswanson</span>
                </a>
                <div class="dropdown__menu dropdown__menu--right" id="id-dropdown" aria-hidden="true">
                    <a href="#">Account settings</a>
                    <a href="#">Admin task one</a>
                    <a href="#">Admin task two</a>
                    <a href="">Log out</a>
                </div>
            </div>
        </div>
        <!-- Drawer close button - shows on small screens -->
        <button class="rvt-drawer-button" aria-haspopup="true" aria-expanded="false" data-drawer-trigger="mobile-drawer">
            <span class="sr-only">Menu</span>
            <svg class="rvt-drawer-button-open" aria-labelledby="open-icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                <title id="open-icon">Open</title>
                <g>
                    <line x1="24.5" y1="25.38" x2="45.5" y2="25.38" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                    <line x1="24.5" y1="35" x2="45.5" y2="35" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                    <line x1="24.5" y1="44.62" x2="45.5" y2="44.62" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                </g>
            </svg>
            <svg class="rvt-drawer-button-close" aria-labelledby="close-icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                <title id="close-icon">Close</title>
                <line x1="27.58" y1="27.58" x2="42.42" y2="42.42" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                <line x1="42.42" y1="27.58" x2="27.58" y2="42.42" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
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
    <div class="rvt-drawer" aria-hidden="true" id="mobile-drawer">
        <!-- Drawer nav -->
        <nav class="rvt-drawer__nav" role="navigation">
            <ul>
                <li class="has-children">
                    <a href="#" class="rvt-header-id__profile rvt-header-id__profile--drawer" data-subnav-trigger="subnav-id" aria-haspopup="true" aria-expanded="false">
                        <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                        <span class="rvt-header-id__user rvt-header-id__user--has-dropdown">rswanson</span>
                    </a>
                    <ul id="subnav-id" aria-hidden="true">
                        <li><a href="#">Account settings</a></li>
                        <li><a href="#">Admin task one</a></li>
                        <li><a href="#">Admin task two</a></li>
                        <li><a href="">Log out</a></li>
                    </ul>
                </li>
                <li><a href="#">Nav one</a></li>
                <li class="has-children">
                    <a href="#" data-subnav-trigger="subnav-1" aria-haspopup="true" aria-expanded="false">Nav two</a>
                    <ul id="subnav-1" aria-hidden="true">
                        <li><a href="#">Subnav one</a></li>
                        <li><a href="#">Subnav two</a></li>
                        <li><a href="#">Subnav three</a></li>
                    </ul>
                </li>
                <li><a href="#">Nav three</a></li>
                <li class="has-children">
                    <a href="#" data-subnav-trigger="subnav-2" aria-haspopup="true" aria-expanded="false">Nav four</a>
                    <ul id="subnav-2" aria-hidden="true">
                        <li><a href="#">Subnav one</a></li>
                        <li><a href="#">Subnav two</a></li>
                        <li><a href="#">Subnav three</a></li>
                    </ul>
                </li>
            </ul>
            <a href="#" class="rvt-drawer__bottom-close">Close nav</a>
        </nav>
    </div>
</header>
{{< /example >}}

### Implementation notes
The main navigation extension (`.rvt-header__main-nav`) will always need to be used with the drawer (`.rvt-drawer`) component. To allow for maximum flexibility, the markup in `.rvt-header__main-nav` needs to be duplicated inside of the `.rvt-drawer__nav` inside of the drawer. Starting at medium screen sizes (1080px–740px) and smaller the main nav extension is hidden using `display: none;` and the the `.rvt-drawer__nav` (with duplicate navigation) is shown using `display: block;`.

### Main navigation with dropdowns
To create a nested navigation structure you can use Rivet's standard dropdown menus. Dropdown menus can be nested inside of any of the main navigation `li` elements and implemented using the appropriate data attributes on the dropdown.

### Nested navigation inside drawer
To create a nested navigation 

{{< code >}}<!-- Drawer with nested nav -->
<div class="rvt-drawer" aria-hidden="true" id="mobile-drawer">
    <!-- Drawer nav -->
    <nav class="rvt-drawer__nav" role="navigation">
        <ul>
            <li class="has-children">
                <a href="#" class="rvt-header-id__profile rvt-header-id__profile--drawer" data-subnav-trigger="subnav-id" aria-haspopup="true" aria-expanded="false">
                    <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
                    <span class="rvt-header-id__user rvt-header-id__user--has-dropdown">rswanson</span>
                </a>
                <ul id="subnav-id" aria-hidden="true">
                    <li><a href="#">Account settings</a></li>
                    <li><a href="#">Admin task one</a></li>
                    <li><a href="#">Admin task two</a></li>
                    <li><a href="">Log out</a></li>
                </ul>
            </li>
            <li><a href="#">Nav one</a></li>
            <li class="has-children">
                <a href="#" data-subnav-trigger="subnav-1" aria-haspopup="true" aria-expanded="false">Nav two</a>
                <ul id="subnav-1" aria-hidden="true">
                    <li><a href="#">Subnav one</a></li>
                    <li><a href="#">Subnav two</a></li>
                    <li><a href="#">Subnav three</a></li>
                </ul>
            </li>
            <li><a href="#">Nav three</a></li>
            <li class="has-children">
                <a href="#" data-subnav-trigger="subnav-2" aria-haspopup="true" aria-expanded="false">Nav four</a>
                <ul id="subnav-2" aria-hidden="true">
                    <li><a href="#">Subnav one</a></li>
                    <li><a href="#">Subnav two</a></li>
                    <li><a href="#">Subnav three</a></li>
                </ul>
            </li>
        </ul>
        <a href="#" class="rvt-drawer__bottom-close">Close nav</a>
    </nav>
</div>
{{< /code >}}

### Identity menu dropdown
When your application has multiple user-specific functions (e.g. "Account settings") you can wrap the contents of the `.rvt-header-id` extension in a standard Rivet dropdown component. Note that you'll need to add a `--has-dropdown` modifier class to the `.rvt-header-id__profile` element to remove the default styling.

{{< code >}}<!-- ID menu w/ dropdown -->
<div class="rvt-header-id">
    <div class="dropdown">
        <a href="#" class="rvt-header-id__profile rvt-header-id__profile--has-dropdown dropdown__trigger" data-dropdown-trigger="id-dropdown-example" aria-haspopup="true" aria-expanded="false">
            <span class="rvt-header-id__avatar" aria-hidden="true">RS</span>
            <span class="rvt-header-id__user">rswanson</span>
        </a>
        <div class="dropdown__menu dropdown__menu--right" id="id-dropdown-example" aria-hidden="true">
            <a href="#">Account settings</a>
            <a href="#">Admin task one</a>
            <a href="#">Admin task two</a>
            <a href="">Log out</a>
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
Users that browse website using a keyboard only need a fast way to skip to the main content of an application without having to tab through each navigation item. **All versions** of the Rivet header should include a skip link that is only visible when in focus. The skip link should be the first focusable element in the DOM and link via an `id` attribute to the `<main>` element of you application.
