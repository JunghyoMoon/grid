import gulp from "gulp";
import del from "del";
import server from "gulp-webserver";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import img from "gulp-image";
import bro from "gulp-bro";
import babelify from "babelify";

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

const liveServer = () =>
    gulp.src("dest").pipe(server({ livereload: true, open: true }));

const style = () =>
    gulp
        .src(routes.scss.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"],
            })
        )
        .pipe(minify())
        .pipe(gulp.dest(routes.scss.dest));

const js = () =>
    gulp
        .src(routes.js.src)
        .pipe(
            bro({
                transform: [
                    babelify.configure({ presets: ["@babel/preset-env"] }),
                    ["uglifyify", { global: true }],
                ],
            })
        )
        .pipe(gulp.dest(routes.js.dest));

const watch = () => {
    gulp.watch(routes.scss.watch, style);
    gulp.watch(routes.js.src, js);
};

const prepare = gulp.series([clean]);
const assets = gulp.series([style, js]);
const live = gulp.parallel([liveServer, watch]);

export const dev = gulp.series([prepare, assets, live]);
