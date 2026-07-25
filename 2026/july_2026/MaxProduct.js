//3536. Maximum Product of Two Digits

var maxProduct = function (n) {
  let first = -Infinity,
    second = -Infinity;
  while (n > 0) {
    const last = n % 10;
    if (last > first) {
      second = first;
      first = last;
    } else if (last > second && last <= first) {
      second = last;
    }
    n = Math.floor(n / 10);
  }
  return first * second;
};

const n = 124;

const result = maxProduct(n);

console.log(result);
