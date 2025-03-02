//2570. Merge Two 2D Arrays by Summing Values

var mergeArrays = function (nums1, nums2) {
  const answer = [];
  let i = 0,
    j = 0;
  let len1 = nums1.length,
    len2 = nums2.length;
  while (i < len1 || j < len2) {
    if (nums1[i] && nums2[j]) {
      if (nums1[i][0] < nums2[j][0]) {
        answer.push(nums1[i]);
        i++;
      } else if (nums2[j][0] < nums1[i][0]) {
        answer.push(nums2[j]);
        j++;
      } else {
        const val = nums1[i][1] + nums2[j][1];
        answer.push([nums1[i][0], val]);
        i++, j++;
      }
    } else if (nums1[i]) {
      answer.push(nums1[i++]);
    } else if (nums2[j]) {
      answer.push(nums2[j++]);
    }
  }
  return answer;
};
const nums1 = [
    [2, 4],
    [3, 6],
    [5, 5],
  ],
  nums2 = [
    [1, 3],
    [4, 3],
  ];

const result = mergeArrays(nums1, nums2);

console.log(result);
