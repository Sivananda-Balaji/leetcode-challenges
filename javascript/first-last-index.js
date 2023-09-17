//Index of last Occurrence in Sorted in JS

var searchRange = function (nums, target) {
  const answer = [-1, -1];
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      if (nums[mid - 1] === target) {
        end = mid - 1;
      } else {
        answer[0] = mid;
        break;
      }
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  (start = 0), (end = nums.length - 1);
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      if (nums[mid + 1] === target) {
        start = mid + 1;
      } else {
        answer[1] = mid;
        break;
      }
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
};

const nums = [5, 7, 7, 8, 8, 10],
  target = 8;

const result = searchRange(nums, target);

console.log(result);
