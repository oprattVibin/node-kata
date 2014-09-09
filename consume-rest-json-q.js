// simple node.js example
// to consume REST api

var http = require('http'); // for https use require('https')
var util = require('util');
var q = require('q');

// var url = process.argv[2]; // read url from stdin
var url = 'http://time.jsontest.com/';

var get = q.denodeify(http.get);
get(url).then(function (res) {
  res.on('data', function (body) {
    var data = '';
    data += body;
    console.log(data);
    var obj = JSON.parse(data);
  })
});
