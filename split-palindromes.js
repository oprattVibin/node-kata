function isPalindrome(str) {
  var s = 0,
  e = str.length - 1;

  while (s < e) {
    if (str[s] !== str[e]) {
      return false;
    }
    s++;
    e--;
  }

  return true;
}

function splitPalindrome(str) {
  if (typeof str == 'undefined' || str == null || str === "") {
    return [];
  }
  if (isPalindrome(str)) {
    return [str];
  }

  for (var i = 1; i < str.length; i++) {
    var first = str.slice(0, i);
    var firstPalindrome = splitPalindrome(first);
    if (first.length == 0) continue;
    var second = str.slice(i);
    var secondPalindrome = splitPalindrome(second);
    if (second.length == 0) continue;
    return firstPalindrome.concat(secondPalindrome);
  }

  return [];
}

function findAllPalindromes(str) {
  var max = str.length;
  var result = [];
  for (var i = 0; i < str.length; i++) {
    console.log("i", i);
    var f = str.slice(0, i);
    var flen = splitPalindrome(f);
    var s = str.slice(i);
    var slen = splitPalindrome(s)
    var len = flen.length + slen.length;
    console.log(f, "=>", flen)
    console.log(s, "=>", slen);
    console.log('len', len);
    console.log();
    if (len < max) {
      max = len;
      result = flen.concat(slen);
    }
  }

  console.log("Answer");
  console.log("Min length:", max);
  console.log("Splits:", result);
}

findAllPalindromes("abbab");
