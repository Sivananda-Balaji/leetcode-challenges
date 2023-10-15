//137. Single Number II

var singleNumber = function (nums) {
  let one = 0;
  let two = 0;
  for (let num of nums) {
    one = (one ^ num) & ~two;
    two = (two ^ num) & ~one;
  }
  return one;
};

const nums = [2, 2, 3, 2];

const result = singleNumber(nums);

console.log(result);
