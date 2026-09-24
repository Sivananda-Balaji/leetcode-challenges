//3550. Smallest Index With Digit Sum Equal to Index

var smallestIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let sum = 0;
    while (val > 0) {
      const last = val % 10;
      sum += last;
      val = Math.floor(val / 10);
    }
    if (sum === i) {
      return i;
    }
  }
  return -1;
};

const nums = [1, 3, 2];

const result = smallestIndex(nums);

console.log(result);
