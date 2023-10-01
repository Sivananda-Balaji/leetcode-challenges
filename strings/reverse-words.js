//557. Reverse Words in a String III

var reverseWords = function (s) {
  let answer = "";
  let words = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      words = s[i] + words;
    } else {
      answer += words + " ";
      words = "";
    }
  }
  return answer + words;
};

const s = "Let's take LeetCode contest";

const result = reverseWords(s);

console.log(result);
