//342. Power of Four

var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n > 1) {
    if (n % 4 === 0) {
      n /= 4;
    } else {
      return false;
    }
  }
  return n === 1 ? true : false;
};

const n = 5;

const result = isPowerOfFour(n);

console.log(result);
