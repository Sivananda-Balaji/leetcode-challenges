//3300. Minimum Element After Replacement With Digit Sum

var minElement = function (nums) {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let temp = 0;
    while (val > 0) {
      temp += val % 10;
      val = Math.floor(val / 10);
    }
    if (temp < min) {
      min = temp;
    }
  }
  return min;
};

const nums = [10, 12, 13, 14];

const result = minElement(nums);

console.log(result);
