// Uses the request api 
// https://github.com/mikeal/request

var request = require('request');

var post_data = function(url, json) {
  // request.post(url, json);
  var options = {
    uri: url,
    method: 'POST',
    json: json
  };
  request(options, function(err, res, body) {
    if (err) console.log(err);
    else console.log(body);
  });
};

var get_data = function() {
};

var post_with_auth = function() {
};

var get_with_auth = function() {
};
