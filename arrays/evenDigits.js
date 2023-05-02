//Find Numbers with Even Number of Digits

var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((Math.floor(Math.log10(nums[i]) + 1) & 1) === 0) {
      count++;
    }
  }
  return count;
};

const results = findNumbers([555, 901, 482, 1771]);

console.log(results);
