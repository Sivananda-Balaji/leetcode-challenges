//189. Rotate Array

var rotate = function (nums, k) {
  k = k % nums.length;
  const reverseArr = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };
  reverseArr(0, nums.length - 1);
  reverseArr(0, k - 1);
  reverseArr(k, nums.length - 1);
};

const nums = [-1];
k = 2;

rotate(nums, k);

console.log(nums);

/**
 * var rotate = function (nums, k) {
  k %= nums.length;
  nums.unshift(...nums.splice(-k));
  return nums;
};
 */
