//326. Power of Three

var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n >= 3) {
    if (n % 3 !== 0) {
      return false;
    }
    n /= 3;
  }
  return true;
};

const result = isPowerOfThree(27);

console.log(result);
