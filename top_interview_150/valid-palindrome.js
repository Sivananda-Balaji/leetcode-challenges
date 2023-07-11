//125. Valid Palindrome

var isPalindrome = function (s) {
  let start = 0,
    end = s.length - 1;
  s = s.toLowerCase();
  const isAlphaNum = (letter) => {
    return (letter >= "a" && letter <= "z") || (letter >= "0" && letter <= "9");
  };
  while (start < end) {
    if (isAlphaNum(s[start]) && isAlphaNum(s[end])) {
      if (s[start] === s[end]) {
        start++;
        end--;
      } else {
        return false;
      }
    }
    if (!isAlphaNum(s[start])) {
      start++;
    }
    if (!isAlphaNum(s[end])) {
      end--;
    }
  }
  return true;
};

const str = "A man, a plan, a canal: Panama";
const result = isPalindrome(str);
console.log(result);

/**
 * var isPalindrome = function (s) {
  s = s
    .toLowerCase()
    .split("")
    .filter(
      (letter) =>
        (letter >= "a" && letter <= "z") || (letter >= "0" && letter <= "9")
    );
  return s.join("") === s.reverse().join("");
};
 */
