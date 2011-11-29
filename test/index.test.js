
var vows = require("vows");
var assert = require("assert");

var version = require("../lib/version");

vows.describe("General Module Tests").addBatch({
  "when instantiating version":{
    topic:function(){ 
      return version;
    },
    "short should be a function":function(topic) {
      assert.equal(typeof(version), "function");
    }
  }
}).export(module);

/* EOF */