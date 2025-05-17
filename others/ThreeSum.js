//15. 3Sum

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1,
      k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        k--;
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return ans;
};

const nums = [-1, 0, 1, 2, -1, -4];

const result = threeSum(nums);

console.log(result);
