//3190. Find Minimum Operations to Make All Elements Divisible by Three

var minimumOperations = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val % 3 !== 0) {
      const valueToBeAdded = Math.min(val % 3, 3 - (val % 3));
      count += valueToBeAdded;
    }
  }
  return count;
};

const nums = [1, 2, 3, 4];

const result = minimumOperations(nums);

console.log(result);
