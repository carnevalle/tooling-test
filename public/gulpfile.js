var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

gulp.task('less', function() {
  gulp.src('./less/style.less')
    .pipe(less({ compress: true }))
    .pipe(gulp.dest('./css'))
    .pipe(notify({ message: 'Less task complete' }));
});

gulp.task('copy', function() {
  gulp.src('./bower_components/bootstrap/dist/**')
  .pipe(gulp.dest('./'));
});

// Default Task
gulp.task('default', ['less', 'copy', 'watch']);

gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['less']);
});