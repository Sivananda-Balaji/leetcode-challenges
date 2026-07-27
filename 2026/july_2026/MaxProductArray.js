//1464. Maximum Product of Two Elements in an Array

var maxProduct = function (nums) {
  let first = -Infinity,
    second = -Infinity;
  for (let num of nums) {
    if (num >= first) {
      second = first;
      first = num;
    } else if (num >= second) {
      second = num;
    }
  }
  return (first - 1) * (second - 1);
};

const nums = [3, 4, 5, 2];

const result = maxProduct(nums);

console.log(result);
