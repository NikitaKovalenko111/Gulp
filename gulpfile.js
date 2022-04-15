import path from "./gulp/config/path.js";
import gulp from "gulp";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    plugins: plugins
}

import copy from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import html from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { sassFunc } from "./gulp/tasks/sass.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSpriteFunc } from "./gulp/tasks/svgSpriteFunc.js";
import { zip } from './gulp/tasks/zip.js';
import { ftp } from "./gulp/tasks/ftp.js";

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.sass, sassFunc);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images)
}

export { svgSpriteFunc }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, sassFunc, js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev };
export { build };
export { deployZIP };
export { deployFTP };

gulp.task('default', dev);