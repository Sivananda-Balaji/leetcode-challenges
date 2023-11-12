//1. Two Sum

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const newNum = target - nums[i];
    if (map.has(newNum)) {
      return [map.get(newNum), i];
    }
    map.set(nums[i], i);
  }
};

const nums = [2, 7, 11, 15],
  target = 9;

const result = twoSum(nums, target);

console.log(result);
