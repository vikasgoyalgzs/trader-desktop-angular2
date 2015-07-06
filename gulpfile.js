const gulp = require('gulp');
const compass = require('gulp-compass');
const tslint = require('gulp-tslint');
const watch = require('gulp-watch');
const batch = require('gulp-batch');

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

gulp.task('tslint', function(){
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('appExports', function () {

});

gulp.task('watch', function () {
    watch('src/**/*.', batch(function (events, done) {
        gulp.start('appExports');
    }));
});
