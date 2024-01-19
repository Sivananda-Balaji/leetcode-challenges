//1929. Concatenation of Array

var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

const nums = [1, 2, 1];

const result = getConcatenation(nums);

console.log(result);
