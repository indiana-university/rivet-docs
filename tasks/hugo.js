const gulp = require('gulp');
const path = require("path");
const exec = require('child_process').execSync;
const gutil = require("gulp-util");

function hugo(includeDrafts) {
    var src = '.';
    var dst = path.join(process.cwd(), 'public');

    gutil.log('src: ' + src + ' dst: ' + dst);

    var conf = 'config.yml'
    var opt, i = process.argv.indexOf("--config");
    if (i > -1) {
        conf = process.argv[i+1];
    } else {
        opt, i = process.argv.indexOf("-c");
        if (i > -1) {
            conf = process.argv[i+1];
        }
    }

    var cmd = 'hugo --config=' + conf + ' -s ' + src + ' -d ' + dst;
    if (includeDrafts) {
        cmd += ' --buildDrafts=true --baseUrl="http://localhost:3000/" ';
    }

    var result = exec(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
}

gulp.task('hugo:dev', function() {
    hugo(true);
});

gulp.task('hugo:prod', ['env:production'], function() {
    hugo(false);
});
