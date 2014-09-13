// js map and reduce example
function sqr(x) { return x * x; }
function sum(a, b) { return a + b; }

var result = [1, 2, 3, 4].map(sqr).reduce(sum);
console.log(result);
