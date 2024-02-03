//1365. How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i] && i !== j) {
        temp++;
      }
    }
    answer[i] = temp;
  }
  return answer;
};

const nums = [8, 1, 2, 2, 3];

const result = smallerNumbersThanCurrent(nums);

console.log(result);
