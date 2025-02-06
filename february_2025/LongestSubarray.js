//3105. Longest Strictly Increasing or Strictly Decreasing Subarray

var longestMonotonicSubarray = function (nums) {
  let maxLength = 1,
    incLength = 1,
    decLength = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      decLength++;
      incLength = 1;
    } else if (nums[i] > nums[i - 1]) {
      incLength++;
      decLength = 1;
    } else {
      incLength = 1;
      decLength = 1;
    }
    maxLength = Math.max(maxLength, incLength, decLength);
  }
  return maxLength;
};

const nums = [1, 10, 10];

const result = longestMonotonicSubarray(nums);

console.log(result);
