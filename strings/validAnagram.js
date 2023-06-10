//242. Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {};
  for (let i = 0; i < s.length; i++) {
    if (!sMap[s[i]]) {
      sMap[s[i]] = 1;
    } else {
      sMap[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!sMap[t[i]]) {
      return false;
    }
    sMap[t[i]]--;
    if (sMap[t[i]] === 0) {
      delete sMap[t[i]];
    }
  }
  return true;
};

const s = "anagram",
  t = "nagaram";

const result = isAnagram(s, t);

console.log(result);
