//540. Single Element in a Sorted Array

var singleNonDuplicate = function (nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const isEven = mid % 2 == 0;
    if (nums[mid] === nums[mid + 1]) {
      if (isEven) {
        start = mid + 2;
      } else {
        end = mid - 1;
      }
    } else if (nums[mid] === nums[mid - 1]) {
      if (isEven) {
        end = mid - 2;
      } else {
        start = mid + 1;
      }
    } else {
      return nums[mid];
    }
  }
  return nums[start];
};

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

const result = singleNonDuplicate(nums);

console.log(result);
