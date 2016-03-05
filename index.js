'use strict';

var through = require('through2'),
  gutil = require('gulp-util');

module.exports = function(cb){

  function bufferize (file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new gutil.PluginError('gulp-bufferize', 'doesn\'t support Streams'));
    }

    if (cb) {
      cb(file);
    }

    callback(null, file);
  }

  return through.obj(bufferize);
}
