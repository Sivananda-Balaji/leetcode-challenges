//1464. Maximum Product of Two Elements in an Array

var maxProduct = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= first) {
      second = first;
      first = nums[i];
    } else if (nums[i] >= second) {
      second = nums[i];
    }
  }
  return (first - 1) * (second - 1);
};

const nums = [3, 4, 5, 2];

const result = maxProduct(nums);

console.log(result);
