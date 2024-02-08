//1816. Truncate Sentence

var truncateSentence = function (s, k) {
  const wordsArr = s.split(" ");
  let newStr = "";
  for (let i = 0; i < k; i++) {
    newStr += wordsArr[i] + " ";
  }
  return newStr.trim();
};

const s = "Hello how are you Contestant",
  k = 4;

const result = truncateSentence(s, k);

console.log(result);
