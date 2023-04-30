//88. Merge Sorted Array

var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  const sortedArr = [];
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      sortedArr.push(nums1[i]);
      i++;
    } else {
      sortedArr.push(nums2[j]);
      j++;
    }
  }
  while (i < m) {
    sortedArr.push(nums1[i]);
    i++;
  }
  while (j < n) {
    sortedArr.push(nums2[j]);
    j++;
  }
  return sortedArr;
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

const result = merge(nums1, m, nums2, n);

console.log(result);
