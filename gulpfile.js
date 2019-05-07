/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const { dest, series, src, watch } = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync').create();
const hugo = require('./tasks/hugo');
const js = require('./tasks/javascript');
const sass = require('./tasks/css').sass;
const tasks = require('gulp-task-listing');

// Include tasks from .js files in the tasks folder
requireDir('./tasks');

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

function defaultScripts() {
  return tasks.withFilters(null, 'default');
}

function envProd() {
  process.env.NODE_ENV = 'production';
  process.env.HUGO_ENV = 'production';
  hugoProd();
}

function hugoDev(callback) {
  hugo.hugo(true);
  callback();
}

function hugoProd() {
  hugo.hugo(false);
}

exports.build = series(envProd, sass, js.transpileJS, js.concatJS);

exports.serve = series(hugoDev, watchFiles);

exports.default = defaultScripts;
