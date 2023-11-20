//345. Reverse Vowels of a String

var reverseVowels = function (s) {
  const vowelsArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let left = 0;
  let right = s.length - 1;
  const sArr = s.split("");
  while (left < right) {
    if (vowelsArr.includes(sArr[left]) && vowelsArr.includes(sArr[right])) {
      [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
      left++;
      right--;
    } else if (!vowelsArr.includes(sArr[left])) {
      left++;
    } else if (!vowelsArr.includes(sArr[right])) {
      right--;
    }
  }
  return sArr.join("");
};

const result = reverseVowels("aA");

console.log(result);
