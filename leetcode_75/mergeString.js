//1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  let res = "";
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (word1[i] && word2[i]) {
      res += word1[i] + word2[i];
    }
    if (!word1[i] && word2[i]) {
      res += word2[i];
    }
    if (word1[i] && !word2[i]) {
      res += word1[i];
    }
  }
  return res;
};

const result = mergeAlternately("abcd", "pq");
console.log(result);
