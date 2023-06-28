//2215. Find the Difference of Two Arrays

var findDifference = function (nums1, nums2) {
  const num1Set = new Set(nums1);
  const num2Set = new Set(nums2);
  const num1Arr = Array.from(num1Set).filter((num) => !num2Set.has(num));
  const num2Arr = Array.from(num2Set).filter((num) => !num1Set.has(num));
  return [num1Arr, num2Arr];
};

const nums1 = [1, 2, 3],
  nums2 = [2, 4, 6];
const result = findDifference(nums1, nums2);

console.log(result);
