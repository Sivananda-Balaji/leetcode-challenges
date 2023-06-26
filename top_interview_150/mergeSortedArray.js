//88. Merge Sorted Array

var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1;
  k = nums1.length - 1;
  while (k >= 0) {
    if (i >= 0 && j >= 0) {
      nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    } else if (j >= 0) {
      nums1[k--] = nums2[j--];
    } else {
      nums1[k--] = nums1[i--];
    }
  }
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

const result = merge(nums1, m, nums2, n);
console.log(result);
