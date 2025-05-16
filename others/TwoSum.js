//1. Two Sum

var twoSum = function (nums, target) {
  const copy = [...nums];
  const ans = [];
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      ans.push(nums[left], nums[right]);
      break;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  const leftIndex = copy.indexOf(ans[0]);
  let rightIndex = -1;
  if (ans[0] === ans[1]) {
    rightIndex = copy.indexOf(ans[1], leftIndex + 1);
  } else {
    rightIndex = copy.indexOf(ans[1]);
  }
  return [leftIndex, rightIndex];
};

const nums = [-1, -2, -3, -4, -5],
  target = -8;

const result = twoSum(nums, target);

console.log(result);
