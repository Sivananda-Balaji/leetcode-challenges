//2540. Minimum Common Value

var getCommon = function (nums1, nums2) {
  let index1 = 0;
  let index2 = 0;
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] < nums2[index2]) {
      index1++;
    } else if (nums2[index2] < nums1[index1]) {
      index2++;
    } else {
      return nums1[index1];
    }
  }
  return -1;
};

const nums1 = [1, 2, 3, 6],
  nums2 = [2, 3, 4, 5];

const result = getCommon(nums1, nums2);

console.log(result);
