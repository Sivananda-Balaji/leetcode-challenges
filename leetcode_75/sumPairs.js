//1679. Max Number of K-Sum Pairs

var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] > k) {
      right--;
    } else if (nums[left] + nums[right] < k) {
      left++;
    } else {
      left++;
      right--;
      count++;
    }
  }
  return count;
};

const result = maxOperations([1, 2, 3, 4], 5);

console.log(result);
