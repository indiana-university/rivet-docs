const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gutil = require("gulp-util");
const webpack = require('webpack');

gulp.task('sass:build', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});

gulp.task("webpack", function() {
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
    });
});

gulp.task('js:build', function() {
    gulp.start('webpack');

    return gulp.src([
        'tmp/vue-built.js'
    ])
        .pipe(concat('rivet-docs.js'))
        .pipe(gulp.dest('./static/js'));
});

gulp.task('watch', function() {
    gulp.watch(['assets/js/*.js', 'assets/js/**/*.js', 'assets/js/components/*.vue'], ['js:build']);
    gulp.watch('assets/scss/**/*.scss', ['sass:build']);
});

gulp.task('env:production', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('build:prod', ['env:production', 'sass:build', 'js:build']);

gulp.task('default', ['watch']);
