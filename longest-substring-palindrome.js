function longestPalindrome(str) {
  if (!str && str === "") return null;

  var maxLength = 0,
  maxP = {};

  // for each center point check if it is a palindrome
  for (var i = 0; i < str.length; i++) {
    var p = getPalindrome(i, str);
    if (p.length > maxLength) {
      maxLength = p.length;
      maxP = p;
    }
  }

  return str.slice(maxP.start, maxP.end);
}

function getPalindrome(index, str) {
  // begin with even first
  var left = index;
  var right = index + 1;

  while (left >= 0 && right < str.length) {
    if (str[left] == str[right]) {
      left--;
      right++;
    } else {
      break;
    }
  }

  var L = left,
    R = right,
    len = R - L;

  // do odd
  left = index,
  right = index;

  while (left >= 0 && right < str.length) {
    if (str[left] == str[right]) {
      left--;
      right++;
    } else {
      break;
    }
  }

  if (right - left > len) {
    R = right;
    L = left;
    len = R - L;
  }

  return { length: len, start: L, end: R };
}
