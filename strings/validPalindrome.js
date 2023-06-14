//125. Valid Palindrome

var isPalindrome = function (s) {
  const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return newStr === newStr.split("").reverse().join("");
};

const result = isPalindrome("A man, a plan, a canal: Panama");

console.log(result);
