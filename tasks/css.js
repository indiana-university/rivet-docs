const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");

gulp.task("sass", function() {
  return gulp
    .src("assets/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("static/css/"));
});
