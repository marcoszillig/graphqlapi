const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");

const tsProject = ts.createProject('tsconfig.json')

function scripts() {
  const tsResult = tsProject.src().pipe(tsProject())
  return tsResult.js.pipe(gulp.dest('dist'))
}

function static() {
  del(['dist'])
  return gulp.src(['src/**/*.json']).pipe(gulp.dest('dist'))
}

function build(done) {
  gulp.series(static, scripts)
  done()
}

function watch() {
  build
  return gulp.watch(['src/**/*.ts', 'src/**/*.json'])
}

exports.build = scripts
exports.default = watch