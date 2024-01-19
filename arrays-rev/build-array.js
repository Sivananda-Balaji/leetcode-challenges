//1920. Build Array from Permutation

var buildArray = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer[i] = nums[nums[i]];
  }
  return answer;
};

const nums = [0, 2, 1, 5, 3, 4];

const result = buildArray(nums);

console.log(result);
