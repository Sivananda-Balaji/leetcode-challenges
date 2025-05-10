//454. 4Sum II

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const val = -(nums3[i] + nums4[j]);
      if (map.has(val)) {
        count += map.get(val);
      }
    }
  }
  return count;
};

const nums1 = [1, 2],
  nums2 = [-2, -1],
  nums3 = [-1, 2],
  nums4 = [0, 2];

const result = fourSumCount(nums1, nums2, nums3, nums4);

console.log(result);
