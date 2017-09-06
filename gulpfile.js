const gulp = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync');
// this is used so that it will list all the tasks by default when you type "gulp"
const tasks = require('gulp-task-listing');

// Include tasks from .js files in the tasks folder
requireDir('./tasks');

gulp.task('serve', ['watch'], function() {
    browserSync({
        server: {
            baseDir: "./public/"
        },
        files: [
            'public/**/*',
        ],
        open: false
    });
});

gulp.task('watch', ['build'], function() {
    gulp.watch(['assets/js/vue-main.js', 'assets/js/**/*.vue'], ['webpack']);
    gulp.watch(['assets/js/**/*.js', 'tmp/webpack-built.js'], ['js']);
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch(['content/**/*.md'], ['index']);
    gulp.watch(['layouts/**/*', 'content/**/*', 'archetypes/**/*', 'static/**/*'], ['hugo:dev']);
});

gulp.task('env:production', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('build', ['webpack', 'js', 'sass', 'index']);
gulp.task('build:prod', ['env:production', 'sass', 'webpack', 'js', 'index']);

gulp.task('default', function() {
    return tasks.withFilters(null, 'default')();
});