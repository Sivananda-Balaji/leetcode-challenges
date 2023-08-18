//58. Length of Last Word

var lengthOfLastWord = function (s) {
  s = s.trim();
  let i = s.length - 1;
  let len = 0;
  while (i >= 0) {
    if (s[i] === " ") {
      break;
    }
    len++;
    i--;
  }
  return len;
};

const s = "luffy is still joyboy";

const result = lengthOfLastWord(s);
console.log(result);
