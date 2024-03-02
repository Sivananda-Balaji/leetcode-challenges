//977. Squares of a Sorted Array

var sortedSquares = function (nums) {
  const answer = [];
  let left = 0,
    right = nums.length - 1;
  index = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      answer[index--] = nums[right] * nums[right];
      right--;
    } else {
      answer[index--] = nums[left] * nums[left];
      left++;
    }
  }
  return answer;
};

const nums = [-4, -1, 0, 3, 10];

const result = sortedSquares(nums);

console.log(result);

/**
 * var sortedSquares = function (nums) {
  const squares = nums.map((num) => num * num);
  return squares.sort((a, b) => a - b);
};
 * 
 */
