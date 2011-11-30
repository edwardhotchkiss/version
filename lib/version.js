
/*
  version
  @class version
  @author Edward Hotchkiss
*/

var version = module.exports;

// mikeal's enhanced http.request
var request = require('request');

/*
  @method fetch
  @param {String} npm module name
  @param {Function} callback
  @param {Array} _optional enhancements (can you enhance that?)
  @returns {Object} error {String} version
*/

version.fetch = function(name, callback, options) {
  this.fetchNode(name, callback);
};

version.fetchNode = function(name, callback) {
  request('https://registry.npmjs.org/' + name + '/latest', function(error, response, body) {
    if (error) {
      callback(error, null);
    } else if (response.statusCode === 404) {
      callback(new Error('module not found in registry!'), null);
    } else {
      try {
        data = JSON.parse(body);
        var _version = data['version'];
        callback(null, _version);
      } catch(error) {
        callback(error, null);
      }
    }
  });
};

/* EOF */