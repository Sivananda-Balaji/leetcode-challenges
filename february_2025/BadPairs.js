//2364. Count Number of Bad Pairs

var countBadPairs = function (nums) {
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const val = nums[i] - i;
    map[val] ? map[val]++ : (map[val] = 1);
  }

  const totalPairs = (len * (len - 1)) / 2;
  let goodPairs = 0;
  for (let i in map) {
    const count = map[i];
    if (count > 1) {
      goodPairs += (count * (count - 1)) / 2;
    }
  }
  return totalPairs - goodPairs;
};

const nums = [4, 1, 3, 3];

const result = countBadPairs(nums);

console.log(result);
