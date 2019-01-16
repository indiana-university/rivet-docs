/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("assets/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("static/css/"));
});
