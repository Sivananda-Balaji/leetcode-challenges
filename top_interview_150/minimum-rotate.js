//153. Find Minimum in Rotated Sorted Array

var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let start = 0;
  let end = nums.length - 1;
  if (nums[start] < nums[end]) {
    return nums[start];
  }
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};

const nums = [4, 5, 6, 7, 0, 1, 2];

const result = findMin(nums);

console.log(result);
