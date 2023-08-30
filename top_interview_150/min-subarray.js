//209. Minimum Size Subarray Sum

var minSubArrayLen = function (target, nums) {
  let start = 0;
  let answer = Infinity;
  let sum = 0;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      answer = Math.min(answer, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return answer === Infinity ? 0 : answer;
};

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];

const result = minSubArrayLen(target, nums);

console.log(result);
