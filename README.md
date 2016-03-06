Gulp Bufferizor
===============
Pipes a gulp stream to a Vinyl file object with a buffer that you can manipulate. A replacement for disk writing.
### Installation &nbsp;  [![npm version](https://badge.fury.io/js/gulp-bufferize.svg)](http://badge.fury.io/js/gulp-bufferize) [![NPM downloads](https://img.shields.io/npm/dm/gulp-bufferize.svg)](https://npmjs.org/package/gulp-bufferize "View this project on NPM")
```sh
npm install gulp-bufferize
```
###Simple Usage
```javascript
var bufferize = require('gulp-bufferize');
gulp.src(['/**/*.js'])
.pipe(bufferize(function(file) {
  console.log(file.stem + file.extname);
}));
```
