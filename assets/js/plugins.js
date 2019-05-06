/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const Clipboard = require('clipboard');

module.exports = {
  /**
   *
   * @param {String} el
   * Accepts a CSS selector where date gets injected on the client.
   */
  createCopyright(el) {
    let year = document.querySelector(el);
    if (year == null) return;
    let currentYear = new Date().getFullYear();
    year.innerHTML = currentYear;
  },

  /**
   *
   * @param {String} checkEl
   * Accepts a CSS selector
   */
  setIndeterminate(checkEl) {
    let indCheck = document.querySelector(checkEl);
    // If its not the checkbox docs page bail.
    if (indCheck == null) return;
    // Set the demo checkbox.
    indCheck.indeterminate = true;
  },

  stickySupportForm() {
    // Stores a reference to the support form element
    var supportToggle = document.querySelector('.rvtd-support');

    // Get the current windown size
    var windowSize = window.innerHeight;

    const checkPosition = () => {
      var scrollPosition = window.pageYOffset;

      var bodyHeight = document.body.offsetHeight;

      if (Math.max(bodyHeight - (scrollPosition + windowSize), 0) < 40) {
        supportToggle.classList.add('rvtd-support--bottom');
      } else {
        supportToggle.classList.remove('rvtd-support--bottom');
      }
    }

    window.addEventListener('scroll', checkPosition, false);
  },

  clipboardInit() {
    /**
     * Initialize copy to clipboard functionality for code snippets
     */
    new Clipboard(".rvtd-example__copy");
    new Clipboard(".rvtd-package-copy");
  },

  copyButtonConfirm(selector, duration) {
    document.addEventListener("click", event => {
      let copyButton = event.target.closest(selector);

      if (!copyButton) return;

      const preCopyText = "Copy";
      const postCopyText = "Copied!";
      const successClass = "rvt-button--success";

      const toggleButtonState = (buttonElement, text) => {
        buttonElement.innerHTML = text;
        buttonElement.classList.toggle(successClass);
      };

      toggleButtonState(copyButton, postCopyText);

      setTimeout(function() {
        toggleButtonState(copyButton, preCopyText);
      }, duration);
    });
  },

  analyticsTracking() {
    // analytics event tracking
    if (window.telemetrics) {
      let eventTriggers = document.querySelectorAll("[data-analytics-action]");
      eventTriggers.forEach(trigger => {
        let action = trigger.dataset.analyticsAction;
        let category = trigger.dataset.analyticsCategory
          ? trigger.dataset.analyticsCategory
          : "click";
        let label = trigger.dataset.analyticsLabel
          ? trigger.dataset.analyticsLabel
          : trigger.href;
        trigger.addEventListener("click", e => {
          window.telemetrics(category, action, label);
        });
      });
    }
  }
};
