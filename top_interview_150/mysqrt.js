//69. Sqrt(x)

var mySqrt = function (x) {
  let low = 1;
  let high = x;
  let res = 0;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
      res = mid;
    }
  }
  return res;
};

const result = mySqrt(3);

console.log(result);
