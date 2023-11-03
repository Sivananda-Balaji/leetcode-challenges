//334. Increasing Triplet Subsequence

var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;
  for (let num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
};

const nums = [1, 2, 3, 4, 5];

const result = increasingTriplet(nums);

console.log(result);
