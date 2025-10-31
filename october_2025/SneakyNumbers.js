//3289. The Two Sneaky Numbers of Digitville

var getSneakyNumbers = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] !== undefined ? map[nums[i]]++ : (map[nums[i]] = 1);
  }
  const ans = [];
  for (let i in map) {
    if (map[i] === 2) {
      ans.push(Number(i));
    }
  }
  return ans;
};

const nums = [0, 1, 1, 0];

const result = getSneakyNumbers(nums);

console.log(result);
