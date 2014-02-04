// Example usage of sugar.js - http://sugarjs.com/api
// Can be use both on frontend or with node
// install sugar.js
// npm/bower install sugar


// Few nice date examples
var date = new Date();
console.log(date);
date.addMinutes(20);
console.log(date);
date.addHours(2);
console.log(date);
date.addDays(7);
console.log(date);

var dateRange = Date.range("2013-01-01", "2014-01-01");

"string".chars(); // => ['s', 't', 'r', 'i', 'n', 'g']
"string".chars(function(c) {
  console.log(c);
});

"string".each(function(c) { console.log(c); });
"string".each(/[0-9]/, function(c) { console.log("found number: ", c); });

"string".endsWith("ing");

"<a>Hello & Goodbye</p>".escapeHTML();

// Think has() as contains()
"string".has("tri");// => true

"         ".isBlank() // => true

// pluraize -> similar to the rails pluraize
"goose".pluralize(); // => geese
"potato".pluralize(); // => potatoes

// Numbers

// Get a random number between ranges
Number.random(10, 20);

Number.range(5, 10).every(function (n) {
  console.log(n);
});

// Abbreviated numbers
// Good for things like showing number of tweets or likes
(1000).abbr(); // => 1K
(1000000).abbr(); // => 1M

(65).chr(); // => 'A'


// Arrays
["hello", "world", "how"].map('length') // => [5, 5, 3]
['a', 'b', 'c', 'd', 'e'].forEach(function (c) {
  console.log(c);
});
// Can use either forEach or each
['a', 'b', 'c', 'd', 'e'].each(function (c) {
  console.log(c);
});

[1,null,2,undefined,3].compact() // => [1, 2, 3]

['a', 'b', 'c'].count(/b/) // => 1
[1, 2, 1, 1, 3, 2, 2, 1].count(1) // => 4

[6, 7, 8, 9].every(function (n) {
  return n > 5;
}); // => true

[1, 2, 2, 3].filter(2) // => [2, 2,]
[1, 2, 4, 4, 5, 7, 8].filter(function (n){
  return n > 5;
}); // => [5, 7, 8]

