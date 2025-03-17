//2206. Divide Array Into Equal Pairs

var divideArray = function (nums) {
  const len = nums.length;
  const pairs = Math.floor(len / 2);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] ? map[nums[i]]++ : (map[nums[i]] = 1);
  }
  let count = 0;
  for (let index in map) {
    if (map[index] % 2 === 0) {
      count += Math.floor(map[index] / 2);
    }
  }
  return pairs === count;
};

const nums = [3, 2, 3, 2, 2, 2];

const result = divideArray(nums);

console.log(result);
