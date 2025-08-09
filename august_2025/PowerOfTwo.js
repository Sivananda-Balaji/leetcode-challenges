//231. Power of Two

var isPowerOfTwo = function (n) {
  if (n == 1) {
    return true;
  }
  while (n > 1) {
    if (n % 2 == 0) {
      n = Math.floor(n / 2);
    } else {
      return false;
    }
  }
  return n === 1 ? true : false;
};

const n = 3;

const result = isPowerOfTwo(n);

console.log(result);
