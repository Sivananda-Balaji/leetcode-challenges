//1935. Maximum Number of Words You Can Type

var canBeTypedWords = function (text, brokenLetters) {
  let count = 0;
  const textArr = text.split(" ");
  for (let i = 0; i < textArr.length; i++) {
    const word = textArr[i];
    for (let j = 0; j < brokenLetters.length; j++) {
      if (word.includes(brokenLetters[j])) {
        count++;
        break;
      }
    }
  }
  return textArr.length - count;
};

const text = "hello world",
  brokenLetters = "ad";

const result = canBeTypedWords(text, brokenLetters);

console.log(result);
