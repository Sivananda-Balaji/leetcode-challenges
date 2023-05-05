//1480. Running Sum of 1d Array

var runningSum = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = count += nums[i];
  }
  return nums;
};

const result = runningSum([1, 2, 3, 4]);
console.log(result);
