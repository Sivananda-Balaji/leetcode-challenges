//2460. Apply Operations to an Array

var applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      let j = i + 1;
      while (nums[j] === 0 && j < nums.length) {
        j++;
      }
      if (i < nums.length && j < nums.length) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    i++;
  }
  return nums;
};

const nums = [847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272];

const result = applyOperations(nums);

console.log(result);
