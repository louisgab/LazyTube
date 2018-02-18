// ------------------------------------ //  DEPENDENCIES  // ------------------------------------ //

var pkg          = require('./package.json')
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var size         = require('gulp-size');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var clean        = require('gulp-clean');
var cssnano      = require('gulp-cssnano');
var jshint       = require('gulp-jshint');
var header       = require('gulp-header');
var browserSync	 = require('browser-sync');
var runSequence  = require('run-sequence');

// --------------------------------------- //  CONFIG  // --------------------------------------- //

var reload       = browserSync.reload;
var banner       = '/*! LazyTube v' + pkg.version + ' | github.com/louisgab/LazyTube */\n';
var dir = {
    src: 'src/',
    dest: 'dist/',
};

// ---------------------------------------- //  LINT  // ---------------------------------------- //

gulp.task('lint-js', function() {
    gulp.src([dir.src + 'lazytube.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish')) //default
    .pipe(reload({ stream: true }));
});

gulp.task('lint-scss', function() {
    gulp.src(dir.src + 'lazytube.scss')
    .pipe(sass({
        outputStyle: 'expanded', //compact, compressed, nested, expanded
        precision: 10
    }).on('error', sass.logError))
    .pipe(gulp.dest(dir.src))
    .pipe(reload({ stream: true }));
});

// --------------------------------------- //  BUILD  // ---------------------------------------- //

gulp.task('build-js', function() {
    return gulp.src([dir.src + 'lazytube.js'])
    .pipe(uglify())
    .pipe(header(banner))
    .pipe(rename({ suffix: '.min' }))
    .pipe(size({ title: 'js' }))
    .pipe(gulp.dest(dir.dest));
});

gulp.task('build-css', function() {
    return gulp.src([dir.src + 'lazytube.css'])
    .pipe(cssnano())
    .pipe(header(banner))
    .pipe(rename({ suffix: '.min' }))
    .pipe(size({ title: 'css' }))
    .pipe(gulp.dest(dir.dest));
});

// -------------------------------------- //  GENERAL  // --------------------------------------- //

gulp.task('clean', function() {
    return gulp.src(dir.dest, { read: false })
    .pipe(clean());
});

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        open: true,
        proxy: 'localhost/lazytube/',
    });
    gulp.watch(dir.src + 'lazytube.scss', ['lint-scss', 'build-css']);
    gulp.watch(dir.src + 'lazytube.js', ['lint-js', 'build-js']);
});

gulp.task('build', function(callback) {
    runSequence(
        'clean',
        ['lint-scss', 'lint-js'],
        ['build-css', 'build-js'],
        callback
    );
});
