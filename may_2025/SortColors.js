//75. Sort Colors

var sortColors = function (nums) {
  let i = 0,
    j = 0,
    k = nums.length - 1;
  while (i <= k) {
    if (nums[i] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k--;
    }
  }
  return nums;
};

const nums = [2, 0, 2, 1, 1, 0];

const result = sortColors(nums);

console.log(result);
