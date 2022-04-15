import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,gif,png,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/main.js`,
        sass: `${srcFolder}/sass/style.sass`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        sass: `${srcFolder}/sass/**/*.sass`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/**/*.{jpg,jpeg,gif,png,webp,ico,svg}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}

export default path;
