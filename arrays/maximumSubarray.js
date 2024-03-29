//53. Maximum Subarray

var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(result);
