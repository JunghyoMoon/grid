import gulp from "gulp";
import del from "del";
import server from "gulp-webserver";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import img from "gulp-image";
import babelify from "babelify";
import uglify from "uglifyify";
import autoPrefixer from "gulp-autoprefixer";

const routes = {
    img: {
        src: "src/img/*",
        dest: "dest/img",
    },
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/style.scss",
        dest: "dest/css",
    },
    js: {
        watch: "src/js/**/*.js",
        src: "src/js/script.js",
        dest: "dest/js",
    },
};

const clean = () => del(["build"]);

const style = () =>
    gulp
        .src(routes.scss.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoPrefixer({
                browsers: ["last 2 versions"],
            })
        )
        .pipe(minify())
        .pipe(gulp.dest(routes.scss.dest));

const prepare = gulp.series([]);
const assets = gulp.series([style]);
const live = gulp.parallel([]);

export const dev = gulp.series([prepare, assets, live]);
