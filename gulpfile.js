const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gutil = require("gulp-util");
const webpack = require('webpack');
const hugoIndexer = require('./search-indexer.js');

gulp.task('sass', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});

gulp.task("webpack", function() {
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
    });
});

gulp.task('js', function() {
    return gulp.src([
        'tmp/vue-built.js'
    ])
        .pipe(concat('rivet-docs.js'))
        .pipe(gulp.dest('./static/js'));
});

gulp.task('index', function() {
    var indexer = new hugoIndexer();
    indexer.index();
});

gulp.task('watch', function() {
    gulp.watch(['assets/js/vue-main.js', 'assets/js/**/*.vue'], ['webpack']);
    gulp.watch(['assets/js/**/*.js', 'tmp/vue-built.js'], ['js']);
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch(['content/**/*.md'], ['index']);
});

gulp.task('env:production', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('build:prod', ['env:production', 'sass', 'webpack', 'js', 'index']);

gulp.task('default', ['webpack', 'js', 'sass', 'index', 'watch']);
