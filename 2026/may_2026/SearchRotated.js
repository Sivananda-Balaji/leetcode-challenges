//33. Search in Rotated Sorted Array

var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;

const result = search(nums, target);

console.log(result);
