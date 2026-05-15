//153. Find Minimum in Rotated Sorted Array

var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const min = Math.floor((left + right) / 2);
    if (nums[min] > nums[right]) {
      left = min + 1;
    } else if (nums[min] <= nums[right]) {
      right = min;
    }
  }
  return nums[left];
};

const nums = [5, 1, 2, 3, 4];

const result = findMin(nums);

console.log(result);
