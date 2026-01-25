//1984. Minimum Difference Between Highest and Lowest of K Scores

var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let start = 0,
    end = k - 1;
  let ans = Infinity;
  while (end < nums.length) {
    const diff = nums[end] - nums[start];
    ans = Math.min(ans, diff);
    start++;
    end++;
  }
  return ans;
};

const nums = [9, 4, 1, 7],
  k = 2;

const result = minimumDifference(nums, k);

console.log(result);
