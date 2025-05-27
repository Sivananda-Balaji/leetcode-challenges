//2894. Divisible and Non-divisible Sums Difference

var differenceOfSums = function (n, m) {
  let sum1 = 0,
    sum2 = 0;
  for (let i = 1; i <= n; i++) {
    const val = i % m;
    if (val !== 0) {
      sum1 += i;
    } else if (val === 0) {
      sum2 += i;
    }
  }
  return sum1 - sum2;
};

const n = 10,
  m = 3;

const result = differenceOfSums(n, m);

console.log(result);
