//128. Longest Consecutive Sequence

var longestConsecutive = function (nums) {
  if (nums.length < 1) {
    return 0;
  }
  let answer = 1;
  let count = 1;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    } else if (nums[i] === nums[i + 1] - 1) {
      count++;
      answer = Math.max(count, answer);
    } else {
      count = 1;
    }
  }
  return answer;
};

const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

const result = longestConsecutive(nums);

console.log(result);
