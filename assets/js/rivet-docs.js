/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
  createCopyright,
  setIndeterminate,
  copyButtonConfirm
} from './plugins'

/**
 * One-off scripts for random stuff. See 'plugins.js'
 */

createCopyright('[data-copyright-year]')
copyButtonConfirm('[data-clipboard-target]', 1500)
setIndeterminate('#checkbox-indeterminate')

console.log('Enjoy using Rivet and let us know if you have any questions!')
