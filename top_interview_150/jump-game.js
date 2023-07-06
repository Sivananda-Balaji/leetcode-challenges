//55. Jump Game

var canJump = function (nums) {
  let last = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= last) {
      last = i;
    }
  }
  return last === 0;
};

const result = canJump([2, 3, 1, 1, 4]);

console.log(result);
