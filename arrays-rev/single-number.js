//136. Single Number

var singleNumber = function (nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    answer ^= nums[i];
  }
  return answer;
};

const nums = [4, 1, 2, 1, 2];

const result = singleNumber(nums);

console.log(result);
