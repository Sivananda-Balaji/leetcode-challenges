//80. Remove Duplicates from Sorted Array II

var removeDuplicates = function (nums) {
  let count = 1,
    index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

const result = removeDuplicates([1, 1, 1, 2, 2, 3]);

console.log(result);
