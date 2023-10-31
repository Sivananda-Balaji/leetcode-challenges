//345. Reverse Vowels of a String

var reverseVowels = function (s) {
  const vowelsArr = [];
  const vowels = "aeiou";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      vowelsArr.push(s[i]);
    }
  }
  let answer = "";
  let j = vowelsArr.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase()) && j >= 0) {
      answer += vowelsArr[j--];
    } else {
      answer += s[i];
    }
  }
  return answer;
};

const result = reverseVowels("aA");

console.log(result);
