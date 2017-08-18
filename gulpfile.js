var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
