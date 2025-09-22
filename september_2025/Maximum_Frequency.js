//3005. Count Elements With Maximum Frequency

var maxFrequencyElements = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    map[val] ? map[val]++ : (map[val] = 1);
  }
  let max = -Infinity;
  for (let i in map) {
    max = Math.max(max, map[i]);
  }
  let count = 0;
  for (let i in map) {
    if (map[i] === max) {
      count += max;
    }
  }
  return count;
};

const nums = [1, 2, 2, 3, 1, 4];

const result = maxFrequencyElements(nums);

console.log(result);
