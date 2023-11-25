//125. Valid Palindrome

var isPalindrome = function (s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] >= "a" && s[i] <= "z") ||
      (s[i] >= "A" && s[i] <= "Z") ||
      (s[i] >= "0" && s[i] <= "9")
    ) {
      newStr += s[i].toLowerCase();
    }
  }
  let i = 0,
    j = newStr.length - 1;
  while (i < j) {
    if (newStr[i] !== newStr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

const s = "A man, a plan, a canal: Panama";

const result = isPalindrome(s);

console.log(result);
