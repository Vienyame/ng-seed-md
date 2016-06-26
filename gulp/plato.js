(function() {
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');
  var glob = require('glob');

  var $ = require('gulp-load-plugins')();

  var wiredep = require('wiredep').stream;
  var _ = require('lodash');

  var browserSync = require('browser-sync');

  gulp.task('quality-reload', ['quality'], function() {
    browserSync.reload();
  });

  /**
   * Create a visualizer report
   */
  gulp.task('quality', [], function(done) {
    console.log('Analyzing source with Plato');
    console.log('Browse to /report/plato/index.html to see Plato results');

    startPlatoVisualizer(done);
  });

  /**
   * Start Plato inspector and visualizer
   */
  function startPlatoVisualizer(done) {
    console.log('Running Plato');

    var files = path.join(conf.paths.src, '/app/**/*.js');
    var excludeFiles = /.*\.spec\.js/;
    var plato = require('plato');

    var options = {
      title: 'Plato Inspections Report',
      exclude: excludeFiles
    };
    var outputDir = conf.paths.plato;//config.report + '/plato';

    plato.inspect(files, outputDir, options, platoCompleted);

    function platoCompleted(report) {
      var overview = plato.getOverviewReport(report);
      if (done) { done(); }
    }
  }


})();