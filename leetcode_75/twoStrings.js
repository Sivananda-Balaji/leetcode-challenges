//1657. Determine if Two Strings Are Close

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const word1Map = {},
    word2Map = {};
  for (let i = 0; i < word1.length; i++) {
    !word1Map[word1[i]] ? (word1Map[word1[i]] = 1) : word1Map[word1[i]]++;
  }
  for (let i = 0; i < word2.length; i++) {
    !word2Map[word2[i]] ? (word2Map[word2[i]] = 1) : word2Map[word2[i]]++;
  }
  const keys1 = Object.keys(word1Map).sort();
  const keys2 = Object.keys(word2Map).sort();
  if (keys1.join("") !== keys2.join("")) {
    return false;
  }
  const values1 = Object.values(word1Map).sort((a, b) => a - b);
  const values2 = Object.values(word2Map).sort((a, b) => a - b);
  return values1.toString() === values2.toString();
};

const result = closeStrings("cabbba", "abbccc");

console.log(result);
