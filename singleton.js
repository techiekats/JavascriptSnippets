var cache = (function () {
  var instance;
  function create () {
    console.log('created a globalCache');
    function addKey(key, value) {
      // underlying cache mechanics
    }

    function getKeyValue(key) {
      // get key value from cache
    }

    return {
      // public + private states and behaviors
      addKey: addKey,
      getKeyValue: getKeyValue
    };
  }

  return {
    getInstance: function() {
      instance = create();
      /*if(!instance) {
        instance = create();
      }
      else {
        console.log('returning existing instance');
      }
      return instance;*/
    }
  };

  function Singleton () {
    if(!instance) {
      instance = initialize();
    }
  };

})();

var globalCache = cache.getInstance(); 
var anotherGlobalCache = cache.getInstance();
var yetAnotherGlobalCache = cache.getInstance();