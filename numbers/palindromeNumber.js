var isPalindrome = function (x) {
  let num = 0;
  let copy = x;
  while (copy > 0) {
    num = num * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }
  return num === x;
};

console.log(isPalindrome(101));
