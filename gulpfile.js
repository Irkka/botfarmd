var gulp = require('gulp'),
  mocha = require('gulp-mocha');

gulp.task('bdd', function () {
  gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['test']);
})

gulp.task('test', function () {
  return gulp.src('test/**/*_spec.js', {read: false})
  .pipe(mocha({
    require: ['./test/helpers/chai'],
    reporter: 'spec'
  }));
})
