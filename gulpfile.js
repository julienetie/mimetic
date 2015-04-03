
var gulp        = require('gulp'),
    browserSync = require('browser-sync');
// Static server
gulp.task('browser-sync', function() {
    browserSync({

        server: {
            baseDir: "./"
        }
    });
});

// reloading browsers
gulp.task('watch', browserSync.reload);

gulp.task('default', ['browser-sync']);

gulp.watch("html/*.html", ['watch']);
