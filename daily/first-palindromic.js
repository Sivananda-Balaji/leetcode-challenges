//2108. Find First Palindromic String in the Array

var firstPalindrome = function (words) {
  const checkPalindrome = (word) => {
    let left = 0,
      right = word.length - 1;
    while (left < right) {
      if (word[left] !== word[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  for (let i = 0; i < words.length; i++) {
    if (checkPalindrome(words[i])) {
      return words[i];
    }
  }
  return "";
};

const words = ["abc", "car", "ada", "racecar", "cool"];

const result = firstPalindrome(words);

console.log(result);
