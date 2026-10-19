//2089. Find Target Indices After Sorting Array

var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      ans.push(i);
    }
  }
  return ans;
};

const nums = [1, 2, 5, 2, 3],
  target = 2;

const result = targetIndices(nums, target);

console.log(result);
