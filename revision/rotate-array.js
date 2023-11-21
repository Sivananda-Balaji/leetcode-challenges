// /189. Rotate Array

var rotate = function (nums, k) {
  k = k % nums.length;
  const reverse = (nums, a, b) => {
    while (a < b) {
      [nums[a], nums[b]] = [nums[b], nums[a]];
      a++;
      b--;
    }
  };
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

const result = rotate(nums, k);

console.log(nums);
