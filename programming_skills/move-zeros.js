//283. Move Zeroes

var moveZeroes = function (nums) {
  let i = 0;
  let index = -1;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[++index] = nums[i];
    }
    i++;
  }
  for (let i = index + 1; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];

const result = moveZeroes(nums);

console.log(result);
