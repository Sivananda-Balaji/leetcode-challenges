//2210. Count Hills and Valleys in an Array

var countHillValley = function (nums) {
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      newArr.push(nums[i]);
    }
  }
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (
      (newArr[i] > newArr[i - 1] && newArr[i] > newArr[i + 1]) ||
      (newArr[i] < newArr[i - 1] && newArr[i] < newArr[i + 1])
    ) {
      count++;
    }
  }
  return count;
};

const nums = [6, 6, 5, 5, 4, 1];

const result = countHillValley(nums);

console.log(result);
