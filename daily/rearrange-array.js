//2149. Rearrange Array Elements by Sign

var rearrangeArray = function (nums) {
  const temp = new Array(nums.length);
  let left = 0,
    right = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      temp[left++] = nums[i];
    } else {
      temp[right--] = nums[i];
    }
  }
  (left = 0), (right = nums.length - 1);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = temp[left++];
    } else {
      nums[i] = temp[right--];
    }
  }
  return nums;
};

const nums = [3, 1, -2, -5, 2, -4];

const result = rearrangeArray(nums);

console.log(result);

/**
 * 
 * var rearrangeArray = function (nums) {
  const pos = [];
  const neg = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos.push(nums[i]);
    } else {
      neg.push(nums[i]);
    }
  }
  let left = 0,
    right = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = pos[left++];
    } else {
      nums[i] = neg[right++];
    }
  }
  return nums;
};
 * 
 * 
 */
