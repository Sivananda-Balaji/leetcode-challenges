//169. Majority Element

var majorityElement = function (nums) {
  const count = Math.floor(nums.length / 2);
  const map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  for (let i in map) {
    if (map[i] > count) {
      return i;
    }
  }
};

const nums = [2, 2, 1, 1, 1, 2, 2];

const result = majorityElement(nums);

console.log(result);
