//1752. Check if Array Is Sorted and Rotated

var check = function (nums) {
  const len = nums.length;
  let orderBreaks = false;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1] && !orderBreaks) {
      orderBreaks = true;
    } else if (nums[i] > nums[i + 1] && orderBreaks) {
      return false;
    }
  }
  if (orderBreaks) {
    if (nums[0] >= nums[len - 1]) {
      return true;
    } else {
      return false;
    }
  } else {
    if (nums[0] <= nums[len - 1]) {
      return true;
    } else {
      return false;
    }
  }
};

const nums = [1, 1, 1];

const result = check(nums);

console.log(result);
