//977. Squares of a Sorted Array

var sortedSquares = function (nums) {
  const answer = [];
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      const num = nums[left] * nums[left];
      answer.unshift(num);
      left++;
    } else {
      const num = nums[right] * nums[right];
      answer.unshift(num);
      right--;
    }
  }
  return answer;
};

const nums = [-4, -1, 0, 3, 10];

const result = sortedSquares(nums);

console.log(result);
