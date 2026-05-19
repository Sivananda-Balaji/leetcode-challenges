//2540. Minimum Common Value

var getCommon = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let pt1 = 0,
    pt2 = 0;
  while (pt1 < len1 && pt2 < len2) {
    if (nums1[pt1] === nums2[pt2]) {
      return nums1[pt1];
    } else if (nums1[pt1] > nums2[pt2]) {
      pt2++;
    } else {
      pt1++;
    }
  }
  return -1;
};

const nums1 = [1, 2, 3],
  nums2 = [2, 4];

const result = getCommon(nums1, nums2);

console.log(result);
