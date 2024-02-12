//169. Majority Element

var majorityElement = function (nums) {
  let candidate = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      } else {
        count--;
      }
    }
  }
  return candidate;
};

const nums = [3, 2, 3];

const result = majorityElement(nums);

console.log(result);
