//645. Set Mismatch

var findErrorNums = function (nums) {
  const map = {};
  let dupNum = -1;
  let missNum = -1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num]) {
      dupNum = num;
    } else {
      map[num] = 1;
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      missNum = i;
      break;
    }
  }
  return [dupNum, missNum];
};

const nums = [1, 2, 2, 4];

const result = findErrorNums(nums);

console.log(result);
