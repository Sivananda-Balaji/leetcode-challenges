//1800. Maximum Ascending Subarray Sum

var maxAscendingSum = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length < 2) {
    return nums[0];
  }
  let maxSum = nums[0];
  let temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      temp += nums[i];
    } else if (nums[i] <= nums[i - 1]) {
      temp = nums[i];
    }
    maxSum = Math.max(temp, maxSum);
  }
  return maxSum;
};

const nums = [5, 5, 6, 6, 6, 9, 1, 2];

const result = maxAscendingSum(nums);

console.log(result);
