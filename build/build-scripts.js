var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    eventStream = require('event-stream'),
    config = require('../config.js');

var nameRegex = /([\w]+)(?=\.main\.js$)/g;

function bundle(done){
  glob('./src/scripts/**/*.main.js', function(err, files){
    var streams = files.map(function(entry){
      var bundler = browserify({ entries: [entry]})
        .on('log', gutil.log)
        .on('error', gutil.log.bind(gutil, 'Browserify Error'));

      //config.browserifyTransforms(bundler, 'prod');

      return bundler.bundle()
        .pipe(source(entry.match(nameRegex)[0]))
        .pipe(rename({extname: '.bundle.js'}))
        .pipe(gulp.dest('./dist/scripts'));
    });
    return eventStream.merge(streams).on('end', done);
  });
}

module.exports = bundle;
