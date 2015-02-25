function mergeRange(ranges, range) {
 var result = [],
 toBeMerged = [],
 toBeMerged.push(range);

 ranges.forEach(function (r) {
  if (overlap(range, r)) {
    toBeMerged.push(r);
  } else {
    result.push(r);
  }
 });

 result.push(merge(toBeMerged));
 return result;
}

function merge(ranges) {
  // find min, max return a new object
  var min = ranges.reduce(function (a, b) {
    return a.begin < b.begin ? a : b;
  });

  var max = ranges.reduce(function (a, b) {
    return a.end > b.end ? a : b;
  });

  return { begin: min.begin, end: max: end };
}

function overlap(a, b) {
  // a => { begin, end }
  if (a.begin > b.begin) {
    return a.begin < b.end;
  } else {
    return b.begin < a.end;
  }
}
