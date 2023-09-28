//169. Majority Element

var majorityElement = function (nums) {
  let majority = nums[0];
  let vote = 1;
  for (let i = 1; i < nums.length; i++) {
    if (vote === 0) {
      majority = nums[i];
      vote = 1;
    } else if (majority === nums[i]) {
      vote++;
    } else {
      vote--;
    }
  }
  return majority;
};

const nums = [2, 2, 1, 1, 1, 2, 2];

const result = majorityElement(nums);

console.log(result);
