(function(){
'use strict';

  var gulp = require('gulp');
  var p =require('../package.json');
  var conf = require('./conf');

  var $ = require('gulp-load-plugins')();

    gulp.task('archive', function(){
      gulp.src([conf.paths.dist + '/**/*'])
        .pipe($.zip(p.name + '-' + p.version + '.zip'))
        .pipe(gulp.dest(conf.paths.deploy));
    });

})();