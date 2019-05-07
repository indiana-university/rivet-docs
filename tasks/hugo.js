/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const gulp = require('gulp');
const path = require('path');
const exec = require('child_process').execSync;
const gutil = require('gulp-util');

module.exports = {
  hugo(includeDrafts) {
    var src = '.';
    var dst = path.join(process.cwd(), 'public');

    gutil.log('src: ' + src + ' dst: ' + dst);

    var conf = 'config.yml';
    var opt,
      i = process.argv.indexOf('--config');
    if (i > -1) {
      conf = process.argv[i + 1];
    } else {
      opt, (i = process.argv.indexOf('-c'));
      if (i > -1) {
        conf = process.argv[i + 1];
      }
    }

    var cmd = 'hugo --config=' + conf + ' -s ' + src + ' -d ' + dst;
    if (includeDrafts) {
      cmd += ' --buildDrafts=false --baseUrl="http://localhost:3000/" ';
    }

    var result = exec(cmd, { encoding: 'utf-8' });
    gutil.log('hugo: \n' + result);
  }
};
