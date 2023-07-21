//238. Product of Array Except Self

var productExceptSelf = function (nums) {
  const answer = [1];
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }
  return answer;
};

const result = productExceptSelf([1, 2, 3, 4]);

console.log(result);
