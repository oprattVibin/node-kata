function look(n) {
  if (n == 0) {
    return "1";
  }

  if (n == 1) {
    return "11";
  }

  var p = look(n - 1),
  c = p[0],
  count = 1,
  result;

  for (var i = 1; i < p.length; i++) {
    if (p[i] == c) {
      count++;
    } else {
      result += c + count;
      c = p[i];
      count = 1;
    }
  }
  return result;
}
