//34. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
  const lower = findBound(nums, target, true);
  const higher = findBound(nums, target, false);
  return [lower, higher];
};

const findBound = (nums, target, lowerBound) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      if (nums[mid] === nums[mid - 1] && lowerBound) {
        high = mid - 1;
      } else if (nums[mid] === nums[mid + 1] && !lowerBound) {
        low = mid + 1;
      } else {
        return mid;
      }
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

const nums = [5, 7, 7, 8, 8, 10],
  target = 8;

const result = searchRange(nums, target);

console.log(result);
