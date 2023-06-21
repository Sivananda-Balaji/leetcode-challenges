//151. Reverse Words in a String

var reverseWords = function (s) {
  let newStr = "";
  s = s.trim().split(" ");
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i].length > 0) {
      newStr += s[i] + " ";
    }
  }
  return newStr.trim();
};

const result = reverseWords("the sky is blue");

console.log(result);
