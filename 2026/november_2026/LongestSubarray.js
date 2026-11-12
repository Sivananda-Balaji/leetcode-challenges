//3105. Longest Strictly Increasing or Strictly Decreasing Subarray

var longestMonotonicSubarray = function (nums) {
  let increase = 1,
    decrease = 1,
    maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      increase++;
      decrease = 1;
    } else if (nums[i] < nums[i - 1]) {
      decrease++;
      increase = 1;
    } else {
      increase = 1;
      decrease = 1;
    }
    maxLength = Math.max(increase, decrease, maxLength);
  }
  return maxLength;
};

const nums = [1, 4, 3, 3, 2];

const result = longestMonotonicSubarray(nums);

console.log(result);
