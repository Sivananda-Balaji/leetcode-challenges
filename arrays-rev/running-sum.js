//1480. Running Sum of 1d Array

var runningSum = function (nums) {
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    value += nums[i];
    nums[i] = value;
  }
  return nums;
};

const nums = [1, 2, 3, 4];

const result = runningSum(nums);

console.log(result);
