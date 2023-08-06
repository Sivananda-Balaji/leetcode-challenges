//58. Length of Last Word
var lengthOfLastWord = function (s) {
  s = s.trim();
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      return count;
    }
    count++;
  }
  return count;
};

const s = "good day";

const result = lengthOfLastWord(s);
console.log(result);
