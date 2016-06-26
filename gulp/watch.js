(function() {
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');

  var browserSync = require('browser-sync');

  function isOnlyChange(event) {
    return event.type === 'changed';
  }

  gulp.task('watch', ['inject'], function() {
  //watching bower.json and index.html files
    gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);
  //watching styles (css, scss) files
    gulp.watch([
      path.join(conf.paths.src, '/app/**/*.css'),
      path.join(conf.paths.src, '/app/**/*.scss')
    ], function(event) {
      if (isOnlyChange(event)) {
        gulp.start('scss-lint--reload');
        gulp.start('styles-reload')
      } else {
        gulp.start('inject-reload');
      }
    });
    //watching js files
    gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
      if (isOnlyChange(event)) {
        gulp.start('js-hint-reload');
        gulp.start('es-lint-reload');
        gulp.start('scripts-reload');
      } else {
        gulp.start('inject-reload')
      }
    });
    //watching components html files
    gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event){
      browserSync.reload(event.path);
    })

  });

})();