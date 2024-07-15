//350. Intersection of Two Arrays II

var intersect = function (nums1, nums2) {
  const map1 = {},
    map2 = {};
  for (let num of nums1) {
    map1[num] ? map1[num]++ : (map1[num] = 1);
  }
  for (let num of nums2) {
    map2[num] ? map2[num]++ : (map2[num] = 1);
  }
  const answer = [];
  for (let i in map1) {
    if (map2[i]) {
      const min = Math.min(map1[i], map2[i]);
      for (let j = 0; j < min; j++) {
        answer.push(i);
      }
    }
  }
  return answer;
};

const nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

const result = intersect(nums1, nums2);

console.log(result);
