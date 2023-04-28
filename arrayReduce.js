//2626. Array Reduce Transformation
var reduce = function (nums, fn, init) {
  let result = init;
  nums.forEach((ele) => {
    result = fn(result, ele);
  });
  return result;
};

const nums = [1, 2, 3, 4];
function sum(accum, curr) {
  return accum + curr;
}
const result = reduce(nums, sum, 0);

console.log(result);
