//80. Remove Duplicates from Sorted Array II

var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }
  let index = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[index - 2]) {
      nums[index++] = nums[i];
    }
  }
  return index;
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

const result = removeDuplicates(nums);

console.log(result);
