//1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence

var isPrefixOfWord = function (sentence, searchWord) {
  const arr = sentence.split(" ");
  let answer = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= searchWord.length) {
      let j = 0;
      for (; j < searchWord.length; j++) {
        if (searchWord[j] !== arr[i][j]) {
          break;
        }
      }
      if (j === searchWord.length) {
        answer = i + 1;
        break;
      }
    }
  }
  return answer;
};

const sentence = "i love eating burger",
  searchWord = "burg";

const result = isPrefixOfWord(sentence, searchWord);

console.log(result);
