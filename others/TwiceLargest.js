//747. Largest Number At Least Twice of Others

var dominantIndex = function (nums) {
  let index = -1,
    first = -1,
    second = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
      index = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return second * 2 > first ? -1 : index;
};

const nums = [3, 6, 1, 0];

const result = dominantIndex(nums);

console.log(result);
