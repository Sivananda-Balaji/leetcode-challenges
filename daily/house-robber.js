//198. House Robber

var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let answer1 = nums[0];
  let answer2 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const temp = answer2;
    answer2 = Math.max(answer2, answer1 + nums[i]);
    answer1 = temp;
  }
  return answer2;
};

const nums = [2, 1, 1, 2];

const result = rob(nums);

console.log(result);
