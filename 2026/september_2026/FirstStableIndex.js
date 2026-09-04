//3903. Smallest Stable Index I

var firstStableIndex = function (nums, k) {
  const len = nums.length;
  let max = -Infinity,
    min = Infinity;
  const suffixMin = new Array(len);
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] < min) {
      min = nums[i];
    }
    suffixMin[i] = min;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    if (max - suffixMin[i] <= k) {
      return i;
    }
  }
  return -1;
};

const nums = [5, 0, 1, 4],
  k = 3;

const result = firstStableIndex(nums, k);

console.log(result);
