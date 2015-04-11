var gulp          = require('gulp'),
    jshint        = require('gulp-jshint'),
    fileInsert    = require('gulp-file-insert'),
    uglify        = require('gulp-uglify'),
    rename        = require('gulp-rename'),
    header        = require('gulp-header'),
    pkg           = require('./package.json'),


    js = './src/**/*.js',
    sources = [
    './src/**/*.js',
    './src/**/*.html',
    './src/**/*.css'],


    banner = ['/**',
  '/*',
  ' *  <%= pkg.name %> - <%= pkg.description %>',
  ' *    Version:  v<%= pkg.version %>',
  ' *      License:  <%= pkg.license %>',
  ' *        Author:  <%= pkg.author %>',
  ' *          Contact:  julienetie@gmail.com',
  ' *            github:  <%= pkg.repository.url %>',
  ' *              twitter:  @julienetienne_',
  ' *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾',
  ' *  Place/ inject Mimetic directly into the page before </ body>',
  ' *  for seamless results .',
  ' *',
  ' */',
  ''].join('\n'),


    minBanner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @license <%= pkg.license %>',
  ' * Paste or insert Mimetic directly into the page before </ body> for seamless results.',
  ' */',
  ''].join('\n');


// ./dist/mimetic.min.js
gulp.task('make-min', function() {
  gulp.src(js)
  .pipe(uglify())
  .pipe(header(minBanner, { pkg : pkg } ))
  .pipe(rename({
    extname: '.min.js'
  }))

  .pipe(gulp.dest('./dist'));
});




// ./dist/mimetic.js
gulp.task('make', function() {
  gulp.src(js)
  .pipe(header(banner, { pkg : pkg } ))  
  .pipe(gulp.dest('./dist'));
});


gulp.task('insert', function() {
  gulp.src('./src/insert-template/mimetic.html').pipe(fileInsert({
    '/* normalize.min.css */': './vendor/normalize.min.css',
    '/* style.css */': './src/style.css',
    '/* mimetic.js */': './src/mimetic.js',
    '/* html5shiv.min.js */': './vendor/html5shiv.min.js'
  })).pipe(gulp.dest('./'));
});


gulp.task('lint', function() {
  return gulp.src(js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('watch', function() {
  gulp.watch(sources,['insert','lint','make-min','make']);
});


gulp.task('default', ['watch','lint','insert','make-min','make']);
