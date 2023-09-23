//976. Largest Perimeter Triangle

var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i],
      num2 = nums[i + 1],
      num3 = nums[i + 2];
    if (num1 < num2 + num3) {
      return num1 + num2 + num3;
    }
  }
  return 0;
};

const nums = [2, 1, 2];
const result = largestPerimeter(nums);

console.log(result);
