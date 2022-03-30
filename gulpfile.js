const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug-3');
const browserSync = require('browser-sync').create();

// Run sass
gulp.task('sass', () =>
  gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream())
)

// Run pug
gulp.task('pug', () =>
  gulp.src('src/views/pages/**/*.pug')
    .pipe(
      pug({
        pretty: true,
      }))
    .pipe(gulp.dest('./build/views/'))
    .pipe(browserSync.stream())
);

// Copy images
gulp.task('copy images', () =>
  gulp.src('./src/images/**/*.*')
    .pipe(gulp.dest('./build/images/'))
);

// Copy js
gulp.task('copy js', () =>
  gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./build/js/'))
);

// Run tasks
gulp.task('run', gulp.series('pug', 'sass', 'copy images', 'copy js'));

// Watch
gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/views/**/*.pug', gulp.series('pug'));
})

// Run all
gulp.task('default', gulp.series('run', 'watch'));

// Deploy