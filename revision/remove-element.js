//27. Remove Element

var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

const nums = [3, 2, 2, 3],
  val = 3;
const result = removeElement(nums, val);

console.log(result);
