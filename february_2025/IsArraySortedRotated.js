//1752. Check if Array Is Sorted and Rotated

var check = function (nums) {
  if (nums.length < 2) {
    return true;
  }
  const sortedArr = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    const val = sortedArr.shift();
    sortedArr.push(val);
    if (String(sortedArr) === String(nums)) {
      return true;
    }
  }
  return false;
};

const nums = [3, 4, 5, 1, 2];

const result = check(nums);

console.log(result);
