//15. 3Sum

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      while (start < end) {
        const sum = nums[i] + nums[start] + nums[end];
        if (sum === 0) {
          answer.push([nums[i], nums[start], nums[end]]);
          while (start < end && nums[start] === nums[start + 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end - 1]) {
            end--;
          }
          start++;
          end--;
        } else if (sum > 0) {
          end--;
        } else {
          start++;
        }
      }
    }
  }
  return answer;
};

const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result);
