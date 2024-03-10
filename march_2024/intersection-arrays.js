//349. Intersection of Two Arrays

var intersection = function (nums1, nums2) {
  const answer = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !answer.includes(nums1[i])) {
      answer.push(nums1[i]);
    }
  }
  return answer;
};

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

const result = intersection(nums1, nums2);

console.log(result);
