//392. Is Subsequence

var isSubsequence = function (s, t) {
  const len1 = s.length;
  const len2 = t.length;
  let i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === len1;
};

const s = "abc",
  t = "ahbgdc";

const result = isSubsequence(s, t);

console.log(result);
