//260. Single Number III

var singleNumber = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return Array.from(set);
};

const nums = [1, 2, 1, 3, 2, 5];

const result = singleNumber(nums);

console.log(result);
