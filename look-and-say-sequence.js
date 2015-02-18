function look(n) {
  if (n == 0) {
    return "1";
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
  return result + count + c;
}

for (var i = 0; i <= 10; i++) {
  console.log(i + " => " + look(i));
}
