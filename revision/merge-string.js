//1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  let answer = "";
  const len1 = word1.length;
  const len2 = word2.length;
  let count1 = 0;
  let count2 = 0;
  while (count1 < len1 || count2 < len2) {
    if (count1 < len1) {
      answer += word1[count1++];
    }
    if (count2 < len2) {
      answer += word2[count2++];
    }
  }
  return answer;
};

const word1 = "abc",
  word2 = "pqr";
const result = mergeAlternately(word1, word2);

console.log(result);
