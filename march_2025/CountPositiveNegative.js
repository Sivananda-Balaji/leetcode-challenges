//2529. Maximum Count of Positive Integer and Negative Integer

var maximumCount = function (nums) {
  let neg = 0,
    pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos++;
    } else if (nums[i] < 0) {
      neg++;
    }
  }
  return Math.max(pos, neg);
};

const nums = [-3, -2, -1, 0, 0, 1, 2];

const result = maximumCount(nums);

console.log(result);
