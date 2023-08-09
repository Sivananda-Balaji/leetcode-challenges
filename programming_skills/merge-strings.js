//1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  let answer = "";
  for (let i = 0; i < len1 || i < len2; i++) {
    if (word1[i] && word2[i]) {
      answer += word1[i] + word2[i];
    }
    if (!word1[i] && word2[i]) {
      answer += word2[i];
    }
    if (word1[i] && !word2[i]) {
      answer += word1[i];
    }
  }
  return answer;
};

const word1 = "abcd",
  word2 = "pq";

const result = mergeAlternately(word1, word2);
console.log(result);
