const gulp = require('gulp');
const webpack = require('webpack');
const concat = require('gulp-concat');
const gutil = require("gulp-util");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

gulp.task("webpack", function() {
    webpack(require('../webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        gutil.log("webpack finished building tmp/webpack-built.js")
    });
});

gulp.task('js', ['webpack'], function() {
    gulp.src([
            'tmp/webpack-built.js',
            'node_modules/rivet-uits/js/rivet.js'
        ])
        .pipe(concat('rivet-docs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./static/js'));

    gulp.src(['assets/js/telemetrics.js'])
        .pipe(babel())
        .pipe(concat('telemetrics.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./static/js'));
});
