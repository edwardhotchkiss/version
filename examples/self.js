
/*
  fetch version # of current package
*/

var version = require('version');

version.fetch(function(error, version) {
  if (error) {
    console.error(error);
  } else {
    console.log('`version` package current version:', version);
  };
});

/* EOF */