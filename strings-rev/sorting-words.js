//1859. Sorting the Sentence

var sortSentence = function (s) {
  const sArr = s.split(" ");
  let wordArr = new Array(sArr.length);
  for (let i = 0; i < sArr.length; i++) {
    const word = sArr[i];
    wordArr[word.at(-1) - 1] = sArr[i];
  }
  let answer = "";
  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i].slice(0, wordArr[i].length - 1);
    answer += word + " ";
  }
  return answer.trim();
};

const s = "is2 sentence4 This1 a3";

const result = sortSentence(s);

console.log(result);
