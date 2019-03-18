/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

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
  }
};
