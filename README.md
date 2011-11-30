
# Version (NodeJS package.json version number fetcher)

[![Build Status](https://secure.travis-ci.org/edwardhotchkiss/version.png)](http://travis-ci.org/edwardhotchkiss/version)

### Installation

```bash
$ npm install version
```

### Example (basic)

```javascript
var version = require('version');

version.fetch('express', function(error, version) {
  if (error) {
    console.error(error);
  } else {
    console.log('express current version: ', version);
  };
});
```