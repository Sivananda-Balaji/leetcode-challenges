//1662. Check If Two String Arrays are Equivalent

var arrayStringsAreEqual = function (word1, word2) {
  let i = 0,
    j = 0;
  let index1 = 0,
    index2 = 0;
  while (i < word1.length && j < word2.length) {
    if (word1[i][index1] !== word2[j][index2]) {
      return false;
    }
    index1++;
    index2++;
    if (index1 === word1[i].length) {
      index1 = 0;
      i++;
    }
    if (index2 === word2[j].length) {
      index2 = 0;
      j++;
    }
  }
  return i === word1.length && j === word2.length;
};

const word1 = ["ab", "c"],
  word2 = ["a", "bc"];

const result = arrayStringsAreEqual(word1, word2);

console.log(result);
