'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/style'));
});

gulp.task('watch', function () {
    gulp.watch('./src/style/**/*.scss', ['sass']);
});
