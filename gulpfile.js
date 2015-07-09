const gulp = require('gulp');
const del = require('del');
const compass = require('gulp-compass');
const tslint = require('gulp-tslint');
const watch = require('gulp-watch');
const tsc = require('gulp-typescript');
const inject = require('gulp-inject');
const sourcemaps = require('gulp-sourcemaps');
const Config = new require('./gulpfile.config');
const config = new Config();

gulp.task('gen-ts-refs', function () {
    var target = gulp.src(config.appTypeScriptReferences);
    var sources = gulp.src([config.allTypeScript], {read: false});
    return target.pipe(inject(sources, {
        starttag: '//App exports',
        endtag: '//App exports - end',
        transform: function (filepath) {
            return '/// <reference path="..' + filepath + '" />';
        }
    })).pipe(gulp.dest(config.typings));
});


/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript)
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
        config.libraryTypeScriptDefinitions, //reference to library .d.ts files
        config.appTypeScriptReferences];     //reference to app.d.ts files

    var tsProject = tsc.createProject('tsconfig.json');

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});


/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
    var typeScriptGenFiles = [
        config.source +'**/*.js',    // path to all JS files auto gen'd by editor
        config.source +'**/*.js.map' // path to all sourcemap files auto gen'd by editor
    ];

    // delete the files
    del(typeScriptGenFiles, cb);
});


gulp.task('watch', function() {
    gulp.watch([config.allTypeScript], ['compile-ts', 'gen-ts-refs']);
    gulp.watch([config.allSassFiles], ['styles']);
});

gulp.task('styles', function () {
    return gulp.src(config.allSassFiles)
        .pipe(compass({
            config_file: 'config.rb',
            debug: true,
            css: 'src/components',
            sass: 'src/components'
        }))
        .pipe(gulp.dest('.'));
});
gulp.task('copyTsc', function () {
    return gulp.src('Typescript/*.*')
        .pipe(gulp.dest('node_modules/gulp-typescript/node_modules/typescript/bin/'));
});

gulp.task('install', ['copyTsc', 'clean-ts', 'compile-ts', 'gen-ts-refs', 'styles', 'watch']);

gulp.task('default', ['clean-ts', 'compile-ts', 'gen-ts-refs', 'styles', 'watch']);
