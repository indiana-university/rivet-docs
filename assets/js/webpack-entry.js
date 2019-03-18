/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

/*
    swap vue.min out for vue if you need vue devtools
*/
const plugins = require("./plugins");
const polyfills = require("./polyfills");

/**
 * Initialize polyfils here.
 */

 /**
  * Polyfills to add functionality to IE.
  */
polyfills.forEachPolyfill();

/**
 * One-off scripts for random sutff. See 'plugins.js'
 */

// Third-party libraries
plugins.clipboardInit();

/**
 * Site-specific DOM scripting - Any DOM manipulation stuff
 * MUST come after the main Vue instance is initialized because
 * of Vue's virtual DOM implementation.
 */
plugins.createCopyright("#year");
plugins.copyButtonConfirm("[data-clipboard-target]", 1500);
plugins.setIndeterminate("#checkbox-indeterminate");
plugins.stickySupportForm();

// Custom analytics event tracking
plugins.analyticsTracking();

console.log("Enjoy using Rivet and let us know if you have any questions!");
