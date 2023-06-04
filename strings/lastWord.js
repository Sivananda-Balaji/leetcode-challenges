//58. Length of Last Word

var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (s[i] === " " && count > 0) {
      return count;
    }
  }
  return count;
};

const str = "   fly me   to   the moon  ";

const result = lengthOfLastWord(str);

console.log(result);
