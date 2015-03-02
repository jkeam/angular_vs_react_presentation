var gulp = require('gulp');
var jade = require('gulp-jade');
var browserify = require('gulp-browserify');

gulp.task('templates', function() {
  var locals = {};
 
  gulp.src('./src/*.jade')
    .pipe(jade({
      locals: locals
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('scripts', function() {
    gulp.src('src/*.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : false
        }))
        .pipe(gulp.dest('./dist/public'))
});

gulp.task('copy', function(){
  //gulp.src('./src/index.js').pipe(gulp.dest('./dist/public'));
  gulp.src('./src/*.css').pipe(gulp.dest('./dist/public'));
  gulp.src('./src/*.png').pipe(gulp.dest('./dist/public'));
  gulp.src(['./src/league-gothic/**/*']).pipe(gulp.dest('./dist/public/league-gothic'));
});


gulp.task('default', ['templates', 'scripts', 'copy']);

