(function() {
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');
  //var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'run-sequence']
  });

  var browserSync = require('browser-sync');

  function hint(){
    return gulp.src(conf.paths.js)
      .pipe($.jshint('.jshintrc'))
      .pipe($.jshint.reporter(stylish));
  }
  function eslint(){
    return gulp.src(conf.paths.js)
      .pipe($.eslint('.eslintrc'))
      .pipe($.eslint({reset:true}))
      .pipe($.eslint.format());
  }
  function scsslint(){
    return gulp.src(conf.paths.scss)
      .pipe($.scssLint({
        config: '.scsslintrc.yml'
      }))
      .pipe($.scssLint.failReporter());
  }
  function htmlhint(){
    return gulp.src(conf.paths.html)
      .pipe($.htmlhint({htmlhint:'.htmlhintrc'}));
  }

  gulp.task('js-hint', function(){
    hint();
  });
  gulp.task('js-hint-reload', function(){
    browserSync.reload();
    hint();
  });
  gulp.task('es-lint', function(){
    eslint();
  });
  gulp.task('es-lint-reload', function(){
    browserSync.reload();
    eslint();
  });
  gulp.task('scss-lint', function(){
    scsslint();
  });
  gulp.task('scss-lint-reload', function(){
    browserSync.reload();
    scsslint();
  });
  gulp.task('html-hint', function(){
    htmlhint();
  });

  gulp.task('lint-reload', [], function() {
    browserSync.reload();
    return $.runSequence(
      'js-hint'
      ,'es-hint'
      ,'scss-lint'
      ,'html-hint'
    );
  });

  gulp.task('lint', function(){
    return $.runSequence(
      'js-hint'
      ,'es-lint'
      ,'scss-lint'
      ,'html-hint'
    );
  });

})();