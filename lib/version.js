
/*
  version
  @class version
  @author Edward Hotchkiss
*/

module.exports = version = function(){};

/*
  version.fetch
  @class version
  @method fetch
  @param {String} npm module name
  @param {Function} callback
  @returns {Object} error {String} version
*/

version.fetch = function(name, callback) {
  callback(null, null);
};

/* EOF */