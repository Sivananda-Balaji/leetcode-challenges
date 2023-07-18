//290. Word Pattern

var wordPattern = function (pattern, s) {
  const wordArr = s.split(" ");
  const len = wordArr.length;
  if (pattern.length !== len) {
    return false;
  }
  const patternMap = {};
  for (let i = 0; i < len; i++) {
    const letter = pattern[i];
    const word = wordArr[i];
    if (!patternMap[letter] && !Object.values(patternMap).includes(word)) {
      patternMap[letter] = word;
    } else if (patternMap[letter] !== word) {
      return false;
    }
  }
  return true;
};

const pattern = "abba",
  s = "dog dog dog dog";

const result = wordPattern(pattern, s);

console.log(result);
