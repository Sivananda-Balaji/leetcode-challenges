//392. Is Subsequence

var isSubsequence = function (s, t) {
  let sLen = s.length;
  let tLen = t.length;
  let left = 0;
  let right = 0;
  while (left < sLen && right < tLen) {
    if (s[left] === t[right]) {
      left++;
      right++;
    } else {
      right++;
    }
  }
  return left === sLen;
};

const result = isSubsequence("aaaaaa", "bbaaaa");

console.log(result);
