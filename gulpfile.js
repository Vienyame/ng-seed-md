/**
 * Created by Vienyame on 24/05/2016.
 *
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */
(function () {
  'use strict';

  var gulp = require('gulp');
  var wrench = require('wrench');

  /**
   * This will load all your js or coffee files int the gulp directory
   * in order to load all gulp tasks
   */
  wrench.readdirSyncRecursive('./gulp').filter(function (file) {
      return (/\.(js|coffee)$/i).test(file);
    })
    .map(function (file) {
      require('./gulp/' + file);
    });

  /**
   * Default task clean temporaries directories and launch the main
   * optimization build task
   */
  gulp.task('default', ['clean'], function () {
    gulp.start('build')
  })

})();