//242. Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {};
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    sMap[val] ? sMap[val]++ : (sMap[val] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    const val = t[i];
    if (!sMap[val]) {
      return false;
    }
    sMap[val] === 1 ? delete sMap[val] : sMap[val]--;
  }
  return Object.keys(sMap).length === 0;
};

const s = "anagram",
  t = "nagaram";

const result = isAnagram(s, t);
console.log(result);

/**
 * var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const countArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const sVal = s.charCodeAt(i) - 97;
    const tVal = t.charCodeAt(i) - 97;
    countArr[sVal]++;
    countArr[tVal]--;
  }
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] !== 0) {
      return false;
    }
  }
  return true;
};
 */
