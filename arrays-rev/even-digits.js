//1295. Find Numbers with Even Number of Digits

var findNumbers = function (nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (String(nums[i]).length % 2 === 0) {
      answer++;
    }
  }
  return answer;
};

const nums = [12, 345, 2, 6, 7896];

const result = findNumbers(nums);

console.log(result);
