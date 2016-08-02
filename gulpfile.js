const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const header = require('gulp-header');
const pkg = require('./package.json');
const bump = require('gulp-bump');

const banner = ['/**',
        ' * <%= pkg.name %>',
        ' * Version:  <%= pkg.version %>',
        ' * License:  <%= pkg.license %>',
        ' * Copyright <%= pkg.author %> 2015 - ' + new Date().getFullYear() +' All Rights Reserved.',
        ' * github:  <%= pkg.repository.url %>',
        ' *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾',
        ' */',
        ''
    ].join('\n');


/**
 * src files in order.
 */
const src = [
    // Wrapper start.
    './src/amd-wrapper-start.js',

    // RequestAnimationFrame polyfill.
    './libs/resizilla.js',

    // Resizilla for window resize debouncing.
    './src/mimetic.js',

    // Wrapper end.
    './src/amd-wrapper-end.js'
];


gulp.task('build', function() {
    return gulp.src(src)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(concat('mimetic.js'))
        .pipe(header(banner, {
                pkg: pkg
            }))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(header(banner, {
                pkg: pkg
            }))
        .pipe(rename('mimetic.min.js'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['build']);


/**
 * Watch for changes.
 */
gulp.task('watch', function(){
    gulp.watch(['./src/**.js','./libs/**.js'], ['build']);
});
