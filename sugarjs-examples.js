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

Date.create('today').isAfter('yesterday'); // => true
Date.create('today').isBefore('tomorrow'); // => true
Date.create('today').isBetween('yesterday', 'tomorrow'); // => true

var date = Date.create("2014-01-01"); // => date = 2014-01-01
date.iso() // returns iso date format



"string".chars(); // => ['s', 't', 'r', 'i', 'n', 'g']
"string".chars(function(c) {
  console.log(c);
});

"string".each(function(c) { console.log(c); });
"string".each(/[0-9]/, function(c) { console.log("found number: ", c); });

"string".endsWith("ing"); // => true

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

// Good for string searching in an array of strings
[1, 2, 3, 4, 4].find(1);
[1, 2, 3, 4, 4].findAll(4);
[1, 2, 4, 4, 5, 7, 8].findAll(function (n){
  return n >= 5;
});

[1, 2, [3, 3, [4, 4], [2, 3, 4]], [1 , 2]].flatten(); // => [1, 2, 3, 3, 4, 4, 2, 3, 4, 1, 2]

["hello", "to", "you", "man"].groupBy('length'); // => { '2': [ 'to' ],  '3': [ 'you', 'man' ],  '5': [ 'hello' ] }
["boy", "ball", "cat"].groupBy(function (n) {
  return n[0];
}); // => { b: [ 'boy', 'ball' ],  c: [ 'cat' ] }

[].isEmpty() // => true
[null, undefined].isEmpty() // => true

[1, 2, 3].map(function (n){
  return n * n;
}); // => [1, 4, 9]

[1, 2, 3, 4].randomize();

[1, 2, 3, 4].reduce(function (a, b) {
  return a + b;
}); // => 10

// Returns a random element
[1, 2, 3, 4].sample();

// Returns n random element
[1, 2, 3, 4].sample(2);

// Object examples
Object.fromQueryString('foo=broken&bar=baz') // => { "foo": "broken", "bar": "baz" }
Object.fromQueryString('arr[]=1&arr[]=2&arr[]3') // => { "arr": ["1", "2", "3"] }
