/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const { dest, src } = require("gulp");
const scss = require("gulp-sass");

module.exports = {
  sass() {
    return src("assets/scss/**/*.scss")
    .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
    .pipe(dest("static/css/"));
  }
}