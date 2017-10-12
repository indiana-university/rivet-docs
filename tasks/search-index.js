const gulp = require('gulp');
const hugoIndexer = require('./search-indexer.js');

gulp.task('index', function() {
    var indexer = new hugoIndexer();
    indexer.index();
});
