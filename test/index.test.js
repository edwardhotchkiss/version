
var vows = require("vows");
var assert = require("assert");

var version = require("../lib/version");

vows.describe("General Module Tests").addBatch({
  "when instantiating version":{
    topic:function(){ 
      return version;
    },
    "version should be an object and version.fetch and should be a function":function(topic) {
      assert.equal(typeof(version), "function");
      assert.equal(typeof(version.fetch), "function");
    }
  },
  "when fetching this packages version (by using .fetch without two parameters":{
    topic:function(){ 
      version.fetch("version", this.callback);
    },
    "we should receive no error back":function(error, version) {
      assert.equal(error, null);
    }
  }
}).export(module);

/* EOF */