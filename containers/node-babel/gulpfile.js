
var gulp = require('gulp');
var gutil = require('gulp-util');
var sequence = require('gulp-sequence');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var forever = require('forever-monitor');
var sourcemaps = require('gulp-sourcemaps');

var SRC_FILES = ['src/**/*.js'];
var COMPILED_SRC_DIR = 'build/source';
var ENTRY_PATH = '/app.js';

gulp.task('build', function (done) {
  gulp.src(SRC_FILES)
    .pipe(sourcemaps.init())
    .pipe(babel({ optional: ['runtime'] }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(COMPILED_SRC_DIR))
    .on('finish', done);
});

gulp.task('watch', function() {
  gulp.watch(SRC_FILES, ['build']);
});

gulp.task('dev', ['watch'], function () {
  return nodemon({
    watch: [COMPILED_SRC_DIR],
    script: COMPILED_SRC_DIR + ENTRY_PATH
  });
});

gulp.task('server', function() {
  new forever.Monitor(COMPILED_SRC_DIR + ENTRY_PATH).start();
});

gulp.task('default', ['build'], function(done) {
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
