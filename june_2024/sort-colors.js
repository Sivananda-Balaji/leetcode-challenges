//75. Sort Colors

var sortColors = function (nums) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count0++;
    } else if (nums[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }
  for (let i = 0; i < count0; i++) {
    nums[i] = 0;
  }
  for (let i = 0; i < count1; i++) {
    nums[i + count0] = 1;
  }
  for (i = 0; i < count2; i++) {
    nums[i + count0 + count1] = 2;
  }
};

const nums = [2, 0, 2, 1, 1, 0];

sortColors(nums);

console.log(nums);
