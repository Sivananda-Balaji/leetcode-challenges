//3876. Construct Uniform Parity Array II

var uniformArray = function (nums1) {
  let smallest = Infinity;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] < smallest) {
      smallest = nums1[i];
    }
  }
  if (smallest % 2 !== 0) {
    return true;
  }
  return nums1.every((num) => num % 2 === 0);
};

const nums1 = [1, 4, 7];

const result = uniformArray(nums1);

console.log(result);
