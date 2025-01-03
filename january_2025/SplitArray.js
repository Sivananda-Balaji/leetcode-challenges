//2270. Number of Ways to Split Array

var waysToSplitArray = function (nums) {
  let answer = 0,
    min = 0,
    max = nums.reduce((acc, i) => acc + i, 0);
  for (let i = 0; i < nums.length - 1; i++) {
    max -= nums[i];
    min += nums[i];
    if (min >= max) {
      answer++;
    }
  }
  return answer;
};
const nums = [10, 4, -8, 7];

const result = waysToSplitArray(nums);

console.log(result);
