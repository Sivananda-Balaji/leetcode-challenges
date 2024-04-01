//58. Length of Last Word

var lengthOfLastWord = function (s) {
  s = s.trim();
  let answer = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      return answer.length;
    }
    answer = s[i] + answer;
  }
  return answer.length;
};

const s = "Hello World";

const result = lengthOfLastWord(s);

console.log(result);
