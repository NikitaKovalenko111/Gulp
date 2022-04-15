import replace from "gulp-replace";
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import browserSync from "browser-sync";
import newer from "gulp-newer";
import gulpIf from "gulp-if";

export const plugins = {
    replace: replace,
    notify: notify,
    plumber: plumber,
    browserSync: browserSync,
    newer: newer,
    if: gulpIf
}