//1. Two Sum

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (map[val] !== undefined) {
      return [map[val], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};

const result = twoSum([2, 7, 11, 15], 9);
console.log(result);
