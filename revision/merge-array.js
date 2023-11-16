//88. Merge Sorted Array

var merge = function (nums1, m, nums2, n) {
  const answer = new Array(m + n);
  let i = 0,
    j = 0,
    index = 0;
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      answer[index++] = nums1[i++];
    } else {
      answer[index++] = nums2[j++];
    }
  }
  while (i < m) {
    answer[index++] = nums1[i++];
  }
  while (j < n) {
    answer[index++] = nums2[j++];
  }
  index = 0;
  while (index < answer.length) {
    nums1[index] = answer[index++];
  }
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

const result = merge(nums1, m, nums2, n);

console.log(nums1);
