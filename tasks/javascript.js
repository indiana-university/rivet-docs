/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const { dest, series, src } = require("gulp");
const babel = require('rollup-plugin-babel');
const babelGulp = require("gulp-babel");
const commonJS = require('rollup-plugin-commonjs');
const concat = require("gulp-concat");
const gutil = require("gulp-util");
const resolve = require('rollup-plugin-node-resolve');
const rollup = require('rollup');
const uglify = require("gulp-uglify");


/**
 * gulp.task('transpileJS', () => {
  return rollup.rollup({
    input: 'assets/js/rollup-entry.js',
    plugins: [resolve(), commonJS(), babel({ runtimeHelpers: true })]
  }).then(bundle => {
    return bundle.write({
      file: 'tmp/rollup-entry.js',
      format: 'umd',
      name: 'RivetDocs'
    });
  });
});
 * 
 */

/**
   * gulp.task("js", ["transpileJS"], function() {
    gulp
      .src(["tmp/rollup-entry.js", "node_modules/rivet-uits/js/rivet.js"])
      .pipe(concat("rivet-docs.js"))
      .pipe(uglify())
      .pipe(gulp.dest("./static/js"));
  
    gulp
      .src(["assets/js/telemetrics.js"])
      .pipe(babelGulp())
      .pipe(concat("telemetrics.js"))
      .pipe(uglify())
      .pipe(gulp.dest("./static/js"));
      
    gulp.src('assets/js/highlight.pack.js')
      .pipe(gulp.dest('./static/js'));
  });
   * 
   */

module.exports = {

  transpileJS() {
    return rollup.rollup({
      input: 'assets/js/rollup-entry.js',
      plugins: [resolve(), commonJS(), babel({ runtimeHelpers: true })]
    }).then(bundle => {
      return bundle.write({
        file: 'tmp/rollup-entry.js',
        format: 'umd',
        name: 'RivetDocs'
      });
    });
  },
  
  concatJS(callback) {
    src(["tmp/rollup-entry.js", "node_modules/rivet-uits/js/rivet.js"])
      .pipe(concat("rivet-docs.js"))
      .pipe(uglify())
      .pipe(dest("./static/js"));
  
    src(["assets/js/telemetrics.js"])
      .pipe(babelGulp())
      .pipe(concat("telemetrics.js"))
      .pipe(uglify())
      .pipe(dest("./static/js"));
      
    src('assets/js/highlight.pack.js')
      .pipe(dest('./static/js'));

    callback();
  }

}