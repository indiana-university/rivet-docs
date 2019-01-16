/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const Promise = require("promise-polyfill");

module.exports = {
  /**
   * forEach polyfill that will allow use to use the forEach method
   * on Arrays without destroying all of our JS in IE 11.
   *
   * https://github.com/imagitama/nodelist-foreach-polyfill/blob/master/index.js
   */
  forEachPolyfill() {
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }
  },

  promisePolyfill() {
    // The Promise polyfill
    if (!window.Promise) {
      window.Promise = Promise;
    }
  },

  localStorageAvailable() {
    try {
      var storage = window["localStorage"],
        x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0
      );
    }
  }
};
