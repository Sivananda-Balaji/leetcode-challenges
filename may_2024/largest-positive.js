//2441. Largest Positive Integer That Exists With Its Negative

var findMaxK = function (nums) {
  let answer = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums.includes(-nums[i]) && nums[i] > answer) {
      answer = nums[i];
    }
  }
  return answer;
};

const nums = [-1, 2, -3, 3];
const result = findMaxK(nums);

console.log(result);
