const gulp = require("gulp");
const webpack = require("gulp-webpack");
const concat = require("gulp-concat");
const gutil = require("gulp-util");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

gulp.task("webpack", function() {
  return gulp
    .src("assets/js/webpack-entry.js")
    .pipe(webpack(require("../webpack.config.js")))
    .pipe(gulp.dest("tmp/"));
});

gulp.task("js", ["webpack"], function() {
  gulp
    .src(["tmp/webpack-built.js", "node_modules/rivet-uits/js/rivet.js"])
    .pipe(concat("rivet-docs.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./static/js"));

  gulp
    .src(["assets/js/telemetrics.js"])
    .pipe(babel())
    .pipe(concat("telemetrics.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./static/js"));
});
