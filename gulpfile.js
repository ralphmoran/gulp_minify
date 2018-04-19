var gulp       = require('gulp'            ); // Gulp base
var uglify     = require('gulp-uglify'     ); // Minify files
var concat     = require('gulp-concat'     ); // Concat files into a new file
var sourcemaps = require('gulp-sourcemaps' ); // Load new file in cache/buffer

gulp.task('uglify', function(){
    return gulp.src('app/js/*.js')
            .pipe(sourcemaps.init())
            .pipe(concat('main.min.js'))
            .pipe(sourcemaps.write())
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['uglify']);