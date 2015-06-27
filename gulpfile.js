var gulp = require('gulp')
  , sass = require('gulp-sass')
  ;

gulp.task('sass', function() {
  gulp.src('sass/groundwork.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});

gulp.task('develop', ['sass'], function() {
  gulp.watch('sass/**/*.scss', ['sass']);
})
