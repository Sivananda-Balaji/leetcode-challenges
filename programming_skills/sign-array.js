//1822. Sign of the Product of an Array

var arraySign = function (nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product > 0 ? 1 : product < 0 ? -1 : 0;
};

const nums = [-1, 1, -1, 1, -1];

const result = arraySign(nums);

console.log(result);
