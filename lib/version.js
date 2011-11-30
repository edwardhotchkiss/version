
/*
  version
  @class version
  @author Edward Hotchkiss
*/

var version = module.exports;

// enhanced http.request
var request = require('request');

/*
  @method fetch
  @param {String} npm module name
  @param {Function} callback
  @param {Array} _optional enhancements (can you enhance that?)
  @returns {Object} error {String} version
*/

version.fetch = function(name, options, callback) {
  this.fetchNode(name, options, callback);
};

version.fetchNode = function(name, options, callback) {
  callback = callback || options;
  request('https://registry.npmjs.org/' + name + '/latest', function(error, response, body) {
    if (error) {
      callback(error, null);
    } else if (response.statusCode === 404) {
      callback(new Error('module not found in registry!'), null);
    } else {
      try {
        data = JSON.parse(body);
        var _version = data['version'];
        if (options && options.from && options.to) {
          _version = _version.replace(options.from, options.to);
          callback(null, _version);
        } else {
          callback(null, _version);
        };
      } catch(error) {
        callback(error, null);
      }
    }
  });
};

/* EOF */