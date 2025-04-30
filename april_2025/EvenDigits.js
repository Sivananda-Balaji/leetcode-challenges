//1295. Find Numbers with Even Number of Digits

var findNumbers = function (nums) {
  let count = 0;
  const isEven = (num) => {
    let temp = 0;
    while (num > 0) {
      temp++;
      num = Math.floor(num / 10);
    }
    return temp % 2 === 0;
  };
  for (let i = 0; i < nums.length; i++) {
    if (isEven(nums[i])) {
      count++;
    }
  }
  return count;
};

const nums = [12, 345, 2, 6, 7896];

const result = findNumbers(nums);

console.log(result);
