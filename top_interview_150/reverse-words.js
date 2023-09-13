//151. Reverse Words in a String

var reverseWords = function (s) {
  let answer = "";
  const strArr = s.trim().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 0) {
      answer = strArr[i] + " " + answer;
    }
  }
  return answer.trim();
};

const s = "a good   example";

const result = reverseWords(s);

console.log(result);
