//1662. Check If Two String Arrays are Equivalent

var arrayStringsAreEqual = function (word1, word2) {
  let str1 = "",
    str2 = "";
  for (let i = 0; i < word1.length; i++) {
    str1 += word1[i];
  }
  for (let i = 0; i < word2.length; i++) {
    str2 += word2[i];
  }
  return str1 === str2;
};

const word1 = ["ab", "c"],
  word2 = ["a", "bc"];

const result = arrayStringsAreEqual(word1, word2);

console.log(result);
