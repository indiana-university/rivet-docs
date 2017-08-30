const gulp = require('gulp');
const webpack = require('webpack');
const concat = require('gulp-concat');
const gutil = require("gulp-util");

gulp.task("webpack", function() {
    webpack(require('../webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        gutil.log("webpack finished building static/vue-build.js")
    });
});

gulp.task('js', function() {
    return gulp.src([
        'tmp/vue-built.js'
    ])
        .pipe(concat('rivet-docs.js'))
        .pipe(gulp.dest('./static/js'));
});
