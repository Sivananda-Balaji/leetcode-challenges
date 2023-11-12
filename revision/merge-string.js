//1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  let answer = "";
  let count = 0;
  for (let i = 0; i < word1.length && i < word2.length; i++) {
    answer += word1[i] + word2[i];
    count++;
  }
  if (count < word1.length) {
    answer += word1.slice(count);
  }
  if (count < word2.length) {
    answer += word2.slice(count);
  }
  return answer;
};

const word1 = "ab",
  word2 = "pqrs";
const result = mergeAlternately(word1, word2);

console.log(result);
