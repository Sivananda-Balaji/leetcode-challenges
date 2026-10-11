//2778. Sum of Squares of Special Elements

var sumOfSquares = function (nums) {
  const len = nums.length;
  let sum = 0;
  for (let i = 1; i <= len; i++) {
    if (len % i === 0) {
      sum += nums[i - 1] * nums[i - 1];
    }
  }
  return sum;
};

const nums = [1, 2, 3, 4];

const result = sumOfSquares(nums);

console.log(result);
