var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),

    config = {
        sass: {
            outputStyle: 'compressed'
        },
        concat: {
            newLine: '\r\n'
        }
    }
    input = {  
        stylesheet: 'src/scss/default.scss',
        javascript: Array('src/js/settings.js', 'src/js/main.js', 'src/js/**/*.js')
    }
    output = {
        stylesheet: 'dist/',
        javascript: 'dist/'
    },
    production = {
        stylesheet: 'production/',
        javascript: 'production/'
    },
    watch = {
        stylesheet: 'src/scss/**/*.scss',
        javascript: 'src/js/**/*.js'
    };

gulp.task('default', ['development', 'stylesheet', 'javascript', 'watch']);
gulp.task('build', ['production', 'stylesheet', 'javascript']);
gulp.task('watch', function(){
    gulp.watch(watch.stylesheet, ['stylesheet']);
    gulp.watch(watch.javascript, ['javascript']);
});
gulp.task('stylesheet', function(){
    return gulp.src(input.stylesheet)
            .pipe(gutil.env.type !== 'production' ? sourcemaps.init() : gutil.noop())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(gutil.env.type !== 'production' ? sourcemaps.write() : gutil.noop())
            .pipe(gutil.env.type !== 'production' ? gulp.dest(output.stylesheet) : gulp.dest(production.stylesheet));
});
gulp.task('javascript', function(){
    return gulp.src(input.javascript)
            .pipe(gutil.env.type !== 'production' ? sourcemaps.init() : gutil.noop())
            .pipe(concat('bundle.js', config.concat))
            .pipe(gutil.env.type !== 'production' ? gutil.noop() : uglify().on('error', gutil.log))
            .pipe(gutil.env.type !== 'production' ? sourcemaps.write() : gutil.noop())
            .pipe(gutil.env.type !== 'production' ? gulp.dest(output.javascript) : gulp.dest(production.javascript));
});
gulp.task('development', function(){
    gutil.env.type = 'development';
});
gulp.task('production', function(){
    gutil.env.type = 'production';
});