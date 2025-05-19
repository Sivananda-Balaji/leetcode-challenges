//3024. Type of Triangle

var triangleType = function (nums) {
  if (
    nums[0] + nums[1] > nums[2] &&
    nums[1] + nums[2] > nums[0] &&
    nums[0] + nums[2] > nums[1]
  ) {
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
      return "equilateral";
    } else if (
      nums[1] === nums[2] ||
      nums[0] === nums[2] ||
      nums[0] === nums[1]
    ) {
      return "isosceles";
    } else {
      return "scalene";
    }
  } else {
    return "none";
  }
};

const nums = [3, 3, 3];

const result = triangleType(nums);

console.log(result);
