//1150. Check If a Number Is Majority Element in a Sorted Array

var isMajorityElement = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  const findIndex = (nums, start, end, index) => {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        if (index === "first" && nums[mid - 1] === target) {
          end = mid - 1;
        } else if (index === "last" && nums[mid + 1] === target) {
          start = mid + 1;
        } else {
          return mid;
        }
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  };
  let first = findIndex(nums, start, end, "first");
  let last = findIndex(nums, start, end, "last");
  return last - first + 1 > Math.floor(nums.length / 2);
};

const nums = [2, 4, 5, 5, 5, 5, 5, 6, 6],
  target = 5;

const result = isMajorityElement(nums, target);

console.log(result);

/**
 * var isMajorityElement = function (nums, target) {
  const times = Math.floor(nums.length / 2);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count++;
    }
  }
  return count > times;
};
 */
