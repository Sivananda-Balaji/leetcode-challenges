//2574. Left and Right Sum Differences

var leftRightDifference = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  const ans = [];
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    ans.push(Math.abs(leftSum - rightSum));
    leftSum += nums[i];
  }
  return ans;
};

const nums = [10, 4, 8, 3];

const result = leftRightDifference(nums);

console.log(result);
