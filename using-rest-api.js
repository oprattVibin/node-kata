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

var get_data = function(url) {
  request(url, function(err, res, body) {
    if (err) {
      console.log(err);
      return {};
    }
    else {
      console.log(body);
      return JSON.parse(body);
    }
  });
};

var post_with_auth = function(oauth, url, json) {
};

var get_with_auth = function(oauth, url) {
};
