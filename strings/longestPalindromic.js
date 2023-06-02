//5. Longest Palindromic Substring

var longestPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const subString = s.slice(i, j + 1);
      if (
        subString === subString.split("").reverse().join("") &&
        result.length < subString.length
      ) {
        result = subString;
      }
    }
  }
  return result;
};

const result = longestPalindrome("cbbd");

console.log(result);
