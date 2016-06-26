(function(){
  'use strict';


  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');

  var $ = require('gulp-load-plugins')();

  var wiredep = require('wiredep').stream;
  var _ = require('lodash');

  var browserSync = require('browser-sync');

  var docsOptions = {
    scripts: [
     // '../app.min.js',path.join(conf.paths.dist,'/scripts/app.route.js')
      'bower_components/angular/angular.min.js',
      'bower_components/angular/angular.min.js.map',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-animate/angular-animate.min.js.map',

      'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.js'

/*      'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-animate.min.js'*/
    ],
    html5Mode: true,
    startPage: '/ng-seed-doc',
    title: "ng-seed documentation",
    image: "path/to/my/image.png",
    imageLink: "/",
    titleLink: "/ng-seed/docs/ng-seed-doc"
  };

  gulp.task('doc-reload', ['doc'], function() {
    browserSync.reload();
  });

  gulp.task('doc', function() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
      .pipe($.ngdocs.process(docsOptions))
      .pipe(gulp.dest('./docs'));
  });

})();