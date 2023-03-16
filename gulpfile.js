const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('src/styles/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    //.pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('src/styles/css'))
}

function watchTask() {
  watch(['src/styles/sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)