//1848. Minimum Distance to the Target Element

var getMinDistance = function (nums, target, start) {
  let diff = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      let tempDiff = Math.abs(i - start);
      if (tempDiff < diff) {
        diff = tempDiff;
      }
    }
  }
  return diff;
};

const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  target = 1,
  start = 0;

const result = getMinDistance(nums, target, start);

console.log(result);
