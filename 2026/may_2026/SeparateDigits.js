//2553. Separate the Digits in an Array

var separateDigits = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    const temp = [];
    while (val > 0) {
      const last = val % 10;
      temp.push(last);
      val = Math.floor(val / 10);
    }
    temp.reverse();
    ans.push(...temp);
  }
  return ans;
};

const nums = [13, 25, 83, 77];

const result = separateDigits(nums);

console.log(result);
