//215. Kth Largest Element in an Array

var findKthLargest = function (nums, k) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const pIndex = partition(nums, start, end);
    if (pIndex === k - 1) {
      return nums[pIndex];
    } else if (pIndex > k - 1) {
      end = pIndex - 1;
    } else {
      start = pIndex + 1;
    }
  }
};

const partition = (nums, start, end) => {
  let p = start;
  let pivot = nums[end];
  for (let i = start; i < end; i++) {
    if (nums[i] > pivot) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      p++;
    }
  }
  [nums[end], nums[p]] = [nums[p], nums[end]];
  return p;
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;

const result = findKthLargest(nums, k);

console.log(result);
