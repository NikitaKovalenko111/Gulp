import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import GulpCleanCss from "gulp-clean-css";
import webpcss from 'gulp-webpcss';
import autoPrefixer from "gulp-autoprefixer";
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const sassFunc = () => {
    return app.gulp.src(app.path.src.sass, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SASS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
        .pipe(app.plugins.if(app.isBuild, webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        })))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        }))
        // Раскомментировать если нужен не сжатый дубль файла стилей
        //.pipe(app.gulp.dest(app.path.build.css))
        //
        .pipe(app.plugins.if(app.isBuild, GulpCleanCss()))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}