//162. Find Peak Element

var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const result = findPeakElement([1, 2, 3, 1]);

console.log(result);

/**
 * 
 * var findPeakElement = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return nums.length - 1;
};
 */
