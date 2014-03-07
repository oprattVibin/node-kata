// Q.js example to show how to use promises
// For detailed examples: http://documentup.com/kriskowal/q
// Using promises is good if there are nested callbacks
// or things need to be done sequentially.

// Example if your code looks something like this
function one(arg1, callback) {
  // Do something
  callback(return_value);
}

// Inorder to access the return_value
function two(arg1) {
  one(arg1, function(result){
    // Do something with the result
  }
}

// With Q.js
var Q = require('q');

function one(arg1, callback) {
  var deferred = Q.defer();
  
  // Do something
  
  return deferred.promise.nodeify(callback);
}

// In order to get the result no need to pass a callback
function two(arg1) {
  one(arg1).then(function (res){
    
  }).done();
}

// Scenario #2
// Need to call functions sequentially that
// take callbacks as parameters
