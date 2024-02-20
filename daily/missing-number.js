//268. Missing Number

var missingNumber = function (nums) {
  const len = nums.length;
  const total = (len * (len + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return total - sum;
};

const nums = [3, 0, 1];

const result = missingNumber(nums);

console.log(result);

/**
 * 
 * var missingNumber = function (nums) {
  const mapArr = new Array(nums.length).fill(false);
  for (let i = 0; i < nums.length; i++) {
    mapArr[nums[i]] = true;
  }
  for (let i = 0; i < mapArr.length; i++) {
    if (!mapArr[i]) {
      return i;
    }
  }
  return mapArr.length;
};
 * 
 */
