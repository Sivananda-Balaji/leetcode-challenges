//392. Is Subsequence

var isSubsequence = function (s, t) {
  let first = 0,
    second = 0;
  while (second < t.length) {
    if (s[first] === t[second]) {
      first++;
      second++;
    } else {
      second++;
    }
  }
  return first === s.length;
};

const s = "axc",
  t = "ahbgdc";

const result = isSubsequence(s, t);
console.log(result);
