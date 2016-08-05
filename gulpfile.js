'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const header = require('gulp-header');
const pkg = require('./package.json');
const bump = require('gulp-bump');
var banner;
var tasks;
var watch;
var src;

/**
 * Plugin banner
 */
banner = ['/**',
  ' * <%= pkg.name %>',
  ' * Version:  <%= pkg.version %>',
  ' * License:  <%= pkg.license %>',
  ' * Copyright <%= pkg.author %> 2015 - ' + new Date().getFullYear() + ' All Rights Reserved.',
  ' * github:  <%= pkg.repository.url %>',
  ' *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾',
  ' */',
  ''
].join('\n');

/**
 * Tasks.
 */
tasks = ['Build MIMETIC'];

/**
 * Files to watch.
 */
watch = ['./src/**.js', './libs/**.js'];

/**
 * src files in order.
 */
src = [
  // Wrapper start.
  './src/amd-wrapper-start.js',

  // RequestAnimationFrame polyfill.
  './libs/resizilla.js',

  // Resizilla for window resize debouncing.
  './src/mimetic.js',

  // Wrapper end.
  './src/amd-wrapper-end.js'
];


gulp.task('Build MIMETIC', function() {
  /**
   * Build MIMETIC.
   */
  let mimetic = gulp.src(src)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(concat('mimetic.js'))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./dist'))
    /**
     * Build MIMETIC MIN.
     */
  mimetic.pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename('mimetic.min.js'))
    .pipe(gulp.dest('./dist'))
    /**
     * Build MIMETIC LITE.
     */
  let srcLite = src.filter(function(source) {
    return source !== './libs/resizilla.js';
  });
  console.log(srcLite)
  gulp.src(srcLite)
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename('mimetic.lite.js'))
    .pipe(gulp.dest('./dist'))

  return mimetic;
});

/**
 * Tasks.
 */
gulp.task('default', tasks);


/**
 * Watch for changes.
 */
gulp.task('watch', function() {
  gulp.watch(watch, tasks);
});
