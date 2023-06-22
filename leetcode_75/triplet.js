//334. Increasing Triplet Subsequence

var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      return true;
    }
  }
  return false;
};

const result = increasingTriplet([2, 1, 5, 0, 4, 6]);

console.log(result);
