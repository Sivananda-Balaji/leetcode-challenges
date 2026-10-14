//3723. Maximize Sum of Squares of Digits

var maxSumOfSquares = function (num, sum) {
  if (sum > num * 9) {
    return "";
  }
  let ans = "";
  let remainingSum = sum;
  for (let i = 0; i < num; i++) {
    const digit = Math.min(9, remainingSum);
    ans += digit;
    remainingSum = remainingSum - digit;
  }
  return ans;
};

const num = 2,
  sum = 3;

const result = maxSumOfSquares(num, sum);

console.log(result);
