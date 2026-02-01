//3010. Divide an Array Into Subarrays With Minimum Cost I

var minimumCost = function (nums) {
  let ans = Infinity;
  for (let i = 1; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const cost = nums[0] + nums[i] + nums[j];
      ans = Math.min(cost, ans);
    }
  }
  return ans;
};

const nums = [1, 2, 3, 12];
const result = minimumCost(nums);

console.log(result);
