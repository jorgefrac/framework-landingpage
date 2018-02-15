var gulp = require('gulp');

/* =Plugins Gulp
-----------------------------------------------------------------------------*/
var uglify = require('gulp-uglify');
var dest = require('gulp-dest');
var jsmin = require('gulp-jsmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


/* =Taks
-----------------------------------------------------------------------------*/
gulp.task('javascript', function() {
	gulp.src([
		'!js/jquery.min.js',
		'js/*.js'
	])
	.pipe(uglify())
	.pipe(jsmin())
	.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

/* =Init
-----------------------------------------------------------------------------*/
gulp.task('default',['css','javascript']);