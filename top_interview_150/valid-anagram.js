//242. Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i],
      tChar = t[i];
    sMap[sChar] ? sMap[sChar]++ : (sMap[sChar] = 1);
    tMap[tChar] ? tMap[tChar]++ : (tMap[tChar] = 1);
  }
  for (let val in sMap) {
    if (sMap[val] !== tMap[val]) {
      return false;
    }
  }
  return true;
};

const s = "anagram",
  t = "nagaram";

const result = isAnagram(s, t);

console.log(result);
