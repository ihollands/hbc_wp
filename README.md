NEEDED INSTALLATIONS
`npm init`                                  starts a package.json from inside your project directory
`npm install -g gulp`                       only necessary if you have not installed gulp on your system previously
`npm install -g browser-sync`               only necessary if you have not install browser-sync on your system previously

`npm install --save-dev gulp`               saves the gulp node module to your project
`npm install --save-dev gulp-sass`          saves the gulp-sass compiler node module to your project
`npm install --save-dev gulp-autoprefixer`  saves gulp-autoprefixer node module to your project
`npm install --save-dev browser-sync`       saves browsersync node module to your project

^aka all in one
`npm install gulp gulp-sass gulp-autoprefixer browser-sync --save-dev`




SETUP NOTES
 - connect your index file to you standard css
 - setup a gulpfile.js to compile (and watch for changes to) your scss and then output them to your css directory/file

SCSS NOTES
 - it is good practice to provide extensive comments demonstrating the connections between your scss files and grouping them according to sub-directory
 - connect scss files to one another using `@import 'path/file';` to import _file.scss located inside a path/ directory. Take note of the semicolon, which must end each line
