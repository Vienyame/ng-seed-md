(function () {
  'use strict';

  /**
   *  This file contains the variables used in other gulp files
   *  which defines tasks
   */

  var gutil = require('gulp-util');

  /**
   * The main paths of your project handle these with care
   */
  exports.paths = {
    src: 'src',
    dist: 'www',
    tmp: '.tmp',
    e2e: 'e2e',
    plato: 'report/plato',
    docs: 'docs',
    deploy: 'deploy',
    js: [
      'src/**/*.js',
      '!src/**/*.specs.js'
    ],
    scss: 'src/app/**/*.scss',
    html: 'src/**/*.html'
  };

  /**
   * Wiredep is the lib which inject bower dependencies in your project
   * Mainly used to inject script tags in the index.html but also used
   * to inject css preprocessor deps and js files in karma
   */
  exports.wiredep = {
    directory: 'bower_components'
  };

  /**
   * Common implementation for an error handler of a Gulp plugin
   */
  exports.errorHandler = function (title) {
    'use strict';

    return function (err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    }
  }
})();