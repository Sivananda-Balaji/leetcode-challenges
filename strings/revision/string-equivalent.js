//1662. Check If Two String Arrays are Equivalent

var arrayStringsAreEqual = function (word1, word2) {
  const str1 = word1.length;
  const str2 = word2.length;
  return str1 === str2;
};

const word1 = ["ab", "c"],
  word2 = ["a", "bc"];

const result = arrayStringsAreEqual(word1, word2);

console.log(result);
