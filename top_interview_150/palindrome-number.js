//9. Palindrome Number

var isPalindrome = function (x) {
  let num = 0;
  let xValue = x;
  while (xValue > 0) {
    num = num * 10 + (xValue % 10);
    xValue = Math.floor(xValue / 10);
  }
  return num === x;
};

const result = isPalindrome(121);

console.log(result);
