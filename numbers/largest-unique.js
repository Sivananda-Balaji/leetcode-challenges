//1133. Largest Unique Number

var largestUniqueNumber = function (nums) {
  const map = {};
  for (let val of nums) {
    map[val] ? map[val]++ : (map[val] = 1);
  }
  let maxValue = -1;
  for (let index in map) {
    if (map[index] === 1) {
      maxValue = Math.max(maxValue, index);
    }
  }
  return maxValue;
};

const nums = [5, 7, 3, 9, 4, 9, 8, 3, 1];

const result = largestUniqueNumber(nums);

console.log(result);
