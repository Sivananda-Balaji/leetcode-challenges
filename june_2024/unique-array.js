//945. Minimum Increment to Make Array Unique

var minIncrementForUnique = function (nums) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums[i] = nums[i] + 1;
      answer++;
    } else if (nums[i] < nums[i - 1]) {
      const diff = nums[i - 1] - nums[i] + 1;
      nums[i] += diff;
      answer += diff;
    }
  }
  return answer;
};

const nums = [3, 2, 1, 2, 1, 7];

const result = minIncrementForUnique(nums);

console.log(result);
