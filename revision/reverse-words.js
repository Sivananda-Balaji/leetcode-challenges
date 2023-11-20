//151. Reverse Words in a String

var reverseWords = function (s) {
  const wordsArr = s.trim().split(/\s+/);
  return wordsArr.reverse().join(" ");
};

const s = "a good   example";

const result = reverseWords(s);

console.log(result);
