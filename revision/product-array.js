//238. Product of Array Except Self

var productExceptSelf = function (nums) {
  const answer = [];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (i = nums.length - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }
  return answer;
};

const nums = [1, 2, 3, 4];

const result = productExceptSelf(nums);

console.log(result);

/**
 * 
 * var productExceptSelf = function (nums) {
  const answer = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        answer[i] *= nums[j];
      }
    }
  }
  return answer;
};


var productExceptSelf = function (nums) {
  const prefix = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      prefix[i] = 1;
    } else {
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }
  const suffix = [];
  for (i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix[i] * suffix[i];
  }
  return answer;
};


 */
