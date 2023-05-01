//1929. Concatenation of Array

var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

const result = getConcatenation([1, 3, 2, 1]);
console.log(result);
