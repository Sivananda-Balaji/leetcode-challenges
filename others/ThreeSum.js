//15. 3Sum

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let set = new Set();
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1,
      k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        set.add(String([nums[i], nums[j], nums[k]]));
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return Array.from(set).map((val) => val.split(",").map((num) => Number(num)));
};

const nums = [-1, 0, 1, 2, -1, -4];

const result = threeSum(nums);

console.log(result);
