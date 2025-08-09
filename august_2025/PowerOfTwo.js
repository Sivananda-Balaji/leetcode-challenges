//231. Power of Two

var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

const n = 3;

const result = isPowerOfTwo(n);

console.log(result);
