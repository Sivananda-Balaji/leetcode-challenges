//217. Contains Duplicate
var containsDuplicate = function (nums) {
  return !(new Set(nums).size === nums.length);
};

const result = containsDuplicate([1, 2, 3, 1]);
console.log(result);
