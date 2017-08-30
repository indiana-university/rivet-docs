const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gutil = require("gulp-util");
const webpack = require('webpack');
const hugoIndexer = require('./search-indexer.js');

gulp.task('sass:build', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});

gulp.task("webpack:build", function() {
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
    });
});

gulp.task('js:build', function() {
    return gulp.src([
        'tmp/vue-built.js'
    ])
        .pipe(concat('rivet-docs.js'))
        .pipe(gulp.dest('./static/js'));
});

gulp.task('index:build', function() {
    var indexer = new hugoIndexer();
    indexer.index();
});

gulp.task('watch', function() {
    gulp.watch(['assets/js/vue-main.js', 'assets/js/**/*.vue'], ['webpack:build']);
    gulp.watch(['assets/js/**/*.js', 'tmp/vue-built.js'], ['js:build']);
    gulp.watch('assets/scss/**/*.scss', ['sass:build']);
    gulp.watch(['content/**/*.md'], ['index:build']);
});

gulp.task('env:production', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('build:prod', ['env:production', 'sass:build', 'webpack:build', 'js:build', 'index:build']);

gulp.task('default', ['webpack:build', 'js:build', 'sass:build', 'index:build', 'watch']);
