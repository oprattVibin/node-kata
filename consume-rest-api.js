// simple node.js example
// to consume REST api

var http = require('http');
var util = require('util');

var url = process.argv[2];

http.get(url, function(res) {
  var data = '';
  res.on('data', function (body){
    data += body;
    console.log(data) // print JSON data
    var obj = JSON.parse(data);
  });
});
