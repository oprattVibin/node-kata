var assert = require('assert');

var cache = {};

function look(n) {
  if (n <= 0) {
    return '1';
  }
  
  if (cache[n]) {
    return cache[n];
  }

  var p = look(n - 1),
  c = p[0],
  count = 1,
  result = '';

  for (var i = 1; i < p.length; i++) {
    if (p[i] == c) {
      count++;
    } else {
      result += count + c;
      c = p[i];
      count = 1;
    }
  }
  result += count + c;
  cache[n] = result;
  return result;
}

for (var i = 0; i <= 10; i++) {
  console.log(i, ' => ', look(i));
}

assert.equal(look(0), '1');
assert.equal(look(1), '11');
assert.equal(look(10), '11131221133112132113212221');
