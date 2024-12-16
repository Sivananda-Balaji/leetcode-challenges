//3264. Final Array State After K Multiplication Operations I

var getFinalState = function (nums, k, multiplier) {
  const getMin = () => {
    let min = nums[0];
    let minIndex = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i];
        minIndex = i;
      }
    }
    return minIndex;
  };
  for (let i = 0; i < k; i++) {
    const minIndexValue = getMin();
    nums[minIndexValue] = nums[minIndexValue] * multiplier;
  }
  return nums;
};

const nums = [1, 5, 2],
  k = 4,
  multiplier = 4;

const result = getFinalState(nums, k, multiplier);

console.log(result);
