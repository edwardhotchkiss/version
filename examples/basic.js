
/*
  basic `version` example
  fetch current version of express  
*/

var version = require('version');

version.fetch('express', function(error, version) {
  if (error) {
    console.error(error);
  } else {
    console.log('express current version:', version);
  };
});

/* EOF */