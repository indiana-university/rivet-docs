/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

if (window.telemetrics === undefined) {
  window.telemetrics = (category, action, label, value) => {
    if (label === undefined) {
      label = "";
    }
    if (value === undefined) {
      value = 0;
    }
    if (window.ga) {
      window.ga("send", "event", category, action, label, value);
    }
  };
}
