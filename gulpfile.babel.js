import gulp from "gulp";
import del from "del";
import server from "gulp-webserver";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import img from "gulp-image";
import babelify from "babelify";
import uglify from "uglifyify";

const prepare = gulp.series([]);
const assets = gulp.series([]);
const live = gulp.parallel([]);

export const dev = gulp.series([]);
