/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const gulp = require("gulp");
const hugoIndexer = require("./search-indexer.js");

gulp.task("index", function() {
  var indexer = new hugoIndexer();
  indexer.index();
});
