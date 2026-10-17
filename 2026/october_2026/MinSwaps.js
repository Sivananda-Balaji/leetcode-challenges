//3551. Minimum Swaps to Sort by Digit Sum

var minSwaps = function (nums) {
  const len = nums.length;
  const map = {};
  const indexMap = {};
  for (let i = 0; i < len; i++) {
    let val = nums[i];
    let sum = 0;
    while (val > 0) {
      const last = val % 10;
      sum += last;
      val = Math.floor(val / 10);
    }
    map[nums[i]] = sum;
    indexMap[nums[i]] = i;
  }
  const target = Object.entries(map).sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return Number(a[0]) - Number(b[0]);
  });
  const sorted = target.map(([char]) => Number(char));
  let swaps = 0;
  for (let i = 0; i < len; i++) {
    const originalVal = nums[i];
    const targetVal = sorted[i];
    if (originalVal !== targetVal) {
      const valueA = indexMap[originalVal];
      const valueB = indexMap[targetVal];
      [nums[valueA], nums[valueB]] = [nums[valueB], nums[valueA]];
      indexMap[originalVal] = valueB;
      indexMap[targetVal] = valueA;
      swaps++;
    }
  }
  return swaps;
};

const nums = [18, 43, 34, 16];

const result = minSwaps(nums);

console.log(result);
