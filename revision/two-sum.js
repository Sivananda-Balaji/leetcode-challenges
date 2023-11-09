//1. Two Sum

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (map[num] !== undefined) {
      return [map[num], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

const nums = [2, 7, 11, 15],
  target = 9;

const result = twoSum(nums, target);

console.log(result);
