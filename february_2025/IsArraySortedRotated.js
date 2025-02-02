//1752. Check if Array Is Sorted and Rotated

var check = function (nums) {
  if (nums.length < 2) {
    return true;
  }
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;
    }
  }
  if (nums[0] < nums.at(-1)) {
    count++;
  }
  return count <= 1;
};

const nums = [3, 4, 5, 1, 2];

const result = check(nums);

console.log(result);
