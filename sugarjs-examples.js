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
