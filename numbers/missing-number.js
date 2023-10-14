//268. Missing Number

var missingNumber = function (nums) {
  const positive = new Array(nums.length).fill(false);
  for (let val of nums) {
    positive[val] = true;
  }
  for (let i = 0; i < positive.length; i++) {
    if (!positive[i]) {
      return i;
    }
  }
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const result = missingNumber(nums);

console.log(result);
