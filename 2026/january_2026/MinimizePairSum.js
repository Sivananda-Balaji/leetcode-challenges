//1877. Minimize Maximum Pair Sum in Array

var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    const sum = nums[start] + nums[end];
    ans = Math.max(ans, sum);
    start++;
    end--;
  }
  return ans;
};

const nums = [3, 5, 2, 3];

const result = minPairSum(nums);

console.log(result);
