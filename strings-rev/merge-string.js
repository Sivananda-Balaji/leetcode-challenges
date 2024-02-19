//1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  let answer = "";
  let i = 0,
    j = 0;
  while (i < word1.length && j < word2.length) {
    answer += word1[i++] + word2[j++];
  }
  if (i < word1.length) {
    answer += word1.slice(i);
  }
  if (j < word2.length) {
    answer += word2.slice(j);
  }
  return answer;
};

const word1 = "abcd",
  word2 = "pq";

const result = mergeAlternately(word1, word2);

console.log(result);
