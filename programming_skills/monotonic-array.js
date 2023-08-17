//896. Monotonic Array

var isMonotonic = function (nums) {
  let increment = true;
  let decrement = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      increment = false;
    } else if (nums[i] < nums[i + 1]) {
      decrement = false;
    }
  }
  return increment || decrement;
};

const nums = [1, 3, 2];
const result = isMonotonic(nums);

console.log(result);
