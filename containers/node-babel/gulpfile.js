var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var forever = require('forever-monitor');
var sequence = require('gulp-sequence');

var SRC_PATH = 'src';
var RUN_COMMAND = 'npm run babel-node --';
var ENTRY_POINT = SRC_PATH + '/app.js';

gulp.task('dev', function () {
  return nodemon({
    watch: ['src'],
    exec: [RUN_COMMAND, ENTRY_POINT].join(' '),
    legacyWatch: true
  });
});

gulp.task('server', function() {
  var child = new (forever.Monitor)(ENTRY_POINT, {
    command: RUN_COMMAND
  });
  child.start();
});

gulp.task('default', function(done) {
  var environment = process.env.NODE_ENV || 'development';

  gutil.log('Running tasks for environment \'' + gutil.colors.cyan(environment) + '\'.');

  switch (environment) {
    case 'production':
      // Run prod tasks
      sequence('server', done);
      break;

    default:
      // Run default task
      sequence('dev', done);
      break;
  }
});
