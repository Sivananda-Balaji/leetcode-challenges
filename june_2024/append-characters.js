//2486. Append Characters to String to Make Subsequence

var appendCharacters = function (s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      j++;
    }
    i++;
  }
  return t.length - j;
};

const s = "coaching",
  t = "coding";

const result = appendCharacters(s, t);

console.log(result);
