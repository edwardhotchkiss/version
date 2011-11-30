
var vows = require("vows");
var assert = require("assert");

var version = require("../lib/version");

vows.describe("General Module Tests").addBatch({
  "when instantiating version":{
    topic:function(){ 
      return version;
    },
    "short should be an object":function(topic) {
      assert.equal(typeof(version), "object");
    }
  },
  "when evaluating version.fetch":{
    topic:function(){ 
      return version.fetch;
    },
    "version.fetch should be a functon":function(topic) {
      assert.equal(typeof(version.fetch), "function");
    }
  },
  "when fetching this packages version (by using .fetch without two parameters":{
    topic:function(){ 
      version.fetch(this.callback);
    },
    "we should receive no error back":function(error, version) {
      assert.equal(error, null);
    }
  }
}).export(module);

/* EOF */