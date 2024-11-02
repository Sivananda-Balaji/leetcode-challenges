//2490. Circular Sentence

var isCircularSentence = function (sentence) {
  const words = sentence.trim().split(" ");
  if (words.length < 2 && words[0][0] === words[0].at(-1)) {
    return true;
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].at(-1) !== words[i + 1][0]) {
      return false;
    }
  }
  return words[0][0] === words[words.length - 1].at(-1);
};

const sentence = "leetcode exercises sound delightful";

const result = isCircularSentence(sentence);

console.log(result);
