//26. Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

console.log(result);
