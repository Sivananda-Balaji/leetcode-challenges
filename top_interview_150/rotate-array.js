//189. Rotate Array

var rotate = function (nums, k) {
  k %= nums.length;
  nums.unshift(...nums.splice(-k));
  return nums;
};

const nums = [1, 2],
  k = 3;

const result = rotate(nums, k);

console.log(result);
