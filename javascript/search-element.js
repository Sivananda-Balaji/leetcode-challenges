//Search an Element in Rotated Sorted Array

const search = (arr, target) => {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return true;
    }
    if (arr[start] < arr[mid]) {
      if (target >= arr[start] && target < arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else if (arr[start] > arr[mid]) {
      if (target > arr[mid] && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      start++;
    }
  }
  return false;
};

const result = search([2, 5, 6, 0, 0, 1, 2], 0);

console.log(result);
