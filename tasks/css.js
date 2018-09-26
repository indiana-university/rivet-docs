const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("assets/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("static/css/"));
});
