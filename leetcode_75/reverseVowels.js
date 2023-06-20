//345. Reverse Vowels of a String

var reverseVowels = function (s) {
  let i = 0;
  let j = s.length - 1;
  s = s.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  while (i < j) {
    if (
      vowels.includes(s[i].toLowerCase()) &&
      vowels.includes(s[j].toLowerCase())
    ) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
      continue;
    }
    if (!vowels.includes(s[i].toLowerCase())) {
      i++;
    }
    if (!vowels.includes(s[j].toLowerCase())) {
      j--;
    }
  }
  return s.join("");
};

const result = reverseVowels("leetcode");

console.log(result);
