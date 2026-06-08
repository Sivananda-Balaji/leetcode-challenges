//2161. Partition Array According to Given Pivot

var pivotArray = function (nums, pivot) {
  const lessArr = [],
    greaterArr = [],
    sameArr = [];
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val < pivot) {
      lessArr.push(val);
    } else if (val > pivot) {
      greaterArr.push(val);
    } else {
      sameArr.push(val);
    }
  }
  return [...lessArr, ...sameArr, ...greaterArr];
};

const nums = [9, 12, 5, 10, 14, 3, 10],
  pivot = 10;

const result = pivotArray(nums, pivot);

console.log(result);
