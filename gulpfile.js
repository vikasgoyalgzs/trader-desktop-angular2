const gulp = require('gulp');
const compass = require('gulp-compass');
const connect = require('gulp-connect-proxy');
const tslint = require('gulp-tslint');

gulp.task('styles', function () {
    return gulp.src('src/components/**/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            debug: true,
            css: 'src/components',
            sass: 'src/components'
        }))
        .pipe(gulp.dest('css'));
});


gulp.task('connect', function () {
});

gulp.task('tslint', function(){
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});
