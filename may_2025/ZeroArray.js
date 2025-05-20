//3355. Zero Array Transformation I

var isZeroArray = function (nums, queries) {
  const diff = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const left = queries[i][0];
    const right = queries[i][1] + 1;
    diff[left] += 1;
    diff[right] -= 1;
  }
  const count = new Array(nums.length).fill(0);
  let prefix = diff[0];
  for (let i = 0; i < diff.length; i++) {
    count[i] += prefix;
    prefix += diff[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (count[i] < nums[i]) {
      return false;
    }
  }
  return true;
};

const nums = [4, 3, 2, 1],
  queries = [
    [1, 3],
    [0, 2],
  ];

const result = isZeroArray(nums, queries);

console.log(result);
