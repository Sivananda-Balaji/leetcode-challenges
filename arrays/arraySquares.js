// Normal Approach
var sortedSquares = function (nums) {
  const squaredArr = [];
  for (let i = 0; i < nums.length; i++) {
    squaredArr.push(nums[i] * nums[i]);
  }
  return squaredArr.sort((a, b) => a - b);
};

const results = sortedSquares([-4, -1, 0, 3, 10]);

console.log(results);

// Efficient Approach

var sortedSquare = function (nums) {
  const squared = [];
  let left = 0,
    right = nums.length - 1;
  for (let i = right; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      squared[i] = nums[left] * nums[left];
      left++;
    } else {
      squared[i] = nums[right] * nums[right];
      right--;
    }
  }
  return nums;
};

const result = sortedSquare([-4, -1, 0, 3, 10]);

console.log(result);
