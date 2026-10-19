//2089. Find Target Indices After Sorting Array

var targetIndices = function (nums, target) {
  let smaller = 0,
    equal = 0;
  for (let num of nums) {
    if (num < target) {
      smaller++;
    } else if (num === target) {
      equal++;
    }
  }
  const ans = [];
  for (let i = 0; i < equal; i++) {
    ans.push(smaller++);
  }
  return ans;
};

const nums = [1, 2, 5, 2, 3],
  target = 2;

const result = targetIndices(nums, target);

console.log(result);
