//961. N-Repeated Element in Size 2N Array

var repeatedNTimes = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    map[val] !== undefined ? map[val]++ : (map[val] = 1);
  }
  for (let index in map) {
    if (map[index] > 1) {
      return Number(index);
    }
  }
};

const nums = [2, 1, 2, 5, 3, 2];

const result = repeatedNTimes(nums);

console.log(result);
