//1408. String Matching in an Array

var stringMatching = function (words) {
  const answer = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        answer.push(words[i]);
        break;
      }
    }
  }
  return answer;
};

const words = ["leetcode", "et", "code"];

const result = stringMatching(words);

console.log(result);
