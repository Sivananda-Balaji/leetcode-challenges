//169. Majority Element

var majorityElement = function (nums) {
  if (nums.length < 2) {
    return nums[0];
  }
  const times = Math.floor(nums.length / 2);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (const i in map) {
    if (map[i] > times) {
      return i;
    }
  }
};

const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);

console.log(result);
