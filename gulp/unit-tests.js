(function(){
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');

  var karma = require('karma');

  var pathSrcHtml = [
    path.join(conf.paths.src, '/**/*.html')
  ];

  var pathSrcJs = [
    path.join(conf.paths.src, '/**/!(*.spec).js')
  ];

  function runTests (singleRun, done) {
    var reporters = ['progress'];
    var preprocessors = {};

    pathSrcHtml.forEach(function(path) {
      preprocessors[path] = ['ng-html2js'];
    });

    if (singleRun) {
      pathSrcJs.forEach(function(path) {
        preprocessors[path] = ['coverage'];
      });
      reporters.push('coverage')
    }

    var localConfig = {
      configFile: path.join(__dirname, '/../karma.conf.js'),
      //add the basePath line for resolving karma test error with exit code 1
      basePath: path.join(__dirname, '/../'),
      singleRun: singleRun,
      autoWatch: !singleRun,
      reporters: reporters,
      preprocessors: preprocessors
    };

    var server = new karma.Server(localConfig, function(failCount) {
      done(failCount ? -new Error("Failed " + failCount + " tests.") : null);
    });
    /*var server = new karma.Server(localConfig, function(error) {
      error = error ? new Error('Karma returned with the error code: ' + error): undefined;
      done(error);
    });*/
    server.start();
  }

  gulp.task('test', ['scripts'], function(done) {
    runTests(true, done);
  });

  gulp.task('test:auto', ['watch'], function(done) {
    runTests(false, done);
  });
})();