// node modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// browser-sync
var browserSync = require('browser-sync').create();

// paths
var input = 'scss/**/*.scss';
var output = './css/';

// task options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: './'
  });
  gulp.watch(input, ['sass']);
  gulp.watch('index.html').on('change', browserSync.reload);
});


// sass compilation
gulp.task('sass', function() {
  return gulp
    // Find master scss file
    .src(input)
    // Run sass on that file and compile to css, alert error if any
    .pipe(sass(sassOptions).on('error', sass.logError))
    // intiate autoprefixer
    .pipe(autoprefixer())
    // Write the compiled code to the output location
    .pipe(gulp.dest(output))
    // auto-inject compiled sass into browsers (must happen after compilation!)
    .pipe(browserSync.stream());
});


//watch task
// gulp.task('watch', function() {
//   return gulp
//    // watch the input forlder for change
//    // run 'sass' task when something happens (can add multiple tasks)
//     .watch(input, ['sass'])
//     // when there is a change - log a message to the console
//     .on('change', function(event) {
//       console.log(`File ${event.path} was ${event.type}, running tasks...`)
//     });
// });

// default gulp tasks
gulp.task('default', ['sass', 'browser-sync']);

// production gulp
gulp.task('prod', function() {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});
