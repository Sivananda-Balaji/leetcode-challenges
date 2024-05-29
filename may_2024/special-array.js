//1608. Special Array With X Elements Greater Than or Equal X

var specialArray = function (nums) {
  nums.sort((a, b) => b - a);
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i + 1 <= nums[i] && (i + 1 == nums.length || i + 1 > nums[i + 1])) {
      return i + 1;
    }
  }
  return -1;
};

const nums = [3, 9, 7, 8, 3, 8, 6, 6];

const result = specialArray(nums);

console.log(result);
