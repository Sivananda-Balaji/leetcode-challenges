//2161. Partition Array According to Given Pivot

var pivotArray = function (nums, pivot) {
  const less = [],
    great = [],
    equal = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      great.push(nums[i]);
    } else if (nums[i] < pivot) {
      less.push(nums[i]);
    } else {
      equal.push(nums[i]);
    }
  }
  return (nums = [...less, ...equal, ...great]);
};

const nums = [9, 12, 5, 10, 14, 3, 10],
  pivot = 10;

const result = pivotArray(nums, pivot);

console.log(result);
