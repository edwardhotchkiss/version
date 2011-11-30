
/*
  pattern/replace `version` example
  fetch current version of express, and use a RegExp with
  a string to search/replace the version before returning it 
*/

var version = require('version');

version.fetch('express', { from : /^/gi, to : "v" }, function(error, version) {
  if (error) {
    console.error(error);
  } else {
    console.log('express current version with formating:', version);
  };
});

/* EOF */