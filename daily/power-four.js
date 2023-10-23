//342. Power of Four

var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n > 1) {
    if (n % 4 !== 0) {
      return false;
    }
    n = Math.floor(n / 4);
  }
  return true;
};

const result = isPowerOfFour(16);

console.log(result);
