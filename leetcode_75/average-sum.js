//643. Maximum Average Subarray I

var findMaxAverage = function (nums, k) {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  let sum = maxSum;
  let j = k;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[k - j];
    j--;
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum / k;
};

const nums = [1, 12, -5, -6, 50, 3],
  k = 4;

const result = findMaxAverage(nums, k);

console.log(result);
