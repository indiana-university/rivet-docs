/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 *
 * @param {String} el
 * Accepts a CSS selector where date gets injected on the client.
 */
export function createCopyright(el) {
  let year = document.querySelector(el)
  if (year == null) return
  let currentYear = new Date().getFullYear()
  year.textContent = currentYear
}

/**
 *
 * @param {String} checkEl
 * Accepts a CSS selector
 */
export function setIndeterminate(checkEl) {
  let indCheck = document.querySelector(checkEl)
  // If its not the checkbox docs page bail.
  if (indCheck == null) return
  // Set the demo checkbox.
  indCheck.indeterminate = true
}

export function copyButtonConfirm(selector, duration) {
  document.addEventListener('click', event => {
    let copyButton = event.target.closest(selector)

    if (!copyButton) return

    const preCopyText = 'Copy'
    const postCopyText = 'Copied!'
    const successClass = 'rvt-button--success'

    const toggleButtonState = (buttonElement, text) => {
      buttonElement.innerHTML = text
      buttonElement.classList.toggle(successClass)
    }

    toggleButtonState(copyButton, postCopyText)

    setTimeout(function () {
      toggleButtonState(copyButton, preCopyText)
    }, duration)
  })
}
