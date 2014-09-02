// promises in node.js

var q = require('q');

// method 1
var readFile = q.denodeify(fs.readFile);
readFile('test.txt')
.then(function (data) { console.log(data); });

// method 2
q.ncall(fs.readFile, fs, 'test.txt')
.then(function (data) { console.log(data); });

// method 3
var deferred = q.defer();
fs.readFile('text.txt', deferred.node());
return deferred.promise;
