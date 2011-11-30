
var vows = require("vows");
var assert = require("assert");

var version = require("../lib/version");

/*
  Top 20 (current)
  Most popular NodeJS Modules
*/

var popular = [
  "underscore",
  "coffee-script",
  "request",
  "optimist",
  "connect",
  "colors",
  "async",
  "uglify-js",
  "socket.io",
  "redis",
  "jade",
  "jsdom",
  "mime",
  "vows",
  "commander",
  "mongodb",
  "ejs",
  "node-uuid",
  "stylus",
  "mongoose"
];

popular.forEach(function(moduleName) {
  vows.describe("Testing version.fetch() on: " + moduleName).addBatch({
    "When fetching the Version number":{
      topic:function(){ 
        version.fetch(moduleName, this.callback);
      },
      "we should receive no error back and receive a version in string format":function(error, version) {
        assert.equal(error, null);
        assert.notEqual(version, null);
        assert.equal(typeof(version), "string");
      }
    }
  }).export(module);
});

/* EOF */