//912. Sort an Array

var sortArray = function (nums) {
  const start = 0;
  const end = nums.length - 1;
  const partition = (nums, start, end) => {
    const pivot = nums[end];
    let pIndex = start;
    for (let i = start; i < end; i++) {
      if (nums[i] < pivot) {
        [nums[i], nums[pIndex]] = [nums[pIndex], nums[i]];
        pIndex++;
      }
    }
    [nums[pIndex], nums[end]] = [nums[end], nums[pIndex]];
    return pIndex;
  };
  const quickSort = (nums, start, end) => {
    if (start < end) {
      const pIndex = partition(nums, start, end);
      quickSort(nums, start, pIndex - 1);
      quickSort(nums, pIndex + 1, end);
    }
    return nums;
  };
  return quickSort(nums, start, end);
};

const nums = [5, 2, 3, 1];

const res = sortArray(nums);

console.log(res);
