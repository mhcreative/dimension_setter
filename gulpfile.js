var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var pump = require('pump');

gulp.task('copy-index-html', function() {
    gulp.src('index.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist'));
});
gulp.task('copy-animate-css', function() {
    gulp.src('scss/*.css')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        // .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        // .pipe(uglify()) // now gulp-uglify works
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('dist/js/*.js'),
        uglify(),
        gulp.dest('dist/js/min')
    ],
    cb
  );
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

gulp.task('webfonts', function() {
  return gulp.src('webfonts/*.*')
    .pipe(gulp.dest('dist/webfonts'))
});

gulp.task('images', function() {
  return gulp.src('images/*.*')
    .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', ['browserSync', 'sass', 'scripts'], function (){
    gulp.watch(["index.html","js/*js","scss/*.scss"]).on('change', browserSync.reload);
    gulp.watch('index.html', ['copy-index-html'], browserSync.reload);
    gulp.watch('scss/*.scss', ['sass','copy-animate-css'], browserSync.reload);
    gulp.watch('js/*.js', ['scripts'], browserSync.reload);
});

gulp.task('default', ['watch','copy-index-html','sass','copy-animate-css','scripts','webfonts','images']);
