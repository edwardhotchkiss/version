
/*
  version
  @class version
  @author Edward Hotchkiss
*/

var fetch = exports.fetch = function(repository, callback) {
  if (arguments.length === 1) {
    callback = repository;
  };
  callback(null, null);
};

/* EOF */