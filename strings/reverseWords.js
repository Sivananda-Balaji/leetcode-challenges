//151. Reverse Words in a String

var reverseWords = function (s) {
  const strArr = s.trim().split(" ");
  let newStr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i].length > 0) {
      newStr += strArr[i] + " ";
    }
  }
  return newStr.trim();
};

const result = reverseWords("a good   example");

console.log(result);
