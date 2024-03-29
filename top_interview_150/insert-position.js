//35. Search Insert Position

var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const nums = [1, 3, 5, 6],
  target = 4;
const result = searchInsert(nums, target);

console.log(result);
