/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const { dest, series, src, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const hugo = require('./tasks/hugo').hugo;
const js = require('./tasks/javascript');
const sass = require('./tasks/css').sass;

function watchFiles(callback) {
  browserSync.init({
    port: 3000,
    server: {
      baseDir: './public/'
    },
    files: ['public/**/*'],
    open: false,
    logLevel: 'silent',
    notify: false
  });

  watch('assets/js/**/*.js', { ignoreInitial: false }, series(js.transpileJS, js.concatJS));
  watch('assets/scss/**/*.scss', { ignoreInitial: false }, sass);
  watch('content/**/*.md');
  watch(
    [
      'layouts/**/*',
      'content/**/*',
      'archetypes/**/*',
      'static/**/*',
      'data/**/*'
    ],
    hugoDev
  );

  callback();
}

function envProd(callback) {
  process.env.NODE_ENV = 'production';
  process.env.HUGO_ENV = 'production';
  callback();
}

function hugoDev(callback) {
  hugo(true);
  callback();
}

function hugoProd() {
  hugo(false);
}

exports.build = series(envProd, sass, js.transpileJS, js.concatJS);

exports.serve = series(hugoDev, watchFiles);
