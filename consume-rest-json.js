// simple node.js example
// to consume REST api

var http = require('http'); // for https use require('https')
var util = require('util');

var url = process.argv[2]; // read url from stdin

http.get(url, function(res) {
  var data = '';
  res.on('data', function (body){
    data += body; // essentially converts binary to string
    console.log(data) // print JSON data
    var obj = JSON.parse(data);
  });
});
