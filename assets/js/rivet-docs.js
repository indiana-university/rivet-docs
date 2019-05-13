/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { createCopyright, setIndeterminate, stickySupportForm, copyButtonConfirm, analyticsTracking } from './plugins';

/**
 * One-off scripts for random stuff. See 'plugins.js'
 */


createCopyright("#year");
copyButtonConfirm("[data-clipboard-target]", 1500);
setIndeterminate("#checkbox-indeterminate");
stickySupportForm();

// Custom analytics event tracking
analyticsTracking();

console.log("Enjoy using Rivet and let us know if you have any questions!");
