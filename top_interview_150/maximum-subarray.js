// /53. Maximum Subarray

var maxSubArray = function (nums) {
  let answer = nums[0];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], nums[i] + max);
    answer = Math.max(max, answer);
  }
  return answer;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const result = maxSubArray(nums);

console.log(result);
