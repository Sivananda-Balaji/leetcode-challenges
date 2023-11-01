//151. Reverse Words in a String

var reverseWords = function (s) {
  s = s.trim();
  let answer = "";
  let temp = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && temp.length > 0) {
      answer += temp + " ";
      temp = "";
    } else if (s[i] !== " ") {
      temp = s[i] + temp;
    }
  }
  return (answer + temp).trim();
};

const s = "a good   example";

const result = reverseWords(s);

console.log(result);
