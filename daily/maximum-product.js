//1464. Maximum Product of Two Elements in an Array

var maxProduct = function (nums) {
  let first = nums[0];
  let second = nums[1];
  for (let i = 1; i < nums.length; i++) {
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
